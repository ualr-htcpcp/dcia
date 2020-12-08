import { ListGroup } from "react-bootstrap";

function getPillStyle(score) {
  const bounds = {
    bad: {
      min: 0.0,
      style: "badge-danger",
    },
    okay: {
      min: 2.0,
      style: "badge-warning",
    },
    good: {
      min: 3.0,
      style: "badge-success",
    },
  };
  const baseStyle = "badge badge-pill";

  if (score >= bounds.good.min) {
    return `${baseStyle} ${bounds.good.style}`;
  }
  if (score >= bounds.okay.min && score < bounds.good.min) {
    return `${baseStyle} ${bounds.okay.style}`;
  } else {
    return `${baseStyle} ${bounds.bad.style}`;
  }
}

function trimScore(score) {
  const trimmed = new Number(score).toPrecision(2);
  return trimmed;
}

export default function SummaryItem({ name, score }) {
  const pillStyle = getPillStyle(score);
  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center">
      {name ? name : "Loading"}
      {score ? (
        <span className={pillStyle}>{trimScore(score)}</span>
      ) : (
        <span className="badge badge-pill badge-secondary"> {"X.x"}</span>
      )}
    </ListGroup.Item>
  );
}