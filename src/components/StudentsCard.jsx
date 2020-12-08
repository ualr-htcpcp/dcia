import { Button, Card, Col, Dropdown, ListGroup, Row } from "react-bootstrap";
import useSWR, { mutate } from "swr";
import fetcher from "utils/fetcher";
import EmptyItem from "components/EmptyItem.jsx";
import { useState } from "react";
import StudentFormModal from "components/StudentFormModal.jsx";
import { BsThreeDotsVertical } from "react-icons/bs";

const studentsPath = (courseInstance) =>
  `/api/course-instances/${courseInstance._id}/students`;

export default function StudentsCard({ courseInstance }) {
  const [version, setVersion] = useState(0);
  const [showAddStudent, setShowAddStudent] = useState(false);

  return (
    <Card>
      <Card.Header className="bg-white">
        <Row className="align-items-center flex-column flex-md-row">
          <Col>Students</Col>
          <Col className="d-flex flex-grow-0" style={{ whiteSpace: "nowrap" }}>
            <Button size="sm" onClick={() => setShowAddStudent(true)}>
              Add Student
            </Button>

            <StudentFormModal
              courseInstance={courseInstance}
              show={showAddStudent}
              onHide={() => setShowAddStudent(false)}
              studentsChanged={() => setVersion(version + 1)}
            />
          </Col>
        </Row>
      </Card.Header>
      <ListGroup variant="flush">
        <StudentListItems key={version} courseInstance={courseInstance} />
      </ListGroup>
    </Card>
  );
}

function StudentListItems({ courseInstance }) {
  const { data: students, error } = useSWR(
    studentsPath(courseInstance),
    fetcher
  );

  if (error) return <EmptyItem message="Failed to load." />;
  if (!students) return <EmptyItem message={<em>Loading...</em>} />;

  return students.map((student) => (
    <ListGroup.Item
      key={student._id}
      className="d-flex justify-content-between align-items-center"
    >
      <span className="flex-grow-1">
        {student.name.first} {student.name.last}
      </span>
      <span className="badge badge-secondary badge-pill">1.3</span>
      <StudentActions courseInstance={courseInstance} student={student} />
    </ListGroup.Item>
  ));
}

function StudentActions({ courseInstance, student }) {
  const [isEditing, setIsEditing] = useState(false);

  const studentsChanged = () => mutate(studentsPath(courseInstance));
  const dropStudentFromCourseInstance = async () => {
    await fetch(`${studentsPath(courseInstance)}/${student._id}`, {
      method: "delete",
    });
    studentsChanged();
  };

  return (
    <>
      <Dropdown>
        <Dropdown.Toggle
          as="a"
          bsPrefix="bs-none"
          style={{
            position: "relative",
            top: "-0.15rem",
            margin: "0 -0.25rem 0 0.75rem",
            cursor: "pointer",
          }}
        >
          <BsThreeDotsVertical className="text-muted" />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={() => setIsEditing(true)}>Edit</Dropdown.Item>
          <Dropdown.Item
            onClick={dropStudentFromCourseInstance}
            disabled={student.isLocked}
          >
            Drop
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <StudentFormModal
        student={student}
        courseInstance={courseInstance}
        show={isEditing}
        onHide={() => setIsEditing(false)}
        studentsChanged={studentsChanged}
      />
    </>
  );
}
