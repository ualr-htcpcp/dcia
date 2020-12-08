import middleware from "middleware";
import CourseInstance from "models/CourseInstance";
import "models/Semester";
import "models/Instructor";
import nextConnect from "next-connect";
import { authenticate, forbiddenUnlessAdmin } from "utils/auth";
import User from "models/User";
import { getSession } from "next-auth/client";

const handler = nextConnect();
handler.use(middleware);
handler.use(authenticate);

handler.post(async (req, res) => {
  await forbiddenUnlessAdmin(req, res);
  const {
    body: { course, semester, instructor },
  } = req;

  try {
    const courseInstance = await CourseInstance.create({
      course,
      semester,
      instructor,
    });
    res.json(courseInstance);
  } catch (error) {
    res.status(400).json({ error: true });
  }
});

handler.get(async (req, res) => {
  const session = await getSession({ req });
  const {
    query: { course },
  } = req;

  let query = { course };
  if (session.user.accessLevel === "instructor") {
    const user = await User.findOne({ _id: session.user.id });
    query = { course, instructor: user.instructor };
  }

  const courseInstances = await CourseInstance.find(query)
    .populate("semester", "year term")
    .populate("instructor", "name");

  const termRanks = { spring: 0, summer: 1, fall: 2 };

  courseInstances.sort(
    (a, b) =>
      b.semester.year - a.semester.year ||
      termRanks[b.semester.term] - termRanks[a.semester.term]
  );

  res.json(courseInstances);
});

export default handler;
