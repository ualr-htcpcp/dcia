import middleware from "middleware";
import CourseInstance from "models/CourseInstance";
import nextConnect from "next-connect";
import { formatSOCounts } from "utils/analysis";
import { authenticate } from "utils/auth";
import { ScoreCountsByCourseInstance } from "../../../../queries/ScoreCountsByCourseInstance";

const handler = nextConnect();
handler.use(middleware);
handler.use(authenticate);

handler.get(async (req, res) => {
  try {
    const { course } = req.query;

    if (!course) throw new Error("No course instance param provided");

    const courseInstance = await CourseInstance.findOne({ _id: course })
      .select("_id")
      .lean();

    if (!courseInstance) {
      throw new Error(`No course instance associated with id: ${course}`);
    }
    const results = await CourseInstance.aggregate(
      ScoreCountsByCourseInstance(courseInstance._id)
    );
    res.json(formatSOCounts(results));
  } catch (error) {
    if (error.message) {
      res.status(400).json({ error: true, message: error.message });
    }
  }
});

export default handler;
