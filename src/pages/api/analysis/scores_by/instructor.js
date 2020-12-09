import middleware from "middleware";
import CourseInstance from "models/CourseInstance";
import Semester from "models/Semester";
import nextConnect from "next-connect";
import { formatScoresByInstructor } from "utils/analysis";
import { authenticate } from "utils/auth";
import { ScoresByInstructor } from "../../../../../queries/ScoresByInstructor";

const handler = nextConnect();
handler.use(middleware);
handler.use(authenticate);

// Return mean overall SO scores for each instructor by specified term & year
// With no amount param, returns all results
async function getScoresByInstructor(term, year, amount = null) {
  try {
    const { _id: selectedTerm } = await Semester.getIdOnly(
      term.toLowerCase(),
      year
    );
    if (!selectedTerm) {
      throw new Error(`No term found for Term: ${term} Year: ${year}`);
    }

    const instructorScores = await CourseInstance.aggregate(
      ScoresByInstructor(selectedTerm)
    );
    const formattedScores = formatScoresByInstructor(instructorScores);

    if (amount) return formattedScores.slice(0, amount);
    return formattedScores;
  } catch (error) {
    if (error.message) {
      throw new Error(error.message);
    }
    throw new Error("There was an error getting scores by instructor");
  }
}

handler.get(async (req, res) => {
  try {
    const { term, year, amount } = req.query;
    if (!term) throw new Error("No term param provided");
    if (!year) throw new Error("No year param provided");

    const results = await getScoresByInstructor(term, year, amount);
    res.json(results);
  } catch (error) {
    res.status(400).json({ error: true, message: error.message });
  }
});

export default handler;
