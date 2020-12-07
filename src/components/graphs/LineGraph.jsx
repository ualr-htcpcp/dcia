import {
  CartesianGrid,
  Label,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import ContainerFix from "./ContainerFix.jsx";

const graphWidth = 500;
const graphHeight = 500;

export default function LineGraph({
  data,
  dataKeys,
  xAxisKey,
  xAxisLabel,
  yAxisLabel,
  yAxisDomain,
}) {
  return (
    <ContainerFix>
      <LineChart
        anim
        width={graphWidth}
        height={graphHeight}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid stroke="#a6a6a6" strokeDasharray="5 5" />
        <XAxis dataKey={xAxisKey}>
          <Label value={xAxisLabel} position="insideBottom" offset={-10} />
        </XAxis>
        <YAxis domain={yAxisDomain}>
          <Label value={yAxisLabel} position="insideLeft" offset={-10} />
        </YAxis>
        <Tooltip />
        <Legend
          align="right"
          verticalAlign="bottom"
          wrapperStyle={{ paddingTop: "8px" }}
        />

        {dataKeys &&
          dataKeys.map((xValue, i) => {
            return (
              <Line
                key={i}
                type="monotone"
                dataKey={xValue.key}
                stroke={xValue.color}
              />
            );
          })}
      </LineChart>
    </ContainerFix>
  );
}
