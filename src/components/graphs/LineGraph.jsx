import {
  CartesianGrid,
  Label,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// Fix for recharts ResponsiveContainer not resizing correctly
// see: https://github.com/recharts/recharts/issues/172#issuecomment-523362671
function ContainerFix({ children }) {
  return (
    <div
      style={{ position: "relative", width: "100%", paddingBottom: "250px" }}
    >
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          top: 0,
        }}
      >
        <ResponsiveContainer>{children}</ResponsiveContainer>
      </div>
    </div>
  );
}

const graphWidth = 500;
const graphHeight = 500;

export default function LineGraph({
  data,
  dataKeys,
  xAxisKey,
  xAxisLabel,
  yAxisLabel,
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
          <Label value={xAxisLabel} position="insideBottom" offset={-2} />
        </XAxis>
        <YAxis>
          <Label value={yAxisLabel} position="insideLeft" offset={-10} />
        </YAxis>
        <Tooltip />
        <Legend align="right" verticalAlign="bottom" />

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
