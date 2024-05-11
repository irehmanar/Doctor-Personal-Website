import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import "./Chart.css";
const Chart =({ aspect , title ,data}) => {
  // const data = [

  //   { name: "Jan", Total: 1200 },
  //   { name: "Feb", Total: 2100 },
  //   { name: "Mar", Total: 800 },
  //   { name: "Apr", Total: 1500 },
  //   { name: "May", Total: 900 },
  //   { name: "Jun", Total: 1700 },
  //   { name: "Jul", Total: 1200 },
  //   { name: "Aug", Total: 2100 },
  //   { name: "Sept", Total: 800 },
  //   { name: "Oct", Total: 1500 },
  //   { name: "Nov", Total: 900 },
  //   { name: "Dec", Total: 1700 },
  // ];

  return (
    <div className="chart">
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={ aspect }>
        <AreaChart
          width={730}
          height={450}
          data={data}
          margin={{ top: 0, right: 30, left: 30, bottom: 10 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="month" stroke="#0e3b43"/>
          <CartesianGrid strokeDasharray="3 3" className="grid"/>
          <Tooltip />
          <Area
            type="monotone"
            dataKey="totalIncome"
            stroke="#001110"
            fillOpacity={1}
            fill="url(#total)"
            
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;