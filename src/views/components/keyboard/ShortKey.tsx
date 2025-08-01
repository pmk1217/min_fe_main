import { Box, Typography } from '@mui/material';
import React from 'react';

interface keyCapProps {
  label: string;
  size?: number;
}

const ShortKey = (props: keyCapProps) => {
  const size = props.size ? props.size : 60;
  const center = size / 2;
  const innerSize = size * 0.75; // 내부 박스 크기

  return (
    <Box
      sx={{
        position: 'relative',
        width: size,
        height: size,
        borderRadius: '7px',
        background: 'linear-gradient(to bottom, #f5f5f5, #d0d0d0)',
        boxShadow: 'inset 0 0 0 2px #aaa',
      }}
    >
      {/* 꼭짓점 선만 SVG */}
      <svg width={size - 3} height={size - 3} style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}>
        {/* ↘ Top Left → Top Left */}
        <line x1={center - innerSize / 5} y1={center - innerSize / 2.2} x2={3} y2={3} stroke="#888" strokeWidth={2} />
        {/* ↙ Top Right → Top Right */}
        <line x1={center + innerSize / 5} y1={center - innerSize / 2.2} x2={size} y2={1.5} stroke="#888" strokeWidth={2} />
        {/* ↖ Bottom Right → Bottom Right */}
        <line x1={center + innerSize / 2.5} y1={center + innerSize / 3.5} x2={size} y2={size + 1} stroke="#888" strokeWidth={2} />
        {/* ↗ Bottom Left → Bottom Left */}
        <line x1={center - innerSize / 2.5} y1={center + innerSize / 3.5} x2={1} y2={size} stroke="#888" strokeWidth={2} />
      </svg>

      {/* 내부 박스 + 텍스트 */}
      <Box
        sx={{
          width: innerSize,
          height: innerSize,
          borderRadius: '6px',
          background: 'linear-gradient(to bottom, #fcfcfc, #eeeeee)', // 내부 키 밝은 그라데이션
          border: '2px solid #888',
          position: 'absolute',
          top: '44%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: `
            inset 0 -1px 1px #bbb,
            inset 0 1px 0 #fff
          `,
          '&:hover': {
            background: 'linear-gradient(to bottom, #ccc, #ddd)', // 내부 키 밝은 그라데이션
            cursor: 'pointer',
          },
          '&:active': {
            background: 'linear-gradient(to bottom, #acacac, #acacac)', // 내부 키 밝은 그라데이션
          },
        }}
      >
        <Typography fontWeight="bold" fontSize={size / 4}>
          {props.label}
        </Typography>
      </Box>
    </Box>
  );
};

export default ShortKey;
