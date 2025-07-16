import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './views/routers/ScrollToTop.tsx';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './queries/common/QueryClient.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ScrollToTop />
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </BrowserRouter>,
);
