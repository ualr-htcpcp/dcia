import React from "react";
import { Card } from "react-bootstrap";

export default function ScoreDistributionChart({ className, studentOutcome }) {
  return (
    <Card className={className}>
      <Card.Header className="bg-white">
        SO{studentOutcome.number} Distribution
      </Card.Header>
      <Card.Body>
        <p className="display-3 text-secondary text-center py-5">Bar Chart</p>
      </Card.Body>
    </Card>
  );
}
