import middleware from "middleware";
import CourseInstance from "models/CourseInstance";
import { Types } from "mongoose";
import nextConnect from "next-connect";
import { formatSWPScores } from "utils/analysis";
import { authenticate } from "utils/auth";
import { SWPScoresByCourseInstance } from "../../../../queries/SWPScoresByCourseInstance";

const handler = nextConnect();
handler.use(middleware);
handler.use(authenticate);

handler.get(async (req, res) => {
  try {
    const { course } = req.query;

    if (!course) throw new Error("No course instance param provided");

    if (!Types.ObjectId.isValid(course)) {
      throw new Error(`Invalid ObjectId: ${course}`);
    }

    const courseInstance = await CourseInstance.findOne({ _id: course })
      .select("_id")
      .lean();

    if (!courseInstance) {
      throw new Error(`No course instance associated with id: ${course}`);
    }
    const results = await CourseInstance.aggregate(
      SWPScoresByCourseInstance(courseInstance._id)
    );
    res.json(formatSWPScores(results));
  } catch (error) {
    res.status(400).json({ error: true, message: error.message });
  }
});

export default handler;
