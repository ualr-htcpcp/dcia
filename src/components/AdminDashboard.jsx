import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import useSWR from "swr";
import { fetcher } from "utils/fetch.js";
import ScoresByLevelChart from "./graphs/ScoresByLevelChart.jsx";
import LoadingSpinner from "./LoadingSpinner.jsx";
import ScoresByCourseCard from "./ScoresByCourseCard.jsx";
import ScoresByInstructorCard from "./ScoresByInstructorCard.jsx";
import ScoreSummaryCard from "./ScoreSummaryCard.jsx";
import TermSelector from "./TermSelector.jsx";

const TERMS_PATH = "/api/analysis/terms";

export default function AdminDashboard() {
  const { data: terms, error } = useSWR(TERMS_PATH, fetcher); //TODO: Error case, maybe refresh page button?
  const [selectedTerm, setSelectedTerm] = useState(null);

  return (
    <>
      {!terms ? (
        "Loading..."
      ) : (
        <TermSelector
          className="mt-4"
          terms={terms}
          selectedTerm={selectedTerm}
          handleTermChange={setSelectedTerm}
        />
      )}
      <ScoresByLevelChart className="mt-4" term={selectedTerm} />
      <Row className="mt-4">
        <Col lg={6}>
          <ScoresByInstructorCard term={selectedTerm} />
        </Col>
        <Col lg={6} className="mt-4 mt-lg-0">
          <ScoresByCourseCard term={selectedTerm} />
        </Col>
      </Row>
    </>
  );
}
