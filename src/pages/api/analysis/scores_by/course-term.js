import middleware from "middleware";
import Course from "models/Course";
import CourseInstance from "models/CourseInstance";
import { Types } from "mongoose";
import nextConnect from "next-connect";
import { formatAllScoresByTerm } from "utils/analysis";
import { authenticate } from "utils/auth";
import { courseSOScoresByTerm } from "../../../../../queries/CourseSOScoresByTerm";

const handler = nextConnect();
handler.use(middleware);
handler.use(authenticate);

handler.get(async (req, res) => {
  try {
    const { id } = req.query;

    if (!id) throw new Error("No id param provided");

    if (!Types.ObjectId.isValid(id)) {
      throw new Error(`Invalid ObjectId: ${id}`);
    }

    const courseInstance = await Course.findOne({ _id: id })
      .select("_id")
      .lean();

    if (!courseInstance) {
      throw new Error(`No course found for id: ${id}`);
    }

    const results = await CourseInstance.aggregate(
      courseSOScoresByTerm(courseInstance._id)
    );

    res.json(formatAllScoresByTerm(results));
  } catch (error) {
    res.status(400).json({ error: true, message: error.message });
  }
});

export default handler;
