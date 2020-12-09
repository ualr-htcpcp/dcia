import { useState } from "react";
import { Alert, Col, Row } from "react-bootstrap";
import useSWR from "swr";
import { fetcher } from "utils/fetch.js";
import ScoresByLevelChart from "./graphs/ScoresByLevelChart.jsx";
import ScoresByCourseCard from "./ScoresByCourseCard.jsx";
import ScoresByInstructorCard from "./ScoresByInstructorCard.jsx";
import TermSelector from "./TermSelector.jsx";

const TERMS_PATH = "/api/analysis/terms";
const defaultError = "There was an error. Try refreshing the page.";

export default function AdminDashboard() {
  const { data: terms, error } = useSWR(TERMS_PATH, fetcher);
  const [selectedTerm, setSelectedTerm] = useState(null);

  return (
    <>
      {!terms ? (
        <Row className="mt-4">
          <Col>
            {error ? (
              <Alert variant="danger">
                {defaultError}
                <br />
                <code>{error.message}</code>
              </Alert>
            ) : (
              "Loading..."
            )}
          </Col>
        </Row>
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
