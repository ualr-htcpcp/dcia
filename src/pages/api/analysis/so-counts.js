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
    const { id } = req.query;

    if (!id) throw new Error("No course id param provided");

    const courseInstance = await CourseInstance.findOne({ _id: id })
      .select("_id")
      .lean();

    if (!courseInstance) {
      throw new Error(`No course instance associated with id: ${id}`);
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
