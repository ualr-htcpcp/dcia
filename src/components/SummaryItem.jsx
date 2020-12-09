import { ListGroup } from "react-bootstrap";
import { getPillStyle } from "utils/analysis";

export default function SummaryItem({ name, score }) {
  const pillStyle = getPillStyle(score);
  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center">
      {name ? name : "Loading"}
      {score ? (
        <span className={pillStyle}>{score.toFixed(2)}</span>
      ) : (
        <span className="badge badge-pill badge-secondary"> {"X.x"}</span>
      )}
    </ListGroup.Item>
  );
}
