import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { day: "Mon", completed: 3 },
  { day: "Tue", completed: 5 },
  { day: "Wed", completed: 2 },
  { day: "Thu", completed: 4 },
  { day: "Fri", completed: 6 },
  { day: "Sat", completed: 1 },
  { day: "Sun", completed: 0 },
];

const WeeklyStatusChart = () => (
  <div style={{ width: "100%", height: 300, background: "#fff", borderRadius: 12, padding: 20 }}>
    <h3>Weekly Progress</h3>
    <ResponsiveContainer width="100%" height="90%">
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Bar dataKey="completed" fill="#005bff" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default WeeklyStatusChart;
