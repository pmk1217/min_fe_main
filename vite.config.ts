import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';

// https://vitejs.dev/config
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    base: './',
    publicDir: 'public',
    plugins: [
      react(),
      svgr({
        svgrOptions: {
          icon: true,
        },
      }),
    ],
    build: {
      rollupOptions: {
        output: {
          // PDF.js worker 파일을 복사할 경로 설정
          entryFileNames: '[name].js',
          chunkFileNames: '[name].js',
          assetFileNames: '[name].[ext]',
        },
      },
    },
    assetsInclude: ['**/*.jpg'],
    server: {
      proxy: {
        //로컬실행시 BE에 proxy할 주소 정보 (알맞게 변경하세용)
        '/api': {
          target: process.env.VITE_EAP_API_SERVER,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
          secure: false,
          ws: true,
        },
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  });
};
