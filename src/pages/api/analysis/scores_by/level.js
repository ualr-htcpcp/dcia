import middleware from "middleware";
import CourseInstance from "models/CourseInstance";
import Semester from "models/Semester";
import nextConnect from "next-connect";
import { formatScoresByLevel } from "utils/analysis";
import { ScoresByLevel } from "../../../../../queries/ScoresByLevel";

// Return mean overall SO scores for each course level by specified term & year
async function getScoresByLevel(term, year) {
  try {
    const { _id: selectedTerm } = await Semester.getIdOnly(
      term.toLowerCase(),
      year
    );
    if (!selectedTerm) {
      throw new Error(`No term found for Term: ${term} Year: ${year}`);
    }

    const scoresByLevel = await CourseInstance.aggregate(
      ScoresByLevel(selectedTerm)
    );
    return formatScoresByLevel(scoresByLevel);
  } catch (error) {
    if (error.message) {
      throw new Error(error.message);
    }
    throw new Error("There was an error getting scores by level");
  }
}

const handler = nextConnect();
handler.use(middleware);

handler.get(async (req, res) => {
  try {
    const { term, year, amount } = req.query;
    if (!term) throw new Error("No term param provided");
    if (!year) throw new Error("No year param provided");

    const results = await getScoresByLevel(term, year, amount);
    res.json(results);
  } catch (error) {
    res.status(400).json({ error: true, message: error.message });
  }
});

export default handler;
