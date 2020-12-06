import CourseInstanceFormModal from "components/CourseInstanceFormModal.jsx";
import EmptyItem from "components/EmptyItem.jsx";
import Link from "next/link";
import { useState } from "react";
import { Button, Card, Col, ListGroup, Row } from "react-bootstrap";
import { RiAddFill } from "react-icons/ri";
import useSWR from "swr";
import fetcher from "utils/fetcher";
import { capitalize } from "utils/string";

export default function CourseInstanceCard({ course }) {
  const [version, setVersion] = useState(0);

  return (
    <Card className="mt-3">
      <Card.Header className="bg-white pt-2 pb-2">
        <Row className="align-items-center flex-column flex-lg-row">
          <Col>Course Instances</Col>
          <Col className="d-flex flex-grow-0" style={{ whiteSpace: "nowrap" }}>
            <AddCourseInstanceButton
              course={course}
              courseInstancesChanged={() => setVersion(version + 1)}
            />
          </Col>
        </Row>
      </Card.Header>
      <ListGroup variant="flush">
        <CourseInstanceItems key={version} course={course} />
      </ListGroup>
    </Card>
  );
}

function AddCourseInstanceButton({ course, courseInstancesChanged }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button size="sm" onClick={() => setShowModal(true)}>
        <RiAddFill /> Add
      </Button>
      <CourseInstanceFormModal
        course={course}
        show={showModal}
        onHide={() => setShowModal(false)}
        courseInstancesChanged={courseInstancesChanged}
      />
    </>
  );
}

function CourseInstanceItems({ course }) {
  const { data, error } = useSWR(
    `/api/course-instances?course=${course._id}`,
    fetcher
  );

  if (error) return <EmptyItem message="Failed to load." />;
  if (!data) return <EmptyItem message={<em>Loading...</em>} />;
  if (data.length === 0) {
    return <EmptyItem message="No course instances found." />;
  }

  return data.map(({ _id, semester, instructor: { name: instructorName } }) => (
    <ListGroup.Item
      className="d-flex justify-content-between align-items-center"
      key={_id}
    >
      <Link href={`/courses/${course._id}/instances/${_id}`}>
        {`${capitalize(semester.term)} ${semester.year}`}
      </Link>
      <span className="badge badge-secondary badge-pill">
        Instructor: {instructorName.first} {instructorName.last}
      </span>
    </ListGroup.Item>
  ));
}
