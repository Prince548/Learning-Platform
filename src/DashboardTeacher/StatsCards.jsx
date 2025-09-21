import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "UX Design", value: 43 },
  { name: "Front-End", value: 32 },
  { name: "Copywriting", value: 25 },
];

const COLORS = ["#8884d8", "#82ca9d", "#ffc658"];

const StatsCards = () => {
  return (
    <div style={{ width: "40%", background: "#fff", padding: "20px", borderRadius: "10px" }}>
      <h3>My Progress</h3>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" outerRadius={80} fill="#8884d8" label>
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StatsCards;
