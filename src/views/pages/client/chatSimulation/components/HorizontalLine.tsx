// 2024-12-12 추가
import { Box, colors, Divider, styled } from '@mui/material';
import React from 'react';

const HorizontalLine = () => {
  return (
    <DividerContainer>
      <Divider>다음 질문</Divider>
    </DividerContainer>
  );
};

const DividerContainer = styled(Box)({
  margin: '10px 0',
  '& span': {
    fontSize: '14px',
    color: '#555',
  },
});

export default HorizontalLine;
