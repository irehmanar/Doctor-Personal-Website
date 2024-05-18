import React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import "./Line.css";

export default function MarkOptimization({ dataCustomer }) {
  return (
    <div className="line">
      <div className="top">
        <h1 className='title'>No of Patients per Month</h1>
        <MoreVertIcon className='titleIcon'/>
      </div>
      <LineChart
        xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] }]}
        series={[
          {
            data: dataCustomer,
            showMark: ({ index }) => index % 1 === 0,
          },
        ]}
        width={500}
        height={300}
      />
    </div>
  );
}
