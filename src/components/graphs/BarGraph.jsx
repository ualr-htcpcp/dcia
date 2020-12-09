import {
  Bar,
  BarChart,
  CartesianGrid,
  Label,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import ContainerFix from "./ContainerFix.jsx";

const barWidth = 750;
const barHeight = 250;

function CustomTooltip({ active, payload }) {
  if (active && payload) {
    return (
      <div className="card">
        <span>{`Count: ${payload[0].value}`}</span>
      </div>
    );
  }
  return null;
}
export default function BarGraph({
  data,
  dataKeys,
  xAxisKey,
  xAxisLabel,
  yAxisLabel,
}) {
  return (
    <ContainerFix>
      <BarChart
        width={barWidth}
        height={barHeight}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        data={data}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={xAxisKey}>
          <Label value={xAxisLabel} position="insideBottom" offset={-2} />
        </XAxis>
        <YAxis>
          <Label value={yAxisLabel} position="insideLeft" offset={-14} />
        </YAxis>
        <Tooltip content={<CustomTooltip />} />

        {dataKeys &&
          dataKeys.map((xValue, i) => {
            return <Bar key={i} dataKey={xValue.key} fill={xValue.color} />;
          })}
      </BarChart>
    </ContainerFix>
  );
}
