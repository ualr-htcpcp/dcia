import CourseInstanceFormModal from "components/CourseInstanceFormModal.jsx";
import EmptyItem from "components/EmptyItem.jsx";
import { useSession } from "next-auth/client";
import Link from "next/link";
import { useState } from "react";
import { Button, Card, Col, Dropdown, ListGroup, Row } from "react-bootstrap";
import { RiAddFill } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";
import useSWR, { mutate } from "swr";
import fetcher from "utils/fetcher";
import { capitalize } from "utils/string";

export default function CourseInstanceCard({ course }) {
  return (
    <Card className="mt-3">
      <Card.Header className="bg-white pt-2 pb-2">
        <Row className="align-items-center flex-column flex-md-row">
          <Col>Course Instances</Col>
          <Col className="d-flex flex-grow-0" style={{ whiteSpace: "nowrap" }}>
            <AddCourseInstanceButton course={course} />
          </Col>
        </Row>
      </Card.Header>
      <ListGroup variant="flush">
        <CourseInstanceItems course={course} />
      </ListGroup>
    </Card>
  );
}

function AddCourseInstanceButton({ course }) {
  const [session] = useSession();
  const [showModal, setShowModal] = useState(false);

  if (!["admin", "root"].includes(session?.user.accessLevel)) return null;

  return (
    <>
      <Button
        size="sm"
        style={{ lineHeight: 1 }}
        onClick={() => setShowModal(true)}
      >
        <RiAddFill /> Add
      </Button>
      <CourseInstanceFormModal
        course={course}
        show={showModal}
        onHide={() => setShowModal(false)}
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

  return data.map((courseInstance) => {
    const {
      _id,
      semester,
      instructor: { name: instructorName },
    } = courseInstance;

    return (
      <ListGroup.Item
        className="d-flex justify-content-between align-items-center"
        key={_id}
      >
        <Link href={`/courses/${course._id}/instances/${_id}`} passHref>
          <a href="/" className="flex-grow-1">
            {`${capitalize(semester.term)} ${semester.year}`}
          </a>
        </Link>
        <span className="badge badge-secondary badge-pill">
          Instructor: {instructorName.first} {instructorName.last}
        </span>
        <CourseInstanceActions
          course={course}
          courseInstance={courseInstance}
        />
      </ListGroup.Item>
    );
  });
}

function CourseInstanceActions({ course, courseInstance }) {
  const [showModal, setShowModal] = useState(false);
  const deleteInstructor = async () => {
    await fetch(`/api/course-instances/${courseInstance._id}`, {
      method: "delete",
    });
    mutate(`/api/course-instances?course=${course._id}`);
  };

  return (
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
        <Dropdown.Item onClick={() => setShowModal(true)}>Edit</Dropdown.Item>
        <Dropdown.Item
          onClick={deleteInstructor}
          disabled={courseInstance.studentWorkProjects.length}
        >
          Delete
        </Dropdown.Item>
      </Dropdown.Menu>

      <CourseInstanceFormModal
        course={course}
        courseInstance={courseInstance}
        show={showModal}
        onHide={() => setShowModal(false)}
      />
    </Dropdown>
  );
}
