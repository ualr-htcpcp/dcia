import middleware from "middleware";
import Course from "models/Course";
import StudentOutcome from "models/StudentOutcome";
import nextConnect from "next-connect";
import { authenticate, forbiddenUnlessAdmin } from "utils/auth";

const handler = nextConnect();
handler.use(middleware);
handler.use(authenticate);
handler.use(forbiddenUnlessAdmin);

handler.put(async (req, res) => {
  const {
    query: { id: _id },
    body: { number, definition },
  } = req;

  try {
    const studentOutcome = await StudentOutcome.findOneAndUpdate(
      { _id },
      { number, definition },
      { new: true }
    );
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

handler.delete(async (req, res) => {
  const {
    query: { id: _id },
  } = req;

  const studentOutcome = await StudentOutcome.findOne({ _id });
  const isLocked = await Course.exists({ studentOutcome });

  if (isLocked) {
    res.status(403).json({ error: true, message: "Forbidden" });
  } else {
    await StudentOutcome.findByIdAndDelete(_id);
    res.json(studentOutcome);
  }
});

export default handler;
