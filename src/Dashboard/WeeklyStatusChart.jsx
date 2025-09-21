// components/WeeklyStatusChart.jsx
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Oct 21", hours: 6 },
  { day: "Oct 22", hours: 5 },
  { day: "Oct 23", hours: 4 },
  { day: "Oct 24", hours: 7 },
  { day: "Oct 25", hours: 8 },
  { day: "Oct 26", hours: 6 },
  { day: "Oct 27", hours: 5 },
];

const WeeklyStatusChart = () => {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <h3>Weekly Status</h3>
      <p style={{ color: "#999", marginBottom: "1rem" }}>From 21 Oct - 27 Nov</p>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="hours" fill="#5D5FEF" radius={[10, 10, 0, 0]} barSize={30} />
        </BarChart>
      </ResponsiveContainer>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "1rem" }}>
        <span style={{ fontWeight: "bold" }}>Minimum <span style={{ color: "#5D5FEF" }}>4 Hrs</span></span>
        <span style={{ fontWeight: "bold" }}>Maximum <span style={{ color: "#5D5FEF" }}>8 Hrs</span></span>
      </div>
    </div>
  );
};

export default WeeklyStatusChart;
