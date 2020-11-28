import { Card } from "react-bootstrap";
import LineGraph from "./LineGraph.jsx";
import useSWR from "swr";
import fetcher from "utils/fetcher.js";

const xKey = "level";
const xLabel = "Course Level";
const yLabel = "Score";

const GRAPH_DATA_PATH = "/api/analysis/scores_by/level?term=";

//TODO: Trying to figure out how to better component-ize the chart
// Since it will be used across the platform, need a way to dynamically create the lines from data
export default function ScoresByLevelChart({ className, term }) {
  const { data: graphData, error } = useSWR(GRAPH_DATA_PATH + term, fetcher);

  return !graphData ? (
    "Loading"
  ) : (
    <Card className={className}>
      <Card.Header className="bg-white">SO Scores by LEVEL</Card.Header>
      <Card.Body>
        <LineGraph
          graphData={graphData}
          xAxisLabel={xLabel}
          xAxisKey={xKey}
          yAxisLabel={yLabel}
        />
      </Card.Body>
    </Card>
  );
}
