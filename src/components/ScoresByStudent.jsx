import { Card, ListGroup } from "react-bootstrap";
import useSWR from "swr";
import { fetcher } from "utils/fetch";

const STUDENT_PATH = "/api/analysis/scores_by/student";

export default function ScoresByStudent({ courseInstanceId }) {
  const { data, error } = useSWR(
    courseInstanceId ? `${STUDENT_PATH}?course=${courseInstanceId}` : null,
    fetcher
  );
  return (
    <Card>
      <Card.Header className="bg-white">SO Scores by STUDENT</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item className="d-flex justify-content-between align-items-center">
          Fiona Rutherford
          <span className="badge badge-info badge-pill">3.8</span>
        </ListGroup.Item>
        <ListGroup.Item className="d-flex justify-content-between align-items-center">
          Jacky Nienow
          <span className="badge badge-info badge-pill">3.7</span>
        </ListGroup.Item>
        <ListGroup.Item className="d-flex justify-content-between align-items-center">
          Prince Beier
          <span className="badge badge-secondary badge-pill">3.3</span>
        </ListGroup.Item>
        <ListGroup.Item className="d-flex justify-content-between align-items-center">
          Hollie Trantow
          <span className="badge badge-secondary badge-pill">2.6</span>
        </ListGroup.Item>
        <ListGroup.Item className="d-flex justify-content-between align-items-center">
          Maddison Keeling
          <span className="badge badge-danger badge-pill">1.3</span>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
}
