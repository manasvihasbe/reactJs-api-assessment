import "./chart.css";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Chart({ grid }) {
  const data = [
    {
      name: "Jan",
      "Post per Month": 0,
    },
    {
      name: "Feb",
      "Post per Month": 0,
    },
    {
      name: "March",
      "Post per Month": 0,
    },
    {
      name: "April",
      "Post per Month": 0,
    },
    {
      name: "May",
      "Post per Month": 0,
    },
    {
      name: "June",
      "Post per Month": 0,
    },
    {
      name: "July",
      "Post per Month": 12,
    },
    {
      name: "Aug",
      "Post per Month": 2,
    },
    {
      name: "Sept",
      "Post per Month": 0,
    },
    {
      name: "Oct",
      "Post per Month": 0,
    },
    {
      name: "Nov",
      "Post per Month": 0,
    },
    {
      name: "Dec",
      "Post per Month": 0,
    },
  ];

  return (
    <div className="chart">
      <h4 className="chartTitle">Posts per Month</h4>
      <ResponsiveContainer width="98%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line type="monotone" dataKey="Post per Month" stroke="#5550bd" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
