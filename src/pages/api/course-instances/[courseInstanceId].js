import middleware from "middleware";
import CourseInstance from "models/CourseInstance";
import nextConnect from "next-connect";
import { authenticate, forbiddenUnlessAdmin } from "utils/auth";

const handler = nextConnect();
handler.use(middleware);
handler.use(authenticate);
handler.use(forbiddenUnlessAdmin);

handler.put(async (req, res) => {
  const {
    query: { courseInstanceId: _id },
    body: { course, semester, instructor },
  } = req;

  try {
    const courseInstance = await CourseInstance.findOneAndUpdate(
      { _id },
      { course, semester, instructor },
      { new: true }
    );
    res.json(courseInstance);
  } catch (error) {
    res.status(400).json({ error: true });
  }
});

handler.delete(async (req, res) => {
  const {
    query: { courseInstanceId: _id },
  } = req;

  const courseInstance = await CourseInstance.findOne({ _id });
  const isLocked = courseInstance.studentWorkProjects.length > 0;

  if (isLocked) {
    res
      .status(403)
      .json({ error: true, message: "Forbidden: course has instances" });
  } else {
    await CourseInstance.findByIdAndDelete(_id);
    res.json(courseInstance);
  }
});

export default handler;
