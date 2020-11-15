import middleware from "middleware";
import Course from "models/Course";
import CourseInstance from "models/CourseInstance";
import nextConnect from "next-connect";
import { authenticate, forbiddenUnlessAdmin } from "utils/auth";

const handler = nextConnect();
handler.use(middleware);
handler.use(authenticate);
handler.use(forbiddenUnlessAdmin);

handler.put(async (req, res) => {
  const {
    query: { id: _id },
    body: { number, title },
  } = req;

  try {
    const course = await Course.findOneAndUpdate(
      { _id },
      { number, title },
      { new: true }
    );
    res.json(course);
  } catch (error) {
    if (error.name === "MongoError" && error.code === 11000) {
      res.status(422).json({
        error: [{ key: "number", message: "Number is not unique" }],
      });
    } else {
      res.status(400).json({ error: true });
    }
  }
});

handler.delete(async (req, res) => {
  const {
    query: { id: _id },
  } = req;

  const course = await Course.findOne({ _id });
  const isLocked = await CourseInstance.exists({ course });

  if (isLocked) {
    res
      .status(403)
      .json({ error: true, message: "Forbidden: course has instances" });
  } else {
    await Course.findByIdAndDelete(_id);
    res.json(course);
  }
});

export default handler;
