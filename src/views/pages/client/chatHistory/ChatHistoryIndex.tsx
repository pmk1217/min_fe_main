// 2024-12-16 전체 덮어쓰기
import { Box, styled, Typography } from '@mui/material';
import React, { useState } from 'react';
import { AlignCenter, FlexBox } from '../../../components/CommonLayoutComponents';
import ChatHistoryTable from './components/ChatHistoryTable';
import SimpleBarChart from '../../../components/charts/SimpleBarChart';
import SimplePieChart from '../../../components/charts/SimplePieChart';
import SimpleLineChart from '../../../components/charts/SimpleLineChart';
import ChatHistoryAccordion from './components/ChatHistoryAccordion';

//퍼블용,실제 model을 model파일에 정의해주세요
interface ChatHistoryModel {
  question: string;
  answer: string;
  feedback: string;
  historyDttm: string;
  score: number;
}

const chatHistoryMock: ChatHistoryModel[] = [
  {
    question: '2023년도 자체감사 중 기억나는 것을 말씀해보세요.',
    answer: '후단 차단밸브의 시건장치 설치가 누락되어 조치를 취한적이 있습니다.',
    feedback:
      '튜터로서, 답변 내용을 평가해 드리겠습니다. 자체감사 목록에 있는 사례를 잘 말씀해주셨습니다. SV-5236 후단 차단밸브의 시건장치(CSO 또는 LO) 설치가 누락된 사례를 정확하게 기억하고 있으며, 핵심 키워드도 모두 포함한 좋은 답변이라고 평가합니다. ',
    historyDttm: '2024.04.22 16:21',
    score: 80,
  },
  {
    question: '중대 산업 사고란 무엇인가요?',
    answer: '후단 차단밸브의 시건장치 설치가 누락되어 조치를 취한적이 있습니다.',
    feedback:
      '튜터로서, 답변 내용을 평가해 드리겠습니다. 자체감사 목록에 있는 사례를 잘 말씀해주셨습니다. SV-5236 후단 차단밸브의 시건장치(CSO 또는 LO) 설치가 누락된 사례를 정확하게 기억하고 있으며, 핵심 키워드도 모두 포함한 좋은 답변이라고 평가합니다. ',
    historyDttm: '2024.04.22 16:21',
    score: 80,
  },
  {
    question: '2025년도 달성목표를 말씀해보세요.',
    answer: '후단 차단밸브의 시건장치 설치가 누락되어 조치를 취한적이 있습니다.',
    feedback:
      '튜터로서, 답변 내용을 평가해 드리겠습니다. 자체감사 목록에 있는 사례를 잘 말씀해주셨습니다. SV-5236 후단 차단밸브의 시건장치(CSO 또는 LO) 설치가 누락된 사례를 정확하게 기억하고 있으며, 핵심 키워드도 모두 포함한 좋은 답변이라고 평가합니다. ',
    historyDttm: '2024.04.22 16:21',
    score: 80,
  },
  {
    question: '2024년도 실적에 대해 어떻게 생각하시나요?',
    answer: '굿',
    feedback:
      '튜터로서, 답변 내용을 평가해 드리겠습니다. 자체감사 목록에 있는 사례를 잘 말씀해주셨습니다. SV-5236 후단 차단밸브의 시건장치(CSO 또는 LO) 설치가 누락된 사례를 정확하게 기억하고 있으며, 핵심 키워드도 모두 포함한 좋은 답변이라고 평가합니다. ',
    historyDttm: '2024.04.22 16:21',
    score: 80,
  },
  {
    question: '2023년도 자체감사 중 기억나는 것을 말씀해보세요.',
    answer: '후단 차단밸브의 시건장치 설치가 누락되어 조치를 취한적이 있습니다.',
    feedback:
      '튜터로서, 답변 내용을 평가해 드리겠습니다. 자체감사 목록에 있는 사례를 잘 말씀해주셨습니다. SV-5236 후단 차단밸브의 시건장치(CSO 또는 LO) 설치가 누락된 사례를 정확하게 기억하고 있으며, 핵심 키워드도 모두 포함한 좋은 답변이라고 평가합니다. ',
    historyDttm: '2024.04.22 16:21',
    score: 80,
  },
  {
    question: '2023년도 자체감사 중 기억나는 것을 말씀해보세요.',
    answer: '후단 차단밸브의 시건장치 설치가 누락되어 조치를 취한적이 있습니다.',
    feedback:
      '튜터로서, 답변 내용을 평가해 드리겠습니다. 자체감사 목록에 있는 사례를 잘 말씀해주셨습니다. SV-5236 후단 차단밸브의 시건장치(CSO 또는 LO) 설치가 누락된 사례를 정확하게 기억하고 있으며, 핵심 키워드도 모두 포함한 좋은 답변이라고 평가합니다. ',
    historyDttm: '2024.04.22 16:21',
    score: 80,
  },
  {
    question: '2023년도 자체감사 중 기억나는 것을 말씀해보세요.',
    answer: '후단 차단밸브의 시건장치 설치가 누락되어 조치를 취한적이 있습니다.',
    feedback:
      '튜터로서, 답변 내용을 평가해 드리겠습니다. 자체감사 목록에 있는 사례를 잘 말씀해주셨습니다. SV-5236 후단 차단밸브의 시건장치(CSO 또는 LO) 설치가 누락된 사례를 정확하게 기억하고 있으며, 핵심 키워드도 모두 포함한 좋은 답변이라고 평가합니다. ',
    historyDttm: '2024.04.22 16:21',
    score: 80,
  },
];
const ChatHistoryIndex = () => {
  return (
    <>
      {/*S : 2024-12-16 변경 */}
      <Typography variant="h3" sx={{ fontWeight: 500 }}>
        면담 이력 확인 🔎
      </Typography>
      {/*E : 2024-12-16 변경 */}
      <ChatInfoContainer>
        <Box>
          <Box>
            <Typography variant="h5">
              <Box component={'span'}></Box>전체 면담 정보
            </Typography>
            <ChatStatContainer>
              <AlignCenter>
                <Typography>총 면담 횟수</Typography>
                <Typography>20회</Typography>
              </AlignCenter>
              <AlignCenter>
                <Typography>총 지식 질문 건수</Typography>
                <Typography>160건</Typography>
              </AlignCenter>
              <AlignCenter>
                <Typography>총 경험 질문 건수</Typography>
                <Typography>40건</Typography>
              </AlignCenter>
            </ChatStatContainer>
          </Box>

          <Box mt={3}>
            <Typography variant="h5">
              <Box component={'span'}></Box>이력 확인
            </Typography>
            {/* <SubText>지금까지의 면담 이력을 확인할 수 있습니다.</SubText> */}
            <ChatHistoryTable />
          </Box>
          <AlignCenter sx={{ gap: '10px', marginTop: '30px' }}>
            <ChartContainer>
              <Typography variant="h5" mb={2}>
                <Box component={'span'}></Box>질문 유형
              </Typography>
              <SimpleBarChart
                xAxisLabel={['유형 A', '유형 B']}
                series={[{ name: '질문 유형', data: [6, 10] }]}
                isLegendEnabled={false}
                chartHeight={240}
                yAxisInterval={2}
                barWidth={30}
                colors={['#84B2D7', '#E9A48B']}
              />
            </ChartContainer>
            <ChartContainer>
              <Typography variant="h5" mb={2}>
                <Box component={'span'}></Box>지식질문 점수 분포도
              </Typography>
              <PieChartContainer>
                <SimplePieChart
                  chartName="점수 분포도"
                  chartHeight={220}
                  data={[
                    { name: '60점대', y: 50 },
                    { name: '70점대', y: 30 },
                    { name: '80점대', y: 20 },
                    { name: '90점대', y: 10 },
                  ]}
                />
              </PieChartContainer>
            </ChartContainer>
          </AlignCenter>
        </Box>
        <Box>
          <Box>
            <Typography variant="h5">
              <Box component={'span'}></Box>일별 지식질문 평균 점수 그래프
            </Typography>
            <Box mt={2}>
              <SimpleLineChart
                chartHeight={200}
                xAxisLabel={['24-12-09', '24-12-10', '24-12-11', '24-12-12', '24-12-13']}
                series={[{ name: '평균 점수', data: [10, 90, 80, 70, 100] }]}
                isLegendEnabled={false}
                yAxisInterval={20}
                yAxisMax={100}
                yAxisMin={0}
              />
            </Box>
          </Box>
          <Box mt={3}>
            <Typography variant="h5" mb={2}>
              <Box component={'span'}></Box>최신 면담 완료 목록
            </Typography>
            <ChatHistoryAccordion data={chatHistoryMock} />
          </Box>
        </Box>
      </ChatInfoContainer>
    </>
  );
};

