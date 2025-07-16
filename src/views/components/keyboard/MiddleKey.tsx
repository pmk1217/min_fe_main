import { Box, Typography } from '@mui/material';
import React from 'react';

interface KeyCapProps {
  label: string;
  width?: number;
}

const MiddleKey = ({ label, width = 120 }: KeyCapProps) => {
  const height = 60; // 고정 높이
  const centerX = width / 2;
  const centerY = height * 0.44; // 내부 박스 기준 y중앙
  const innerWidth = width * 0.87;
  const innerHeight = height * 0.75;

  return (
    <Box
      sx={{
        position: 'relative',
        width: width,
        height: height,
        borderRadius: '7px',
        background: 'linear-gradient(to bottom, #f5f5f5, #d0d0d0)',
        boxShadow: 'inset 0 0 0 2px #aaa',
      }}
    >
      {/* 꼭짓점 선 */}
      <svg width={width} height={height} style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}>
        {/* ↘ */}
        <line x1={centerX - innerWidth / 2.2} y1={centerY - innerHeight / 2.2} x2={2} y2={2} stroke="#888" strokeWidth={2} />
        {/* ↙ */}
        <line x1={centerX + innerWidth / 2.6} y1={centerY - innerHeight / 2.6} x2={width - 2} y2={2} stroke="#888" strokeWidth={2} />
        {/* ↖ */}
        <line
          x1={centerX + innerWidth / 2.2}
          y1={centerY + innerHeight / 2.6}
          x2={width - 2}
          y2={height - 2}
          stroke="#888"
          strokeWidth={2}
        />
        {/* ↗ */}
        <line x1={centerX - innerWidth / 2.2} y1={centerY + innerHeight / 2.6} x2={2} y2={height - 2} stroke="#888" strokeWidth={2} />
      </svg>

      {/* 내부 박스 */}
      <Box
        sx={{
          width: innerWidth,
          height: innerHeight,
          borderRadius: '6px',
          background: 'linear-gradient(to bottom, #fcfcfc, #eeeeee)',
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
        }}
      >
        <Typography fontWeight="bold" fontSize={height / 4}>
          {label}
        </Typography>
      </Box>
    </Box>
  );
};

export default MiddleKey;
