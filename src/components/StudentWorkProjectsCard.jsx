import EmptyRow from "components/EmptyRow.jsx";
import faker from "faker";
import React from "react";
import { useState } from "react";
import { Button, Card, Col, Row, Table } from "react-bootstrap";
import useSWR from "swr";
import StudentWorkProjectFormModal from "components/StudentWorkProjectFormModal.jsx";

const tableSpacingStyle = { paddingLeft: "1.25rem", paddingRight: "1.25rem" };

export default function StudentWorkProjectsCard({
  className,
  courseInstance,
  studentOutcomes,
}) {
  const [version, setVersion] = useState(0);
  const [showAddSWP, setShowAddSWP] = useState(false);

  return (
    <Card className={className}>
      <Card.Header className="bg-white pt-2 pb-2">
        <Row className="align-items-center flex-column flex-lg-row">
          <Col>Student Work Projects (SWPs)</Col>
          <Col className="d-flex flex-grow-0" style={{ whiteSpace: "nowrap" }}>
            <Button size="sm" onClick={() => setShowAddSWP(true)}>
              Add SWP
            </Button>

            <StudentWorkProjectFormModal
              courseInstance={courseInstance}
              show={showAddSWP}
              onHide={() => setShowAddSWP(false)}
              studentOutcomes={studentOutcomes}
              swpsChanged={() => setVersion(version + 1)}
            />
          </Col>
        </Row>
      </Card.Header>
      <Table className="mb-0">
        <thead>
          <tr>
            <th
              className="col-md-6 font-weight-normal text-secondary border-bottom-0"
              style={tableSpacingStyle}
            >
              Name
            </th>
            {studentOutcomes.map(({ number }) => (
              <th
                key={number}
                className="text-right font-weight-normal text-secondary border-bottom-0"
              >
                SO{number}
              </th>
            ))}
            <th className="border-bottom-0"></th>
          </tr>
        </thead>
        <tbody>
          <StudentWorkProjects
            key={version}
            courseInstance={courseInstance}
            studentOutcomes={studentOutcomes}
          />
        </tbody>
      </Table>
    </Card>
  );
}

function StudentWorkProjects({ courseInstance, studentOutcomes }) {
  const { data: swps, error } = useSWR(
    `/api/course-instances/${courseInstance._id}/swps`
  );
  if (error) return <EmptyRow message="Failed to load." />;
  if (!swps) return <EmptyRow message={<em>Loading...</em>} />;
  if (swps.length === 0) {
    return <EmptyRow message="No student work projects added." />;
  }

  return swps.map((swp) => (
    <StudentWorkProjectRow
      key={swp._id}
      swp={swp}
      studentOutcomes={studentOutcomes}
    />
  ));
}

function StudentWorkProjectRow({ swp, studentOutcomes }) {
  const randomFloat = () => faker.random.float({ min: 1, max: 4 }).toFixed(1);

  return (
    <tr>
      <td style={tableSpacingStyle}>{swp.name}</td>
      {studentOutcomes.map(({ _id }) => (
        <td key={_id} className="pl-5 text-right">
          {swp.studentOutcomes.includes(_id) ? randomFloat() : "–"}
        </td>
      ))}
      <td className="pl-5 pt-2 pb-0" style={tableSpacingStyle}>
        <Button size="sm" variant="secondary" style={{ whiteSpace: "nowrap" }}>
          Record Assessment
        </Button>
      </td>
    </tr>
  );
}
