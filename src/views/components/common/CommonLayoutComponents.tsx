import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

//NOTE: 복잡한 레이아웃이 아닌 2차원 정렬Box로 사용
export const CenterBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const AlignCenter = styled(Box)({
  display: 'flex',
  alignItems: 'center',
});

export const JustifyCenter = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
});

export const FlexBox = styled(Box)({
  display: 'flex',
});

//NOTE: react-router-dom
export const InitLink = styled(Link)({
  color: '#000',
  position: 'relative',
  display: 'flex',
  textDecoration: 'none',
  height: '100%',
});

export const FullHeight = styled(Box)({
  width: '100%',
  paddingTop: '40px', // 240126 디자인변경으로 인한 수정 60px -> 40px
  background: '#fff',
  minHeight: 'calc(100vh - 100px)',
  paddingLeft: '60px',
  paddingRight: '60px',
  paddingBottom: '130px',
});

export const SubFullHeight = styled(FullHeight)({
  // S: 2024-04-16 수정
  paddingLeft: '0',
  paddingRight: '0',
  paddingTop: '40px', //NOTE: 브라우저 상태창 높이로 수정 60px -> 50px
  paddingBottom: '60px', //NOTE: 브라우저 스크롤 생성 변수 130px -> 60px
  maxWidth: '1200px',
  margin: '0 auto',
  // E: 2024-04-16 수정
});

export const BlurBox = styled(Box)({
  backdropFilter: 'blur(45px)',
  background: 'rgba(85, 85, 85, 0.04)',
  border: '1px solid rgba(255, 255, 255, 0.15)',
  borderRadius: '10px',
  flex: '1',
});
