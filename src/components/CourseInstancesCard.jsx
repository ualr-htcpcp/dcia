import EmptyItem from "components/EmptyItem.jsx";
import Link from "next/link";
import { Card, ListGroup } from "react-bootstrap";
import useSWR from "swr";
import { fetcher } from "utils/fetch";
import { capitalize } from "utils/string";

export default function CourseInstanceCard({ course }) {
  return (
    <Card className="mt-3">
      <Card.Header className="bg-white">Course Instances</Card.Header>
      <ListGroup variant="flush">
        <CourseInstanceItems course={course} />
      </ListGroup>
    </Card>
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
        {instructorName.first} {instructorName.last}
      </span>
    </ListGroup.Item>
  ));
}