const ChatInfoContainer = styled(FlexBox)({
  width: '100%',
  marginTop: '16px',
  justifyContent: 'space-between',
  gap: '30px',
  height: 'calc(100% - 55px)',
  '@media (min-height: 945px)': {
    padding: '30px 0',
    marginTop: '20px',
    height: 'calc(100vh - 150px)',
    justifyContent: 'center',
  },
  '& > div': {
    width: 'calc(50% - 15px)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    '& h5': {
      fontSize: '16px',
      '& span': {
        content: '""',
        display: 'inline-block',
        width: '4px',
        height: '19px',
        verticalAlign: 'sub',
        background: '#B27071',
        marginRight: '4px',
      },
    },
  },
});

const ChatStatContainer = styled(FlexBox)({
  marginTop: '20px',
  flexDirection: 'column',
  gap: '10px',
  width: '100%',
  ' > div': {
    padding: '8px 20px',
    width: '70%',
    justifyContent: 'space-between',
    border: '1px solid #EAEAEA',
    borderRadius: '5px',
    '@media (min-height: 1000px)': {
      padding: '10px 20px',
    },
    '& .MuiTypography-root': {
      fontSize: '14px',
    },
  },
  '> div:first-of-type': {
    color: '#249041',
  },
});

const SubText = styled(Typography)({
  color: '#8A8A8A',
  fontSize: '14px',
  fontWeight: '300',
  marginTop: '6px',
});

const ChartContainer = styled(Box)({
  width: '50%',
});

const PieChartContainer = styled(Box)({
  padding: '10px',
  // border: '1px solid #EAEAEA',
  borderRadius: '5px',
});

export default ChatHistoryIndex;
