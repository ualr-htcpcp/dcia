import { Card, ListGroup } from "react-bootstrap";

export default function ScoreSummaryCard({ name, viewAllPath }) {
  return (
    <Card>
      <Card.Header className="bg-white">{name}</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item className="d-flex justify-content-between align-items-center">
          Fiona Rutherford
          <span className="badge badge-primary badge-pill">3.8</span>
        </ListGroup.Item>
        <ListGroup.Item className="d-flex justify-content-between align-items-center">
          Jacky Nienow
          <span className="badge badge-primary badge-pill">3.7</span>
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
      <Card.Footer className="bg-white">
        <a href={viewAllPath}>View All</a>
      </Card.Footer>
    </Card>
  );
}
