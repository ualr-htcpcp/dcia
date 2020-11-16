import { Card } from "react-bootstrap";
import LineGraph from "./LineGraph.jsx";
import { springData } from "../graphData";

const xLabel = "Course Level";
const xKey = "level";
const yLabel = "Score";

export default function ScoresByLevelChart({ className }) {
  return (
    <Card className={className}>
      <Card.Header className="bg-white">SO Scores by LEVEL</Card.Header>
      <Card.Body>
        <LineGraph
          data={springData}
          xAxisLabel={xLabel}
          xAxisKey={xKey}
          yAxisLabel={yLabel}
        />
      </Card.Body>
    </Card>
  );
}
