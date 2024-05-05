import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import "./Line.css"
export default function MarkOptimization() {
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
          data: [12, 23, 15, 20, 27, 14, 10, 6, 17, 8, 20, 24],
          showMark: ({ index }) => index % 2 === 0,
        },
      ]}
      width={500}
      height={300}
    />
    </div>
  );
}