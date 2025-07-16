import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

interface LineChartProps {
  title?: string;
  xAxisLabel: string[];
  series: { name: string; data: number[] }[];
  chartHeight?: number;
  isLegendEnabled?: boolean;
  yAxisTitle?: string;
  yAxisInterval?: number;
  yAxisMin?: number;
  yAxisMax?: number;
}

const SimpleLineChart = (props: LineChartProps) => {
  const options = {
    chart: {
      type: 'line',
      height: props.chartHeight ?? 400,
    },
    title: {
      text: props.title ?? null,
    },
    xAxis: {
      categories: props.xAxisLabel,
    },
    yAxis: {
      title: {
        text: props.yAxisTitle ?? null,
      },
      tickInterval: props.yAxisInterval ?? 10,
      min: props.yAxisMin,
      max: props.yAxisMax,
    },
    series: props.series,
    credits: {
      enabled: false,
    },
    legend: {
      enabled: props.isLegendEnabled ?? true,
    },
    colors: ['#249041', '#E9A48B', '#A1C8E8', '#85BE48', '#FFFFFF'],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default SimpleLineChart;
