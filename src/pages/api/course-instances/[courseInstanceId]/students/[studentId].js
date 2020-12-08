import middleware from "middleware";
import Assessment from "models/Assessment";
import CourseInstance from "models/CourseInstance";
import Student from "models/Student";
import nextConnect from "next-connect";
import { authenticate, forbiddenUnlessAdmin } from "utils/auth";

const handler = nextConnect();
handler.use(middleware);
handler.use(authenticate);
handler.use(forbiddenUnlessAdmin);

handler.put(async (req, res) => {
  const {
    query: { studentId: _id },
    body: {
      name: { first, last },
    },
  } = req;

  try {
    const student = await Student.findOneAndUpdate(
      { _id },
      { name: { first, last } },
      { new: true }
    );
    res.json(student);
  } catch {
    res.status(422).json({ error: true });
  }
});

handler.delete(async (req, res) => {
  const {
    query: { courseInstanceId, studentId: _id },
  } = req;

  const isLocked = await Assessment.exists({ student: _id });

  if (isLocked) {
    res.status(403).json({ error: true, message: "Forbidden" });
  } else {
    const courseInstance = await CourseInstance.update(
      { _id: courseInstanceId },
      { $pull: { students: _id } },
      { new: true }
    );
    res.json(courseInstance);
  }
});

export default handler;
