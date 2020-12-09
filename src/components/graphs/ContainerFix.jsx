import { ResponsiveContainer } from "recharts";

// Fix for recharts ResponsiveContainer not resizing correctly
// see: https://github.com/recharts/recharts/issues/172#issuecomment-523362671
export default function ContainerFix({ children }) {
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
