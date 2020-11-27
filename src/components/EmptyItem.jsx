import { ListGroup } from "react-bootstrap";

export default function EmptyItem({ message }) {
  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center text-muted">
      {message}
    </ListGroup.Item>
  );
}
