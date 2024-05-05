import * as React from 'react';
import './PieChart.css';
import { PieChart as Chart } from '@mui/x-charts/PieChart';
import "react-circular-progressbar/dist/styles.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function PieChart({data,title}) {
  return (
    <div className='featured'>
    <div className="top">
      <h1 className='title'>{title}</h1>
      <MoreVertIcon className='titleIcon'/>
    </div>

    <Chart
      series={[
        {
          data,
          highlightScope: { faded: 'global', highlighted: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
        },
      ]}
      height={300}
    />
  </div>
  );
}