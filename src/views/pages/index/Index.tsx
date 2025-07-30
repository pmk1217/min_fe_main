import React from 'react';
import Timer from './component/Timer';
import TodayNote from './component/TodayNote';
import CustomBox from '../../components/customBox/CustomBox';
import { Box } from '@mui/material';
import ShortcutKey from './component/ShortcutKey';
import StereotypingCode from './component/StereotypingCode';

const Index = () => {
  return (
    <>
      <Box sx={{ display: 'flex', gap: '10px' }}>
        <CustomBox title="근무 시간" width={'330px'}>
          <Timer />
        </CustomBox>
        <CustomBox title="오늘의 할 일" width={'510px'}>
          <TodayNote />
        </CustomBox>
        <CustomBox title="단축키 정리" width={'500px'}>
          <ShortcutKey />
        </CustomBox>
      </Box>
      <Box sx={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
        <CustomBox title="정형화 코드" width={'300px'}>
          <StereotypingCode />
        </CustomBox>
      </Box>
    </>
  );
};

export default Index;
