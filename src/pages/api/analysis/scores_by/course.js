import middleware from "middleware";
import CourseInstance from "models/CourseInstance";
import Semester from "models/Semester";
import nextConnect from "next-connect";
import { formatScoresByCourse } from "utils/analysis";
import { authenticate } from "utils/auth";
import { ScoresByCourse } from "../../../../../queries/ScoresByCourse";

const handler = nextConnect();
handler.use(middleware);
handler.use(authenticate);

// Return mean overall SO scores for each course by specified term & year
// With no amount param, returns all results
async function getScoresByCourse(term, year, amount = null) {
  try {
    const { _id: selectedTerm } = await Semester.getIdOnly(
      term.toLowerCase(),
      year
    );
    if (!selectedTerm) {
      throw new Error(`No term found for Term: ${term} Year: ${year}`);
    }

    const courseScores = await CourseInstance.aggregate(
      ScoresByCourse(selectedTerm)
    );
    const formattedScores = formatScoresByCourse(courseScores);

    if (amount) return formattedScores.slice(0, amount);
    return formattedScores;
  } catch (error) {
    if (error.message) {
      throw new Error(error.message);
    }
    throw new Error("There was an error getting scores by course");
  }
}

handler.get(async (req, res) => {
  try {
    const { term, year, amount } = req.query;
    if (!term) throw new Error("No term param provided");
    if (!year) throw new Error("No year param provided");

    const results = await getScoresByCourse(term, year, amount);
    res.json(results);
  } catch (error) {
    res.status(400).json({ error: true, message: error.message });
  }
});

export default handler;
