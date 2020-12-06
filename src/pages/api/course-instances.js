import middleware from "middleware";
import CourseInstance from "models/CourseInstance";
import "models/Semester";
import "models/Instructor";
import nextConnect from "next-connect";
import { authenticate, forbiddenUnlessAdmin } from "utils/auth";

const handler = nextConnect();
handler.use(middleware);
handler.use(authenticate);

handler.post(async (req, res) => {
  await forbiddenUnlessAdmin(req, res);
  const {
    body: { course, semester, instructor },
  } = req;

  try {
    const courseInstance = await CourseInstance.create({ course, semester, instructor });
    res.json(courseInstance);
  } catch (error) {
    res.status(400).json({ error: true });
  }
});

handler.get(async (req, res) => {
  const {
    query: { course },
  } = req;

  const courseInstances = await CourseInstance.find({ course })
    .populate("semester", "year term")
    .populate("instructor", "name");

  res.json(courseInstances);
});

export default handler;
