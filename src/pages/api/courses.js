import middleware from "middleware";
import Course from "models/Course";
import CourseInstance from "models/CourseInstance";
import "models/StudentOutcome";
import User from "models/User";
import { getSession } from "next-auth/client";
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
  const session = await getSession({ req });

  let coursesScope;
  let assignedToInstances = [];

  if (["admin", "root"].includes(session.user.accessLevel)) {
    coursesScope = Course.find();
  } else {
    const user = await User.findOne({ _id: session.user.id });
    const courseIds = await CourseInstance.find({
      instructor: user.instructor,
    }).distinct("course");
    coursesScope = Course.find({ _id: courseIds });
    assignedToInstances = await CourseInstance.distinct("course");
  }

  const courses = await coursesScope
    .select("_id number title")
    .populate("studentOutcomes", "number definition")
    .sort("number")
    .lean();

  courses.forEach((course) => {
    course.isLocked = assignedToInstances.some((courseId) =>
      courseId.equals(course._id)
    );
  });

  res.json(courses);
});

export default handler;
