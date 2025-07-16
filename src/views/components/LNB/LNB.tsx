// 2024-12-10 추가
import { Box, styled, Theme, Typography, useTheme } from '@mui/material';
import React from 'react';
import { AlignCenter } from '../CommonLayoutComponents';
import LNBMenu from './LNBMenu';

const LNB = () => {
  const theme = useTheme();
  return (
    <LNBContainer theme={theme}>
      <Typography variant="h3" fontWeight={600}>
        개인사이트
      </Typography>
      {/* <AlignCenter sx={{ pl: 2 }}>
        <GreenSpot />
        <Typography sx={styles.loginText}>
          <Box component="span">김엘지</Box>님 접속중
        </Typography>
      </AlignCenter> */}
      <LNBMenu />
    </LNBContainer>
  );
};

const LNBContainer = styled(Box)((props: { theme: Theme }) => {
  return {
    width: '20%',
    position: 'absolute',
    left: 0,
    top: 0,
    margin: '31px 0',
    padding: '10px 50px',
    '@media (max-width: 1600px)': {
      padding: '10px 30px',
    },

    '& > h3': {
      color: props.theme.palette.primary.main,
      fontSize: '22px',
      marginBottom: '10px',
      paddingLeft: '20px',
      //   textAlign: 'center',
    },
  };
});

const GreenSpot = styled(Box)({
  width: '10px',
  height: '10px',
  borderRadius: '50%',
  background: '#37C75D',
  marginRight: '10px',
});

const styles = {
  loginText: {
    fontSize: '14px',
    fontWeight: 500,
  },
};

export default LNB;
