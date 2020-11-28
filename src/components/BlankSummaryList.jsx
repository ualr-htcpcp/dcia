import { ListGroup } from "react-bootstrap";
import SummaryItem from "./SummaryItem.jsx";

export default function BlankSummaryList({ numItems }) {
  return (
    <ListGroup variant="flush">
      {Array(numItems)
        .fill(0)
        .map((item, i) => {
          return <SummaryItem key={i} name="" score="" />;
        })}
    </ListGroup>
  );
}
