import React, { useEffect } from "react";
import { useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import useSWR from "swr";
import { fetchWithYearTermOutcomeAndInstructor } from "utils/fetch";
import { blankScoresByTerm, dataKeysForSOs } from "utils/graph";
import LineGraph from "./LineGraph";

const xKey = "term";
const xLabel = "Term";
const yLabel = "Score";

const GRAPH_DATA_PATH = "api/analysis/scores_by/term";

const defaultOptions = {
  so: { name: "All SO Scores", value: "ALL" },
  term: { name: "2020 Terms", value: { year: "2020", term: "ALL" } },
  instructor: { name: "All Instructors", value: "ALL" },
};

export default function ScoresByTermChart({ className, isAdminOrRoot }) {
  const [outcomes, setOutcomes] = useState([defaultOptions.so]);
  const [selectedOutcome, setSelectedOutcome] = useState(0);

  const [terms, setTerms] = useState([defaultOptions.term]);
  const [selectedTerm, setSelectedTerm] = useState(0);

  const [instructors, setInstructors] = useState([defaultOptions.instructor]);
  const [selectedInstructor, setSelectedInstructor] = useState(0);

  const { data: graphData, error } = useSWR(
    [
      GRAPH_DATA_PATH,
      terms[selectedTerm].value.year,
      terms[selectedTerm].value.term,
      outcomes[selectedOutcome].value,
      instructors[selectedInstructor].value,
    ],
    fetchWithYearTermOutcomeAndInstructor
  );

  useEffect(() => {
    if (graphData) {
      setOutcomes([defaultOptions.so, ...graphData.selectOptions.sos]);
      setInstructors([
        defaultOptions.instructor,
        ...graphData.selectOptions.instructors,
      ]);
      setTerms([defaultOptions.term, ...graphData.selectOptions.terms]);
    }
  }, [graphData]);

  return (
    <Card className={className}>
      <Card.Header className="bg-white">
        <Row className="align-items-center flex-column flex-lg-row">
          <Col>SO Scores by TERM</Col>
          <Col className="d-flex mt-2 mt-lg-0" style={{ flexGrow: 2 }}>
            <Form.Control
              id="outcomeSelector"
              custom
              as="select"
              size="sm"
              value={selectedOutcome}
              onChange={(e) => setSelectedOutcome(e.target.value)}
            >
              {outcomes &&
                outcomes.map((so, i) => {
                  return (
                    <option key={i} value={i}>
                      {so.name}
                    </option>
                  );
                })}
            </Form.Control>
            <Form.Control
              id="termSelector"
              custom
              as="select"
              size="sm"
              className="ml-3"
              value={selectedTerm}
              onChange={(e) => setSelectedTerm(e.target.value)}
            >
              {terms &&
                terms.map((term, i) => {
                  return (
                    <option key={i} value={i}>
                      {term.name}
                    </option>
                  );
                })}
            </Form.Control>
            {isAdminOrRoot ? (
              <Form.Control
                id="instructorSelector"
                custom
                as="select"
                size="sm"
                className="ml-3"
                value={selectedInstructor}
                onChange={(e) => setSelectedInstructor(e.target.value)}
              >
                {instructors &&
                  instructors.map((instructor, i) => {
                    return (
                      <option key={i} value={i}>
                        {instructor.name}
                      </option>
                    );
                  })}
              </Form.Control>
            ) : (
              ""
            )}
          </Col>
        </Row>
      </Card.Header>
      <Card.Body>
        <LineGraph
          data={graphData ? graphData.graphData : blankScoresByTerm}
          dataKeys={dataKeysForSOs}
          xAxisKey={xKey}
          xAxisLabel={xLabel}
          yAxisLabel={yLabel}
        />
      </Card.Body>
    </Card>
  );
}
