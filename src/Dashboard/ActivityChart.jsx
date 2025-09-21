// components/ActivityChart.jsx
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "1am", userA: 20, userB: 15 },
  { name: "2am", userA: 30, userB: 25 },
  { name: "3am", userA: 40, userB: 35 },
  { name: "4am", userA: 35, userB: 20 },
  { name: "5am", userA: 50, userB: 45 },
  { name: "6am", userA: 60, userB: 50 },
  { name: "7am", userA: 55, userB: 40 },
  { name: "8am", userA: 40, userB: 30 },
  { name: "9am", userA: 45, userB: 35 },
  { name: "10am", userA: 50, userB: 45 },
  { name: "11am", userA: 60, userB: 55 },
];

const ActivityChart = () => {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <h3>Daily Learning Activity</h3>
      <p style={{ color: "#999", marginBottom: "1rem" }}>Time you spent every day on learning</p>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="userA" stroke="#5D5FEF" strokeWidth={3} />
          <Line type="monotone" dataKey="userB" stroke="#00CFFF" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ActivityChart;
