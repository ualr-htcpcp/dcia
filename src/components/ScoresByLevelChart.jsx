import { Card } from "react-bootstrap";

export default function ScoresByLevelChart({ className }) {
  return (
    <Card className={className}>
      <Card.Header className="bg-white">SO Scores by LEVEL</Card.Header>
      <Card.Body>
        <p className="display-1 text-secondary text-center py-5">Line Chart</p>
      </Card.Body>
    </Card>
  );
}
