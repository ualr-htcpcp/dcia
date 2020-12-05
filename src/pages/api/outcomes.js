import middleware from "middleware";
import Course from "models/Course";
import StudentOutcome from "models/StudentOutcome";
import nextConnect from "next-connect";
import { authenticate, forbiddenUnlessAdmin } from "utils/auth";

const handler = nextConnect();
handler.use(middleware);
handler.use(authenticate);
handler.use(forbiddenUnlessAdmin);

handler.post(async (req, res) => {
  const {
    body: { number, definition },
  } = req;

  try {
    const studentOutcome = await StudentOutcome.create({ number, definition });
    res.json(studentOutcome);
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

handler.get(async (req, res) => {
  const [studentOutcomes, assignedToCourses] = await Promise.all([
    StudentOutcome.find().sort("number").lean(),
    Course.distinct("studentOutcomes"),
  ]);

  studentOutcomes.forEach((studentOutcome) => {
    studentOutcome.isLocked = assignedToCourses.some((studentOutcomeId) =>
      studentOutcomeId.equals(studentOutcome._id)
    );
  });

  res.json(studentOutcomes);
});

export default handler;
