// 2024-12-11 전체덮어쓰기
import React, { useState } from 'react';
import { AlignCenter, CenterBox } from '../../components/CommonLayoutComponents';
import { Box, styled, Theme, Typography, useTheme } from '@mui/material';
import BasicInformation from './chatSimulation/components/BasicInformation';
import CustomButton from '../../components/buttons/CustomButton';
import RetrieveChat from './chatSimulation/components/RetrieveChat';

const ClientIndex = () => {
  const theme = useTheme();

  const [isInitPage, setIsInitPage] = useState<boolean>(true);
  return (
    <>
      {/* S: 퍼블확인용 버튼, 개발시 지워주세요 */}
      <AlignCenter sx={{ position: 'absolute', zIndex: 10 }} gap={'10px'}>
        <CustomButton btntype="outlined" btnsize="ssm" onClick={() => setIsInitPage(true)}>
          첫화면
        </CustomButton>
        <CustomButton btntype="primaryOutlined" btnsize="ssm" onClick={() => setIsInitPage(false)}>
          이어하기화면
        </CustomButton>
      </AlignCenter>
      {/* E: 퍼블확인용 버튼, 개발시 지워주세요 */}
      {isInitPage ? <BasicInformation /> : <RetrieveChat />}
    </>
  );
};

export default ClientIndex;
