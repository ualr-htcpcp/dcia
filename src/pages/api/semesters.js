import nextConnect from "next-connect";
import middleware from "../../middleware";
import Semester from "../../models/Semester";
import { getSession } from "next-auth/client";
import CourseInstance from "../../models/CourseInstance";

const handler = nextConnect();
handler.use(middleware);

handler.post(async (req, res) => {
  const session = await getSession({ req });
  const {
    body: { year, terms },
  } = req;

  if (!session || !["admin", "root"].includes(session.user.accessLevel)) {
    return res.status(403).json({ error: true, message: "Forbidden" });
  }

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
