import { Outlet, useLocation } from 'react-router-dom';
import { Box, Theme, useTheme } from '@mui/material';
import styled from '@emotion/styled';
import LNB from '../components/LNB/LNB';
// 2024-12-10 전체덮어쓰기
const CommonLayout = () => {
  const location = useLocation();
  const theme = useTheme();

  return (
    <MainContainer>
      <LNB />
      <IndexContainer theme={theme}>
        <Outlet />
      </IndexContainer>
    </MainContainer>
  );
};

export const MainContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isBackground',
})((props: { isBackground?: boolean }) => ({
  // S : 2024-12-10 변경
  width: '100%',
  fontFamily: 'Noto Sans KR',
  fontWeight: '400',
  backgroundSize: '100%',
  lineHeight: 'normal',
  padding: '20px 88px 20px 20%',
  background: '#F8F4F5',
  height: '100vh',
  minWidth: '1080px',
  // maxHeight: '858px',

  // E : 2024-12-10 변경
}));

const IndexContainer = styled(Box)((props: { theme: Theme }) => {
  return {
    background: '#fff',
    height: '100%',
    borderRadius: '10px',
    padding: '40px 40px',
    minWidth: '1280px',
    minHeight: '820px',
    '@media (min-height: 1000px)': {
      padding: '40px 80px',
    },
  };
});

export default CommonLayout;
