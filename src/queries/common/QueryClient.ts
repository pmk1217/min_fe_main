import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      useErrorBoundary: false,
      staleTime: 300000,
      cacheTime: Infinity,
    },
    mutations: {
      retry: 0,
      useErrorBoundary: false,
    },
  },
});
