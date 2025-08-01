// 2024-12-10 추가
import { Box, styled, Theme, Typography, useTheme } from '@mui/material';
import React from 'react';
import { AlignCenter, FlexBox } from '../CommonLayoutComponents';
import LNBMenu from './LNBMenu';
import { useNavigate } from 'react-router-dom';
import ShortKey from '../keyboard/ShortKey';
import MiddleKey from '../keyboard/MiddleKey';
import { useDialogStore } from '../../../stores/common/DialogStore';
import CustomButton from '../buttons/CustomButton';

const LNB = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { shortcutKeyDialog } = useDialogStore();

  const handleClickShortCutKey = () => {
    shortcutKeyDialog.actions.setIsOpen(true);
  };

  return (
    <LNBContainer theme={theme}>
      <FlexBox sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography
          variant="h3"
          fontWeight={600}
          onClick={() => navigate('/')}
          sx={{
            '&:hover': {
              cursor: 'pointer',
            },
            color: theme.palette.primary.main,
            fontSize: '22px',
            paddingLeft: '20px',
          }}
        >
          MIN
        </Typography>
        <Box onClick={handleClickShortCutKey}>
          <ShortKey label="단축키" size={50} />
        </Box>
      </FlexBox>
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
