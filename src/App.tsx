import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { defaultTheme } from './theme/theme';
import AppErrorBoundary from './views/common/AppErrorBoundary';
import ProtectRouter from './views/routers/ProtectRouter';
import { CssBaseline } from '@mui/material';
import CommonLayout from './views/layout/CommonLayout';
import NotFound from './views/fallback/NotFound';
import ClientIndex from './views/pages/client/ClientIndex';
import ChatHistoryIndex from './views/pages/client/chatHistory/ChatHistoryIndex';
// S: 2024-12-11 추가
import './theme/globalCustomCss.css';
import './App.css';
import Dialogs from './views/components/dialogs/Dialogs';
import ChatIndex from './views/pages/client/chatSimulation/ChatIndex';
import UserHistoryIndex from './views/pages/admin/userHistory/UserHistoryIndex';
import UserAuthHistoryIndex from './views/pages/admin/userAuth/UserAuthHistoryIndex';
import AccessDenied from './views/fallback/AccessDenied';
import PageError from './views/fallback/PageError';
import Index from './views/pages/index/Index';
// E: 2024-12-11 추가

function App() {
  //배포환경 변수
  const activeMode = import.meta.env.MODE;
  const location = useLocation();

  //같은 route라도 재렌더링
  useEffect(() => {
    document.oncontextmenu = function () {
      return false;
    };
  }, []);

  return (
    <ThemeProvider theme={defaultTheme}>
      <AppErrorBoundary>
        <ProtectRouter>
          <CssBaseline />
          <Routes key={location.state?.key}>
            <Route element={<CommonLayout />}>
              <Route index element={<Index />} />
              <Route path="chat" element={<ChatIndex />} />
              <Route path="history" element={<ChatHistoryIndex />} />
              <Route path="user-history" element={<UserHistoryIndex />} />
              <Route path="user-auth" element={<UserAuthHistoryIndex />} />
              <Route path="access-denied" element={<AccessDenied />} />
              <Route path="error" element={<PageError />} />
              <Route path={'*'} element={<NotFound />} />
            </Route>
          </Routes>
          <Dialogs />
        </ProtectRouter>
      </AppErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
