import React from "react";
import { useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import { dataKeysForSOs } from "utils/graph";
import LineGraph from "./LineGraph";

const xKey = "term";
const xLabel = "Term";
const yLabel = "Score";

const GRAPH_DATA_PATH = "api/analysis/scores_by/term";

const defaultSelections = {
  so: ["All SO Scores"],
  term: "2020 Terms",
  instructor: "All Instructors",
};
export default function ScoresByTermChart({ className, isAdminOrRoot }) {
  return (
    <Card className={className}>
      <Card.Header className="bg-white">
        <Row className="align-items-center flex-column flex-lg-row">
          <Col>SO Scores by TERM</Col>
          <Col className="d-flex mt-2 mt-lg-0" style={{ flexGrow: 2 }}>
            <Form.Control custom as="select" size="sm">
              <option>{defaultSelections.so}</option>
            </Form.Control>
            <Form.Control custom as="select" size="sm" className="ml-3">
              <option>{defaultSelections.term}</option>
            </Form.Control>
            {isAdminOrRoot ? (
              <Form.Control custom as="select" size="sm" className="ml-3">
                <option>{defaultSelections.instructor}</option>
              </Form.Control>
            ) : (
              ""
            )}
          </Col>
        </Row>
      </Card.Header>
      <Card.Body></Card.Body>
    </Card>
  );
}
