import middleware from "middleware";
import CourseInstance from "models/CourseInstance";
import "models/Semester";
import "models/Instructor";
import nextConnect from "next-connect";
import { authenticate } from "utils/auth";

const handler = nextConnect();
handler.use(middleware);
handler.use(authenticate);

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
