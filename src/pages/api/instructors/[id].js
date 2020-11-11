import middleware from "middleware";
import CourseInstance from "models/CourseInstance";
import Instructor from "models/Instructor";
import nextConnect from "next-connect";

const handler = nextConnect();
handler.use(middleware);

handler.put(async (req, res) => {
  const {
    query: { id: _id },
    body: {
      name: { first, last },
    },
  } = req;

  const instructor = await Instructor.findOneAndUpdate(
    { _id },
    { name: { first, last } },
    { new: true }
  );
  res.json(instructor);
});

handler.delete(async (req, res) => {
  const {
    query: { id: _id },
  } = req;

  const instructor = await Instructor.findOne({ _id });
  const isLocked = await CourseInstance.exists({ instructor });

  if (isLocked) {
    res.status(403).json({ error: "Forbidden" });
  } else {
    await Instructor.findByIdAndDelete(_id);
    res.json(instructor);
  }
});

export default handler;
