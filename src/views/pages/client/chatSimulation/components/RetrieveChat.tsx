// 2024-12-11 추가
import React from 'react';
import ImgRobot from '../../../../../assets/images/img-retrieve-chat.svg?react';
import { AlignCenter, CenterBox } from '../../../../components/CommonLayoutComponents';
import { Box, styled, SvgIcon, Typography } from '@mui/material';
import CustomButton from '../../../../components/buttons/CustomButton';

const RetrieveChat = () => {
  return (
    <CenterBox sx={{ height: '100%', flexDirection: 'column' }}>
      <SvgIcon component={ImgRobot} inheritViewBox sx={{ fontSize: '200px' }} />
      <TypoContainer>
        <Typography>종료되지 않은 면담 이력이 있습니다.</Typography>
        <Typography>
          이어서 진행하려면 <Box component={'span'}>'면담 이어하기'</Box>버튼을,
        </Typography>
        <Typography>
          처음부터 다시 진행하려면 <Box component={'span'}>'처음부터 시작하기'</Box>버튼을 눌러주세요
        </Typography>
      </TypoContainer>
      <AlignCenter gap={'10px'} mt={4} mb={4}>
        <CustomButton>면담 이어하기</CustomButton>
        <CustomButton btntype="primaryOutlined">처음부터 시작하기</CustomButton>
      </AlignCenter>
    </CenterBox>
  );
};

const TypoContainer = styled(Box)({
  marginTop: '30px',
  textAlign: 'center',
  '& p': {
    fontSize: '20px',
    lineHeight: '150%',
    fontWeight: '400',
    '& > span': {
      color: '#992729',
    },
    '&:last-of-type > span': {
      color: '#B27071',
    },
  },
});

export default RetrieveChat;
