import EmptyItem from "components/EmptyItem.jsx";
import StudentFormModal from "components/StudentFormModal.jsx";
import { useSession } from "next-auth/client";
import { useState } from "react";
import { Button, Card, Col, Dropdown, ListGroup, Row } from "react-bootstrap";
import { BsThreeDotsVertical } from "react-icons/bs";
import useSWR, { mutate } from "swr";
import { getPillStyle } from "utils/analysis";
import { isAdmin } from "utils/auth";
import { fetcher } from "utils/fetch";

const studentsPath = (courseInstance) =>
  `/api/course-instances/${courseInstance._id}/students`;
const studentsDataPath = (courseInstance) =>
  `/api/analysis/scores_by/student?course=${courseInstance._id}`;

export default function StudentsCard({ courseInstance }) {
  const [session] = useSession();
  const [version, setVersion] = useState(0);

  return (
    <Card>
      <Card.Header className="bg-white">
        <Row className="align-items-center flex-column flex-md-row">
          <Col>Students</Col>
          <Col className="d-flex flex-grow-0" style={{ whiteSpace: "nowrap" }}>
            {isAdmin(session) && (
              <AddStudentButton
                courseInstance={courseInstance}
                studentsChanged={() => setVersion(version + 1)}
              />
            )}
          </Col>
        </Row>
      </Card.Header>
      <ListGroup variant="flush">
        <StudentListItems key={version} courseInstance={courseInstance} />
      </ListGroup>
    </Card>
  );
}

function AddStudentButton({ courseInstance, studentsChanged }) {
  const [showAddStudent, setShowAddStudent] = useState(false);

  return (
    <>
      <Button size="sm" onClick={() => setShowAddStudent(true)}>
        Add Student
      </Button>

      <StudentFormModal
        courseInstance={courseInstance}
        show={showAddStudent}
        onHide={() => setShowAddStudent(false)}
        studentsChanged={studentsChanged}
      />
    </>
  );
}

function StudentListItems({ courseInstance }) {
  const [session] = useSession();
  const { data: students, error } = useSWR(
    studentsPath(courseInstance),
    fetcher
  );
  const { data: studentsData, error: studentsDataError } = useSWR(
    studentsDataPath(courseInstance),
    fetcher
  );

  const getScore = (allScores, student) => {
    const { first, last } = student.name;
    const found = allScores.find((score) => score.name === `${first} ${last}`);

    if (!found) return null;

    return Object.values(found)[1];
  };

  if (error || studentsDataError)
    return <EmptyItem message="Failed to load." />;
  if (!students || !studentsData)
    return <EmptyItem message={<em>Loading...</em>} />;
  if (students.length === 0) {
    return <EmptyItem message="No students added." />;
  }

  return students.map((student) => (
    <ListGroup.Item
      key={student._id}
      className="d-flex justify-content-between align-items-center"
    >
      <span className="flex-grow-1">
        {student.name.first} {student.name.last}
      </span>
      <span className={getPillStyle(getScore(studentsData, student))}>
        {getScore(studentsData, student)}
      </span>
      {isAdmin(session) && (
        <StudentActions courseInstance={courseInstance} student={student} />
      )}
    </ListGroup.Item>
  ));
}

function StudentActions({ courseInstance, student }) {
  const [isEditing, setIsEditing] = useState(false);

  const studentsChanged = () => {
    mutate(studentsPath(courseInstance));
    mutate(studentsDataPath(courseInstance));
  };
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
