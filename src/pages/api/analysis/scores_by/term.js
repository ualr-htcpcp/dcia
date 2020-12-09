import middleware from "middleware";
import CourseInstance from "models/CourseInstance";
import Instructor from "models/Instructor";
import User from "models/User";
import nextConnect from "next-connect";
import {
  formatAllScoresByTerm,
  formatInstructorScoresByTerm,
} from "utils/analysis";
import { AllSOScores } from "../../../../../queries/AllSOScores";
import { AllSOScoresInstructor } from "../../../../../queries/AllSOScoresInstructor";

const handler = nextConnect();
handler.use(middleware);

// SO scores for all terms
// If instructor == "ALL", for all instructors. Otherwise, for specified instructor
async function getAllScores() {
  const scoresByTerm = await CourseInstance.aggregate(AllSOScores);
  return formatAllScoresByTerm(scoresByTerm);
}

async function getScoresByInstructor(instructor) {
  const scoresByTerm = await CourseInstance.aggregate(
    AllSOScoresInstructor(instructor)
  );
  return formatInstructorScoresByTerm(scoresByTerm);
}

handler.get(async (req, res) => {
  try {
    const { type } = req.query;

    if (!type) throw new Error("No type param provided");

    if (!["all", "name", "email"].includes(type.toLowerCase())) {
      throw new Error(`Invalid type provided: ${type}`);
    }
    if (type.toLowerCase() === "all") {
      const results = await getAllScores();
      res.json(results);
    }
    // Getting scores from interaction at instructor dropdown
    if (type.toLowerCase() === "name") {
      const { first, last } = req.query;

      if (!first) throw new Error("No first name param provided");
      if (!last) throw new Error("No last name param provided");

      const lowerFirst = RegExp(first, "i");
      const lowerLast = RegExp(last, "i");

      const instructor = await Instructor.findOne({
        "name.first": { $regex: lowerFirst },
        "name.last": { $regex: lowerLast },
      })
        .select("_id")
        .lean();

      if (!instructor) {
        throw new Error(
          `No instructor found for firstName: ${first} lastName: ${last}`
        );
      }

      const results = await getScoresByInstructor(instructor._id);
      res.json(results);
    }

    // Getting scores for logged-in instructor
    if (type.toLowerCase() === "email") {
      const { email } = req.query;

      if (!email) throw new Error("No email param provided");

      const instructor = await User.findOne({ email: email })
        .select("instructor")
        .lean();
      if (!instructor) {
        throw new Error(
          `User email ${email} is not associated with an instructor`
        );
      }

      const results = await getScoresByInstructor(instructor.instructor);
      res.json(results);
    }
  } catch (error) {
    if (error.message) {
      res.status(400).json({ error: true, message: error.message });
    } else {
      // Generic uncaught error
      res.status(400).json({
        error: true,
        message: "There was an error getting scores by term",
      });
    }
  }
});

export default handler;
