import useSWR from "swr";
import { fetchWithYearAndTerm } from "utils/fetch.js";
import BlankSummaryList from "./BlankSummaryList.jsx";
import ScoreSummaryCard from "./ScoreSummaryCard.jsx";

const COURSE_PATH = "/api/analysis/scores_by/course";
const previewAmount = 5;
const viewAllPath = "/courses";
const name = "SO Scores by COURSE";

export default function ScoresByCourseCard({ term }) {
  const { data: items, error } = useSWR(
    term ? [COURSE_PATH, term.year, term.term, previewAmount] : null,
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
