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
const dataset = [
  {
    BASIC: 59,
    THERAPEUTIC: 57,
    PREMIUM: 86,
    month: 'Jan',
  },
  {
    BASIC: 50,
    THERAPEUTIC: 52,
    PREMIUM: 78,
    month: 'Feb',
  },
  {
    BASIC: 47,
    THERAPEUTIC: 53,
    PREMIUM: 106,
    month: 'Mar',
  },
  {
    BASIC: 54,
    THERAPEUTIC: 56,
    PREMIUM: 92,
    month: 'Apr',
  },
  {
    BASIC: 57,
    THERAPEUTIC: 69,
    PREMIUM: 92,
    month: 'May',
  },
  {
    BASIC: 60,
    THERAPEUTIC: 63,
    PREMIUM: 103,
    month: 'June',
  },
  {
    BASIC: 59,
    THERAPEUTIC: 60,
    PREMIUM: 105,
    month: 'July',
  },
  {
    BASIC: 65,
    THERAPEUTIC: 60,
    PREMIUM: 106,
    month: 'Aug',
  },
  {
    BASIC: 51,
    THERAPEUTIC: 51,
    PREMIUM: 95,
    month: 'Sept',
  },
  {
    BASIC: 60,
    THERAPEUTIC: 65,
    PREMIUM: 97,
    month: 'Oct',
  },
  {
    BASIC: 67,
    THERAPEUTIC: 64,
    PREMIUM: 76,
    month: 'Nov',
  },
  {
    BASIC: 61,
    THERAPEUTIC: 70,
    PREMIUM: 103,
    month: 'Dec',
  },
];

const valueFormatter = (value) => `${value}`;

export default function BarsDataset() {
  return (
    <div className="bar">
    <BarChart
      dataset={dataset}
      xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      series={[
        { dataKey: 'BASIC', label: 'Basic', valueFormatter },
        { dataKey: 'THERAPEUTIC', label: 'Therapeutic', valueFormatter },
        { dataKey: 'PREMIUM', label: 'Premium', valueFormatter },
      ]}
      {...chartSetting}
    />
    </div>
  );
}