import middleware from "middleware";
import CourseInstance from "models/CourseInstance";
import Instructor from "models/Instructor";
import nextConnect from "next-connect";
import { forbiddenUnlessAdmin } from "utils/auth";

const handler = nextConnect();
handler.use(middleware);

handler.post(async (req, res) => {
  await forbiddenUnlessAdmin(req, res);
  const {
    body: {
      name: { first, last },
    },
  } = req;

  try {
    const query = await Instructor.create({ name: { first, last } });
    res.json(query);
  } catch {
    res.status(422).json({ error: true });
  }
});

handler.get(async (req, res) => {
  await forbiddenUnlessAdmin(req, res);
  const [instructors, assignedToCourses] = await Promise.all([
    Instructor.find().sort("name.last name.first").lean(),
    CourseInstance.distinct("instructor"),
  ]);

  instructors.forEach((instructor) => {
    instructor.isLocked = assignedToCourses.some((instructorId) =>
      instructorId.equals(instructor._id)
    );
  });

  res.json(instructors);
});

export default handler;
