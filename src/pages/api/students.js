import middleware from "middleware";
import CourseInstance from "models/CourseInstance";
import Student from "models/Student";
import nextConnect from "next-connect";
import { authenticate, forbiddenUnlessAdmin } from "utils/auth";

const handler = nextConnect();
handler.use(middleware);
handler.use(authenticate);

handler.get(async (req, res) => {
  const {
    query: { courseInstance: courseInstanceId },
  } = req;

  const courseInstance = await CourseInstance.findOne(
    { _id: courseInstanceId },
    { students: 1 }
  ).populate("students");

  const students = courseInstance.students.sort(
    (a, b) =>
      a.name.last.localeCompare(b.name.last) ||
      a.name.first.localeCompare(b.name.first)
  );

  res.json(students);
});

handler.post(async (req, res) => {
  await forbiddenUnlessAdmin(req, res);
  const {
    body: {
      courseInstance: courseInstanceId,
      name: { first, last },
    },
  } = req;

  try {
    const query = { name: { first: first.trim(), last: last.trim() } };
    let student = await Student.findOne(query).collation({
      locale: "en",
      strength: 2,
    });
    if (!student) {
      student = await Student.create(query);
    }
    const courseInstance = await CourseInstance.update(
      { _id: courseInstanceId },
      { $addToSet: { students: [student._id] } },
      { new: true }
    );
    res.json(courseInstance);
  } catch (error) {
    res.status(400).json({ error: true });
  }
});

export default handler;
