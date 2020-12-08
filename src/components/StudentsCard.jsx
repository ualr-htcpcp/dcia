import { Button, Card, Col, ListGroup, Row } from "react-bootstrap";
import useSWR from "swr";
import fetcher from "utils/fetcher";
import EmptyItem from "components/EmptyItem.jsx";

export default function StudentsCard({ courseInstanceId }) {
  return (
    <Card>
      <Card.Header className="bg-white">
        <Row className="align-items-center flex-column flex-md-row">
          <Col>Students</Col>
          <Col className="d-flex flex-grow-0" style={{ whiteSpace: "nowrap" }}>
            <Button size="sm">Add Student</Button>
          </Col>
        </Row>
      </Card.Header>
      <ListGroup variant="flush">
        <StudentListItems courseInstanceId={courseInstanceId} />
      </ListGroup>
    </Card>
  );
}

function StudentListItems({ courseInstanceId }) {
  const { data: students, error } = useSWR(
    `/api/students?courseInstance=${courseInstanceId}`,
    fetcher
  );

  if (error) return <EmptyItem message="Failed to load." />;
  if (!students) return <EmptyItem message={<em>Loading...</em>} />;

  return students.map(({ _id, name }) => (
    <ListGroup.Item
      key={_id}
      className="d-flex justify-content-between align-items-center"
    >
      {name.first} {name.last}
      <span className="badge badge-secondary badge-pill">1.3</span>
    </ListGroup.Item>
  ));
}
