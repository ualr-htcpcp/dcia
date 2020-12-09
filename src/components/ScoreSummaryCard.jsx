import { Card, ListGroup } from "react-bootstrap";
import SummaryItem from "./SummaryItem.jsx";

export default function ScoreSummaryCard({ name, viewAllPath, items }) {
  return (
    <Card>
      <Card.Header className="bg-white">{name}</Card.Header>
      <ListGroup variant="flush">
        {items.map((item, i) => (
          <SummaryItem key={i} name={item.name} score={item.score} />
        ))}
      </ListGroup>
      <Card.Footer className="bg-white">
        <a href={viewAllPath}>View All</a>
      </Card.Footer>
    </Card>
  );
}
