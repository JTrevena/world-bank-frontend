import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function Results(props) {
  const [data, setData] = useState(undefined);

  useEffect(() => {
    setData(props.results);
  }, [props.results]);

  if (!data) return <div>Nothing to see here...</div>;
  else if (data.length === 0) return <div>No data</div>;
  else if (data.length === 1)
    return (
      <div>
        <Typography variant="h1" component="div" gutterBottom>
          {data[0].value}
        </Typography>
      </div>
    );

  return (
    <ResponsiveContainer width="95%" height="95%" aspect={3}>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 50,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis
          type="number"
          domain={["auto", "auto"]}
          allowDataOverflow={true}
        />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
