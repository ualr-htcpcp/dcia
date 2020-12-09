import React from "react";
import { Card } from "react-bootstrap";
import { dataKeysForAssessments, soCountsConfig } from "utils/graph.js";
import BarGraph from "./graphs/BarGraph.jsx";

export default function ScoreDistributionChart({
  className,
  studentOutcome,
  graphData,
}) {
  return (
    <Card className={className}>
      <Card.Header className="bg-white">
        SO{studentOutcome.number} Distribution
      </Card.Header>
      <Card.Body>
        <BarGraph
          xAxisKey={soCountsConfig.xAxisKey}
          xAxisLabel={soCountsConfig.xAxisLabel}
          yAxisLabel={soCountsConfig.yAxisLabel}
          data={graphData}
          dataKeys={dataKeysForAssessments}
        />
      </Card.Body>
    </Card>
  );
}
