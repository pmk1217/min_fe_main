import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

interface BarChartProps {
  xAxisLabel: string[];
  series: { name: string; data: number[] }[];
  colors: string[];
  isLegendEnabled?: boolean;
  yAxisTitle?: string;
  xAxisTitle?: string;

  chartTitle?: string;
  chartHeight?: number;
  barWidth?: number;
  yAxisInterval?: number;
}
const SimpleBarChart = (props: BarChartProps) => {
  const filledSeries = props.series.map((serie, serieIndex) => ({
    name: serie.name,
    data: serie.data.map((value, index) => ({
      y: value,
      color: props.colors ? props.colors[index % props.colors.length] : undefined,
    })),
    showInLegend: props.isLegendEnabled ?? true,
  }));

  const options = {
    chart: {
      type: 'column',
      height: props.chartHeight ?? 400,
      spacingLeft: 20,
      spacingRight: 20,
    },
    plotOtions: {
      column: {
        colorByPoint: true,
        pointPadding: 0.2,
        borderWidth: 0,
        groupPadding: 0.1,
        pointWidth: props.barWidth ?? 40,
      },
    },
    title: { text: props.chartTitle ?? '' },
    xAxis: { categories: props.xAxisLabel, title: { text: props.xAxisTitle ?? '' } },
    yAxis: { title: { text: props.yAxisTitle ?? '' }, tickInterval: props.yAxisInterval ?? 10 },
    series: filledSeries,
    credits: { enabled: false },
    legend: { enabled: false },
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default SimpleBarChart;
