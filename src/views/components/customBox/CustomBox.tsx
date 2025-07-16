import { Box, styled, Typography } from '@mui/material';
import React from 'react';

interface CustomBoxProps {
  title: string;
  width?: string | number;
  height?: string | number;
  children?: React.ReactNode;
}

const CustomBox: React.FC<CustomBoxProps> = ({ title, width, height, children }) => {
  return (
    <Box border="1px solid #ddd" borderRadius="10px" padding="13px" width={width ? width : '300px'} height={height ? height : '400px'}>
      <BoxTitle variant="h4">{title}</BoxTitle>
      {children}
    </Box>
  );
};

export default CustomBox;

const BoxTitle = styled(Typography)({
  fontWeight: '600',
  padding: '20px 5px 15px 10px',
});
