import React, { useEffect, useState } from "react";
import { Alert, Card, Col, Form, Row } from "react-bootstrap";
import useSWR from "swr";
import { fetchWithInstructor } from "utils/fetch";
import {
  blankScoresByTerm,
  dataKeysForSOs,
  scoresByTermConfig,
} from "utils/graph";
import LineGraph from "./LineGraph.jsx";

const GRAPH_DATA_PATH = "api/analysis/scores_by/term";

const defaultInstructorSelect = {
  first: "All",
  last: "Instructors",
};
export default function ScoresByTermChart({
  className,
  isAdminOrRoot,
  instructor,
}) {
  const [selections, setSelections] = useState([defaultInstructorSelect]);
  const [selected, setSelected] = useState(0);
  const [instructorParam, setInstructorParam] = useState(instructor);
  const { data: data, error } = useSWR(
    instructor ? [GRAPH_DATA_PATH, "ALL"] : [GRAPH_DATA_PATH],
    fetchWithInstructor
  );

  useEffect(() => {
    if (data && data.instructors) {
      setSelections([defaultInstructorSelect, ...data.instructors]);
    }
  }, [data]);

  const handleSelect = (e) => {
    setSelected(selections[e.target.value]);
  };

  return (
    <Card className={className}>
      <Card.Header className="bg-white">
        <Row className="align-items-center flex-column flex-lg-row">
          <Col>SO Scores by TERM</Col>
          {isAdminOrRoot && (
            <Col className="d-flex mt-4 mt-lg-0">
              <Form.Control
                custom
                as="select"
                size="sm"
                className="ml-4"
                value={selections[selected]}
                onChange={handleSelect}
              >
                {selections.map((selection, i) => {
                  return (
                    <option key={i} value={i}>
                      {selection.first} {selection.last}
                    </option>
                  );
                })}
              </Form.Control>
            </Col>
          )}
        </Row>
      </Card.Header>
      <Card.Body>
        {error && <Alert variant="danger">{error.message}</Alert>}

        <LineGraph
          data={data ? data.graphData : blankScoresByTerm}
          dataKeys={dataKeysForSOs}
          xAxisKey={scoresByTermConfig.xAxisKey}
          xAxisLabel={scoresByTermConfig.xAxisLabel}
          yAxisLabel={scoresByTermConfig.yAxisLabel}
          yAxisDomain={scoresByTermConfig.yAxisDomain}
        />
      </Card.Body>
    </Card>
  );
}
