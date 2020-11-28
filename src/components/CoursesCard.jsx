import CourseFormModal from "components/CourseFormModal.jsx";
import EmptyRow from "components/EmptyRow.jsx";
import { useSession } from "next-auth/client";
import Link from "next/link";
import { useState } from "react";
import { Button, Card, OverlayTrigger, Table, Tooltip } from "react-bootstrap";
import useSWR, { mutate } from "swr";
import { fetcher } from "utils/fetch";

const COURSES_PATH = "/api/courses";

export default function CoursesCard() {
  return (
    <Card className="mt-3">
      <Table responsive className="mb-0">
        <thead>
          <tr>
            <th>Number</th>
            <th>Title</th>
            <th>SO&rsquo;s</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <CourseRows />
        </tbody>
      </Table>
    </Card>
  );
}

function CourseRows() {
  const { data, error } = useSWR(COURSES_PATH, fetcher);

  if (error) return <EmptyRow message="Failed to load." />;
  if (!data) return <EmptyRow message={<em>Loading...</em>} />;

  return data.map((course) => <CourseRow key={course._id} course={course} />);
}

function CourseRow({ course }) {
  const [session] = useSession();
  return (
    <tr>
      <td>CPSC {course.number}</td>
      <td>
        <Link href={`/courses/${course._id}`}>{course.title}</Link>
      </td>
      <td className="pb-0">
        <StudentOutcomes studentOutcomes={course.studentOutcomes} />
      </td>
      <td className="text-right pt-2 pb-0" style={{ whiteSpace: "nowrap" }}>
        {["admin", "root"].includes(session?.user.accessLevel) && (
          <CourseRowActions course={course} />
        )}
      </td>
    </tr>
  );
}

function StudentOutcomes({ studentOutcomes }) {
  if (studentOutcomes.length === 0) return null;
  return studentOutcomes
    .map((so) => <StudentOutcome key={so._id} studentOutcome={so} />)
    .reduce((prev, curr) => [prev, ", ", curr]);
}

function StudentOutcome({ studentOutcome }) {
  const definitionTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      <small className="d-block text-left">{studentOutcome.definition}</small>
    </Tooltip>
  );

  return (
    <OverlayTrigger placement="bottom" overlay={definitionTooltip}>
      <button
        className="btn btn-link text-decoration-none p-0"
        style={{ cursor: "help" }}
      >
        SO{studentOutcome.number}
      </button>
    </OverlayTrigger>
  );
}

function CourseRowActions({ course }) {
  const [isEditing, setIsEditing] = useState(false);
  const coursesChanged = () => mutate(COURSES_PATH);
  const deleteCourse = async () => {
    await fetch(`${COURSES_PATH}/${course._id}`, { method: "delete" });
    coursesChanged();
  };

  return (
    <>
      <Button
        variant="danger"
        size="sm"
        disabled={course.isLocked}
        onClick={deleteCourse}
      >
        Delete
      </Button>
      <Button
        variant="secondary"
        size="sm"
        className="ml-2"
        onClick={() => setIsEditing(true)}
      >
        Edit
      </Button>

      <CourseFormModal
        course={course}
        show={isEditing}
        onHide={() => setIsEditing(false)}
        coursesChanged={coursesChanged}
      />
    </>
  );
}
