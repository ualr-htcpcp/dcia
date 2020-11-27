import middleware from "middleware";
import CourseInstance from "models/CourseInstance";
import Semester from "models/Semester";
import nextConnect from "next-connect";
import { authenticate, forbiddenUnlessAdmin } from "utils/auth";

const handler = nextConnect();
handler.use(middleware);
handler.use(authenticate);
handler.use(forbiddenUnlessAdmin);

handler.get(async (req, res) => {
  const semesters = await Semester.find().lean();
  const lockedSemesterIds = await CourseInstance.distinct("semester");

  const currentDate = new Date();
  const nextYear = currentDate.getFullYear() + 1;
  const defaultYear = nextYear - 9;
  const earliestYear =
    semesters.sort((a, b) => b.year - a.year)[0]?.year || defaultYear;

  // default to 10-ish years ago or older if an earlier record exists
  let currentYear = Math.min(earliestYear, defaultYear);

  // build year/terms object for each year in range
  const years = [];
  while (currentYear <= nextYear) {
    years.push({ year: currentYear, terms: {} });
    currentYear += 1;
  }
  years.reverse();

  // add semesters to corresponding year objects
  semesters.forEach((semester) => {
    const year = years.find(({ year }) => year === semester.year);
    const isLocked = lockedSemesterIds.some((semesterId) =>
      semesterId.equals(semester._id)
    );
    year.terms[semester.term] = { isLocked };
  });

  return res.json(years);
});

handler.post(async (req, res) => {
  const {
    body: { year, terms },
  } = req;

  try {
    await Promise.all(
      ["spring", "summer", "fall"].map(async (term) => {
        const semester = await Semester.findOne({ year, term });
        const isTermEnabled = terms[term];

        if (semester && !isTermEnabled) {
          const isLocked = await CourseInstance.exists({ semester: semester });
          if (!isLocked) {
            await Semester.findByIdAndRemove(semester._id);
          }
        } else if (!semester && isTermEnabled) {
          await Semester.create({ year, term });
        }
      })
    );
    res.status(200).json({ message: `Updated ${year} terms` });
  } catch (err) {
    res.status(422).json({ error: true, message: err.message });
  }
});

export default handler;
