import { Alert, Card, Col, Row } from "react-bootstrap";
import useSWR from "swr";
import { fetchWithCourseId } from "utils/fetch.js";
import {
  blankScoresByTerm,
  dataKeysForSOs,
  scoresByTermConfig,
} from "utils/graph";
import LineGraph from "./LineGraph.jsx";

const GRAPH_DATA_PATH = "/api/analysis/scores_by/course-term";

export default function ScoresByTermForCourseChart({ courseId, className }) {
  const { data: graphData, error } = useSWR(
    courseId ? [GRAPH_DATA_PATH, courseId] : null,
    fetchWithCourseId
  );

  return (
    <Card className={className}>
      <Card.Header className="bg-white">
        <Row className="align-items-center flex-column flex-lg-row">
          <Col>SO Scores by SEMESTER</Col>
        </Row>
      </Card.Header>
      <Card.Body>
        {error && <Alert variant="danger">{error.message}</Alert>}
        <LineGraph
          data={graphData ? graphData.graphData : blankScoresByTerm}
          dataKeys={dataKeysForSOs}
          xAxisLabel={scoresByTermConfig.xAxisLabel}
          xAxisKey={scoresByTermConfig.xAxisKey}
          yAxisLabel={scoresByTermConfig.yAxisLabel}
          yAxisDomain={scoresByTermConfig.yAxisDomain}
        />
      </Card.Body>
    </Card>
  );
}
