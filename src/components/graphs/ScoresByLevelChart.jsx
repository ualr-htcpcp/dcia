import { Alert, Card } from "react-bootstrap";
import LineGraph from "./LineGraph.jsx";
import useSWR from "swr";
import { fetchWithYearAndTerm } from "utils/fetch";
import {
  blankScoresByLevel,
  dataKeysForSOs,
  scoresByLevelConfig,
} from "utils/graph";

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
        {error && <Alert variant="danger">{error.message}</Alert>}
        <LineGraph
          data={graphData ? graphData : blankScoresByLevel}
          dataKeys={dataKeysForSOs}
          xAxisLabel={scoresByLevelConfig.xAxisLabel}
          xAxisKey={scoresByLevelConfig.xAxisKey}
          yAxisLabel={scoresByLevelConfig.yAxisLabel}
          yAxisDomain={scoresByLevelConfig.yAxisDomain}
        />
      </Card.Body>
    </Card>
  );
}
