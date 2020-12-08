import middleware from "middleware";
import CourseInstance from "models/CourseInstance";
import "models/StudentWorkProject";
import StudentWorkProject from "models/StudentWorkProject";
import nextConnect from "next-connect";
import { authenticate } from "utils/auth";

const handler = nextConnect();
handler.use(middleware);
handler.use(authenticate);

handler.get(async (req, res) => {
  const {
    query: { courseInstanceId },
  } = req;

  const courseInstance = await CourseInstance.findOne(
    { _id: courseInstanceId },
    { studentWorkProjects: 1 }
  )
    .populate("studentWorkProjects")
    .lean();

  const swps = courseInstance.studentWorkProjects.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  res.json(swps);
});

handler.post(async (req, res) => {
  const {
    query: { courseInstanceId },
    body: { name, studentOutcomes },
  } = req;

  try {
    const swp = await StudentWorkProject.create({ name, studentOutcomes });
    await CourseInstance.update(
      { _id: courseInstanceId },
      { $addToSet: { studentWorkProjects: [swp._id] } },
      { new: true }
    );
    res.json(swp);
  } catch (error) {
    res.status(400).json({ error: true });
  }
});

export default handler;
