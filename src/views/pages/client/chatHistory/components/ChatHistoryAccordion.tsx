// 2024-12-16 추가
import { Accordion, AccordionDetails, AccordionSummary, Box, Collapse, styled, SvgIcon, Typography } from '@mui/material';
import ExpandMoreIcon from '../../../../../assets/images/icons/ic_expand.svg?react';
import TutorIcon from '../../../../../assets/images/icons/ic_tutor.svg?react';
import CalenderIcon from '../../../../../assets/images/icons/ic_calender_history.svg?react';
import UserIcon from '../../../../../assets/images/icons/ic_user.svg?react';
import ScoreIcon from '../../../../../assets/images/icons/ic_score.svg?react';
import React, { useState } from 'react';
import { AlignCenter, FlexBox } from '../../../../components/CommonLayoutComponents';

//퍼블용,실제 model을 model파일에 정의해주세요
interface ChatHistoryModel {
  question: string;
  answer: string;
  feedback: string;
  historyDttm: string;
  score: number;
}

interface ChatHistoryAccordionProps {
  data: ChatHistoryModel[];
}

const ChatHistoryAccordion = (props: ChatHistoryAccordionProps) => {
  const [expandedIndex, setExpandedIndex] = useState<number>(0);

  const handleExpandAccordion = (index: number) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };
  return (
    <ScrollBox>
      {props.data &&
        props.data.map((item, index) => (
          <Accordion key={index} expanded={expandedIndex === index} onChange={() => handleExpandAccordion(index)} disableGutters>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`panel${index}-content`} id={`panel${index}-header`}>
              <FlexBox sx={{ alignItems: 'flex-start', gap: '10px' }}>
                <IndexTypo>{index + 1}</IndexTypo>
                <Box>
                  {/* tutor 질문 */}
                  <FlexBox sx={{ gap: '7px', marginBottom: '16px' }}>
                    <SvgIcon component={TutorIcon} sx={{ fill: 'none', fontSize: '20px' }} inheritViewBox />
                    <Typography>{item.question}</Typography>
                  </FlexBox>
                  <Collapse in={expandedIndex === index} timeout="auto" unmountOnExit>
                    <FlexBox sx={{ gap: '7px', marginBottom: '16px' }}>
                      <SvgIcon component={UserIcon} sx={{ fill: 'none', fontSize: '20px' }} inheritViewBox />
                      <Typography>{item.answer}</Typography>
                    </FlexBox>
                    <FlexBox sx={{ gap: '7px', marginBottom: '16px' }}>
                      <SvgIcon component={TutorIcon} sx={{ fill: 'none', fontSize: '20px' }} inheritViewBox />
                      <Typography>{item.feedback}</Typography>
                    </FlexBox>
                  </Collapse>
                  <AlignCenter sx={{ gap: '10px' }}>
                    <AlignCenter sx={{ gap: '7px' }}>
                      <SvgIcon component={CalenderIcon} sx={{ fill: 'none', fontSize: '20px' }} inheritViewBox />
                      <Typography>{item.historyDttm}</Typography>
                    </AlignCenter>
                    <AlignCenter sx={{ gap: '7px' }}>
                      <SvgIcon component={ScoreIcon} sx={{ fill: 'none', fontSize: '20px' }} inheritViewBox />
                      <Typography>평가 점수 : {item.score}점</Typography>
                    </AlignCenter>
                  </AlignCenter>
                </Box>
              </FlexBox>
            </AccordionSummary>
          </Accordion>
        ))}
    </ScrollBox>
  );
};

const ScrollBox = styled(Box)({
  width: '100%',
  height: '450px',
  overflowY: 'auto',
  overflowX: 'hidden',
  '@media (min-height: 1000px)': {
    height: '600px',
  },
  '&::-webkit-scrollbar-track': {
    background: 'transparent', // 트랙의 배경을 투명하게 설정
  },
  '& .MuiAccordion-root.MuiAccordion-rounded': {
    padding: '0 10px',
    border: '1px solid #eaeaea',
    marginBottom: '10px',
    borderRadius: '5px',
    '&::before': {
      display: 'none',
    },
  },
  '& .MuiAccordionSummary-content p': {
    fontSize: '13px',
  },
});

const IndexTypo = styled(Typography)({
  background: '#4E4E4E',
  color: '#fff',
  borderRadius: '50%',
  padding: '1.5px 6px',
  //   position: 'absolute',
});

export default ChatHistoryAccordion;
