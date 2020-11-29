import { Card } from "react-bootstrap";
import LineGraph from "./LineGraph.jsx";
import useSWR from "swr";
import { fetchWithYearAndTerm } from "utils/fetch";
import { dataKeysForSOs } from "utils/graph";

const xKey = "level";
const xLabel = "Course Level";
const yLabel = "Score";

const GRAPH_DATA_PATH = "/api/analysis/scores_by/level";

export default function ScoresByLevelChart({ className, term }) {
  const { data: graphData, error } = useSWR(
    term ? [GRAPH_DATA_PATH, term.year, term.term] : null,
    fetchWithYearAndTerm
  );

  return (
    <Card className={className}>
      <Card.Header className="bg-white">SO Scores by LEVEL</Card.Header>
      <Card.Body>
        {!graphData ? (
          "Loading..."
        ) : (
          <LineGraph
            data={graphData}
            dataKeys={dataKeysForSOs}
            xAxisLabel={xLabel}
            xAxisKey={xKey}
            yAxisLabel={yLabel}
          />
        )}
      </Card.Body>
    </Card>
  );
}
