import React from "react";
import { Card, Col, Form, Row } from "react-bootstrap";

export default function ScoresByTermChart({ className }) {
  return (
    <Card className={className}>
      <Card.Header className="bg-white">
        <Row className="align-items-center flex-column flex-lg-row">
          <Col>SO Scores by TERM</Col>
          <Col className="d-flex mt-2 mt-lg-0" style={{ flexGrow: 2 }}>
            <Form.Control custom as="select" size="sm">
              <option>All SO Scores</option>
            </Form.Control>
            <Form.Control custom as="select" size="sm" className="ml-3">
              <option>2020 Terms</option>
            </Form.Control>
            <Form.Control custom as="select" size="sm" className="ml-3">
              <option>All Instructors</option>
            </Form.Control>
          </Col>
        </Row>
      </Card.Header>
      <Card.Body>
        <p className="display-1 text-secondary text-center py-5">Line Chart</p>
      </Card.Body>
    </Card>
  );
}
