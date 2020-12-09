import useSWR from "swr";
import { fetchWithYearAndTerm } from "utils/fetch.js";
import BlankSummaryList from "./BlankSummaryList.jsx";
import ScoreSummaryCard from "./ScoreSummaryCard.jsx";

const INSTRUCTOR_PATH = "/api/analysis/scores_by/instructor";
const previewAmount = 5; // add previewAmount to fetch to limit return data
const viewAllPath = "/instructors";
const name = "SO Scores by INSTRUCTOR";

export default function ScoresByInstructorCard({ term }) {
  const { data: items, error } = useSWR(
    term ? [INSTRUCTOR_PATH, term.year, term.term] : null,
    fetchWithYearAndTerm
  );
  return (
    <>
      {error ? (
        `Error: ${error}`
      ) : !items ? (
        <BlankSummaryList numItems={previewAmount} />
      ) : (
        <ScoreSummaryCard name={name} viewAllPath={viewAllPath} items={items} />
      )}
    </>
  );
}
