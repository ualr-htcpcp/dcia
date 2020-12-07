import middleware from "middleware";
import CourseInstance from "models/CourseInstance";
import Instructor from "models/Instructor";
import nextConnect from "next-connect";
import { AllSOScores } from "../../../../../queries/AllSOScores";
import { AllSOScoresInstructor } from "../../../../../queries/AllSOScoresInstructor";

const handler = nextConnect();
handler.use(middleware);

// SO scores for all terms
// If instructor == "ALL", for all instructors. Otherwise, for specified instructor
async function getScoresByTerm(instructorScope) {
  if (instructorScope.toLowerCase() === "all") {
    const scoresByTerm = await CourseInstance.aggregate(AllSOScores);
    return scoresByTerm;
  }
  // scope to instructor
  // find user by email and return associated instructor id
  // use for query
}

handler.get(async (req, res) => {
  try {
    const { instructor } = req.query;
    if (!instructor) throw new Error("No instructors param provided");

    const results = await getScoresByTerm(instructor);
    res.json(results);
  } catch (error) {
    res.status(400).json({ error: true, message: error.message });
  }
});

export default handler;
