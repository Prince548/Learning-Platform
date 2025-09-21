import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Completed", value: 43 },
  { name: "In Progress", value: 32 },
  { name: "Not Started", value: 25 },
];

const COLORS = ["#8884d8", "#82ca9d", "#ffc658"];

const ProgressPie = () => (
  <div style={{ width: "100%", height: 300, background: "#fff", borderRadius: 12, padding: 20 }}>
    <h3>My Progress</h3>
    <ResponsiveContainer width="100%" height="90%">
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={80}
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  </div>
);

export default ProgressPie;
