import { Button } from '@material-ui/core';
import React from 'react';
import { Chart } from 'react-charts/dist/react-charts.development';

const DashboardChart = () => {
  const [{ min, max }, setState] = React.useState({
    min: null,
    max: null,
  });
  const brush = React.useMemo(
    () => ({
      onSelect: brushData => {
        setState({
          min: Math.min(brushData.start, brushData.end),
          max: Math.max(brushData.start, brushData.end),
        });
      },
    }),
    []
  );
  const data = React.useMemo(
    () => [
      {
        label: 'Daily Progress',
        data: [
          [0, 1],
          [1, 2],
          [2, 4],
          [3, 2],
          [4, 7],
          [5, 3],
          [6, 5],
          [7, 4],
          [8, 3],
          [9, 2],
        ],
      },
      {
        label: 'Ideal Progress',
        data: [
          [0, 3],
          [1, 2],
          [2, 4],
          [3, 5],
          [4, 6],
          [5, 6],
          [6, 7],
          [7, 8],
          [8, 8],
          [9, 7],
        ],
      },
    ],
    []
  );

  const axes = React.useMemo(
    () => [
      {
        primary: true,
        type: 'linear',
        position: 'bottom',
        hardMin: min,
        hardMax: max,
      },
      { type: 'linear', position: 'left', stacked: true },
    ],
    [max, min]
  );
  const series = React.useMemo(
    () => ({
      type: 'area',
    }),
    []
  );

  return (
    // A react-chart hyper-responsively and continuously fills the available
    // space of its parent element automatically
    <div
      style={{
        width: '800px',
        height: '500px',
        background: 'white',
        borderRadius: '5px',
      }}
    >
      <Button
        color="primary"
        variant="text"
        style={{ outline: 'none' }}
        onClick={() =>
          setState({
            min: null,
            max: null,
          })
        }
      >
        Reset Zoom
      </Button>
      <Chart
        data={data}
        axes={axes}
        series={series}
        tooltip
        primaryCursor
        secondaryCursor
        brush={brush}
      />
    </div>
  );
};

export default DashboardChart;
