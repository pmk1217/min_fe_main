import { Box, SvgIcon, Typography } from '@mui/material';
import React from 'react';
import IconMessage from '../../../assets/images/icons/ic_message.svg?react';
import { FlexBox } from '../../components/CommonLayoutComponents';

const CSSTest = () => {
  return (
    <>
      <FlexBox
        sx={{
          gap: '5px',
          backgroundColor: 'skyblue',
          height: '100px',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '10px',
        }}
      >
        <Typography variant="h4">center</Typography>
        <Box>center</Box>
        <Typography variant="h2">center</Typography>
        <SvgIcon className="menu-icon" component={IconMessage} inheritViewBox sx={styles.messageIcon} />
      </FlexBox>
      <FlexBox
        sx={{
          gap: '5px',
          backgroundColor: 'skyblue',
          alignItems: 'flex-start',
          height: '100px',
          justifyContent: 'flex-start',
          marginBottom: '10px',
        }}
      >
        <Typography variant="h4">start</Typography>
        <Box>start</Box>
        <Typography variant="h1">start</Typography>
        <SvgIcon className="menu-icon" component={IconMessage} inheritViewBox sx={styles.messageIcon} />
      </FlexBox>
      <FlexBox sx={{ gap: '5px', backgroundColor: 'skyblue', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
        <Typography variant="h4">between</Typography>
        <Box>between</Box>
        <Typography variant="h1">between</Typography>
        <SvgIcon className="menu-icon" component={IconMessage} inheritViewBox sx={styles.messageIcon} />
      </FlexBox>
    </>
  );
};

export default CSSTest;

const styles = {
  messageIcon: {
    fontSize: '30px',
    fill: 'none',
    transition:
      'stroke 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    '& *': {
      stroke: '#77787B',
      transition:
        'stroke 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    },
  },
};
