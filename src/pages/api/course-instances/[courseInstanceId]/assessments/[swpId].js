import middleware from "middleware";
import Assessment from "models/Assessment";
import CourseInstance from "models/CourseInstance";
import "models/Student";
import nextConnect from "next-connect";
import { authenticate } from "utils/auth";

const handler = nextConnect();
handler.use(middleware);
handler.use(authenticate);

handler.get(async (req, res) => {
  const {
    query: { courseInstanceId, swpId },
  } = req;

  const courseInstance = await CourseInstance.findOne(
    { _id: courseInstanceId },
    { students: 1 }
  )
    .populate("students", "_id name")
    .lean();
  const assessments = await Assessment.find(
    { studentWorkProject: swpId },
    { student: 1, score: 1 }
  );

  const students = courseInstance.students.sort(
    (a, b) =>
      a.name.last.localeCompare(b.name.last) ||
      a.name.first.localeCompare(b.name.first)
  );

  students.forEach((student) => {
    const assessment = assessments.find(({ student: studentId }) =>
      studentId.equals(student._id)
    );
    student.score = assessment?.score;
  });

  res.json(students);
});

handler.post(async (req, res) => {
  const {
    query: { swpId },
    body: { scores },
  } = req;

  if (!scores) return res.json({});

  await Promise.all(
    Object.entries(scores).map(([studentId, score]) =>
      Assessment.update(
        {
          studentWorkProject: swpId,
          student: studentId,
        },
        { score },
        { upsert: true }
      )
    )
  );

  res.json(scores);
});

export default handler;
