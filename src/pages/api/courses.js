import middleware from "middleware";
import Course from "models/Course";
import CourseInstance from "models/CourseInstance";
import nextConnect from "next-connect";
import { authenticate, forbiddenUnlessAdmin } from "utils/auth";

const handler = nextConnect();
handler.use(middleware);
handler.use(authenticate);

handler.post(async (req, res) => {
  await forbiddenUnlessAdmin(req, res);
  const {
    body: { number, title, studentOutcomes },
  } = req;

  try {
    const course = await Course.create({ number, title, studentOutcomes });
    res.json(course);
  } catch (error) {
    if (error.name === "MongoError" && error.code === 11000) {
      res.status(422).json({
        error: [{ key: "number", message: "Course Number is not unique" }],
      });
    } else {
      res.status(400).json({ error: true });
    }
  }
});

handler.get(async (req, res) => {
  const [courses, assignedToInstances] = await Promise.all([
    Course.find()
      .select("_id number title")
      .populate("studentOutcomes", "number definition")
      .sort("number")
      .lean(),
    CourseInstance.distinct("course"),
  ]);

  courses.forEach((course) => {
    course.isLocked = assignedToInstances.some((courseId) =>
      courseId.equals(course._id)
    );
  });

  res.json(courses);
});

export default handler;
