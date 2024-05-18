import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';
import "./BarChart.css";

const chartSetting = {
  yAxis: [
    {
      label: 'no of patient',
    },
  ],
  width: 600,
  height: 400,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: 'translate(-10px, 0)',
    },
  },
};


const valueFormatter = (value) => `${value}`;

export default function BarsDataset({dataset}) {
  return (
    <div className="bar">
    <BarChart
      dataset={dataset}
      xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      series={[
        { dataKey: 'BASIC', label: 'Basic', valueFormatter },
        // { dataKey: 'THERAPEUTIC', label: 'Therapeutic', valueFormatter },
        { dataKey: 'PREMIUM', label: 'Premium', valueFormatter },
      ]}
      {...chartSetting}
    />
    </div>
  );
}