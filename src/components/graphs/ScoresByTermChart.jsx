import React, { useEffect, useState } from "react";
import { Alert, Card, Col, Form, Row } from "react-bootstrap";
import useSWR, { mutate } from "swr";
import {
  blankScoresByTerm,
  dataKeysForSOs,
  scoresByTermConfig,
} from "utils/graph";
import LineGraph from "./LineGraph.jsx";

const GRAPH_DATA_PATH = "api/analysis/scores_by/term";
const scopeToInstructor = (url, email) => {
  return encodeURI(`${url}?type=email&email=${email}`);
};

const adminUrl = (url, instructor) => {
  return isDefaultSelection(instructor)
    ? encodeURI(`${url}?type=ALL`)
    : encodeURI(
        `${url}/?type=name&first=${instructor.first}&last=${instructor.last}`
      );
};

const isDefaultSelection = (instructor) => {
  return (
    instructor.first === defaultInstructorSelect.first &&
    instructor.last === defaultInstructorSelect.last
  );
};

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
  const { data, error } = useSWR(
    !isAdminOrRoot
      ? scopeToInstructor(GRAPH_DATA_PATH, instructor)
      : adminUrl(GRAPH_DATA_PATH, selections[selected])
  );

  useEffect(() => {
    if (data && data.instructors) {
      setSelections([defaultInstructorSelect, ...data.instructors]);
    }
  }, [data]);

  const handleSelect = (e) => {
    setSelected(e.target.value);
    mutate(GRAPH_DATA_PATH);
  };

  return (
    <Card className={className}>
      <Card.Header className="bg-white">
        <Row className="align-items-center flex-column flex-lg-row">
          <Col>SO Scores by SEMESTER</Col>
          {isAdminOrRoot && (
            <Col className="d-flex mt-4 mt-lg-0">
              <Form.Control
                custom
                as="select"
                size="sm"
                className="ml-4"
                onChange={handleSelect}
              >
                {selections.map((selection, i) => {
                  return (
                    <option key={i} value={i} selected={i === selected}>
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
