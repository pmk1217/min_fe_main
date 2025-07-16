// 2024-12-16 추가
import HighchartsReact from 'highcharts-react-official';
import React from 'react';
import Highcharts from 'highcharts';

interface PieChartProps {
  chartName: string;
  data: { name: string; y: number }[];
  title?: string;
  chartHeight?: number;
}

const SimplePieChart = (props: PieChartProps) => {
  const options = {
    chart: {
      type: 'pie',
      height: props.chartHeight ?? 400,
    },
    title: {
      text: props.title ?? null,
    },
    series: [
      {
        name: props.chartName,
        data: props.data,
        colorByPoint: true,
        showInLegend: true,
        dataLabels: {
          enabled: false, // 데이터 레이블 비활성화
        },
      },
    ],
    credits: {
      enabled: false,
    },
    legend: {
      enabled: true, // 범례 활성화
      align: 'right', // 범례를 우측에 정렬
      verticalAlign: 'middle', // 범례를 세로로 가운데 정렬
      layout: 'vertical', // 범례를 세로 방향으로 나열
    },
    colors: ['#F2B3BF', '#E9A48B', '#A1C8E8', '#85BE48', '#FFFFFF'],
  };
  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default SimplePieChart;
