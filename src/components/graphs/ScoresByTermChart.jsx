import React from "react";
import { Alert, Card, Col, Row } from "react-bootstrap";
import useSWR from "swr";
import { fetchWithInstructor } from "utils/fetch";
import { blankScoresByTerm, dataKeysForSOs } from "utils/graph";
import LineGraph from "./LineGraph.jsx";

const xKey = "term";
const xLabel = "Term";
const yLabel = "Score";

const GRAPH_DATA_PATH = "api/analysis/scores_by/term";

export default function ScoresByTermChart({ className, instructorScope }) {
  const { data: graphData, error } = useSWR(
    instructorScope ? [GRAPH_DATA_PATH, instructorScope] : null,
    fetchWithInstructor
  );

  return (
    <Card className={className}>
      <Card.Header className="bg-white">
        <Row className="align-items-center flex-column flex-lg-row">
          <Col>SO Scores by TERM</Col>
        </Row>
      </Card.Header>
      <Card.Body>
        {error && <Alert variant="danger">{error.message}</Alert>}

        <LineGraph
          data={graphData ? graphData : blankScoresByTerm}
          dataKeys={dataKeysForSOs}
          xAxisKey={xKey}
          xAxisLabel={xLabel}
          yAxisLabel={yLabel}
        />
      </Card.Body>
    </Card>
  );
}
