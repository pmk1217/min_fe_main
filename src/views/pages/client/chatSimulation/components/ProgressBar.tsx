//2024-12-12 추가
import { Box, LinearProgress, linearProgressClasses, styled, Typography } from '@mui/material';
import React from 'react';
import { AlignCenter } from '../../../../components/CommonLayoutComponents';

const ProgressBar = (props: { value: number }) => {
  return (
    <ProgressBarArea>
      <BorderLinearProgress variant="determinate" value={props.value} />
      <AlignCenter sx={{ justifyContent: 'space-between' }}>
        <Typography>0%</Typography>
        <Typography>100%</Typography>
      </AlignCenter>
    </ProgressBarArea>
  );
};

const ProgressBarArea = styled(Box)({
  position: 'absolute',
  top: '10px',
  width: '100%',
  zIndex: 10,
});

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 13,
  borderRadius: 10,
  marginBottom: 4,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.primary.light,
    ...theme.applyStyles('dark', {
      backgroundColor: theme.palette.grey[800],
    }),
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: '#E0B3B4',
    ...theme.applyStyles('dark', {
      backgroundColor: '#308fe8',
    }),
  },
}));

export default ProgressBar;
