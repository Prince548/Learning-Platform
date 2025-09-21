import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Sun", CW: 2, FE: 3, UX: 2 },
  { day: "Mon", CW: 3, FE: 2, UX: 1 },
  { day: "Tue", CW: 2, FE: 4, UX: 2 },
  { day: "Wed", CW: 1, FE: 3, UX: 3 },
  { day: "Thu", CW: 3, FE: 2, UX: 3 },
  { day: "Fri", CW: 4, FE: 3, UX: 2 },
  { day: "Sat", CW: 2, FE: 3, UX: 3 },
];

const ActivityChart = () => (
  <div style={{ width: "100%", height: 300, background: "#fff", borderRadius: 12, padding: 20 }}>
    <h3>Learning Activity</h3>
    <ResponsiveContainer width="100%" height="90%">
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="CW" fill="#ffc658" />
        <Bar dataKey="FE" fill="#82ca9d" />
        <Bar dataKey="UX" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default ActivityChart;
