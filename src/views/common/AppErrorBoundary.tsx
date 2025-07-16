import { ErrorInfo, Suspense, useState } from 'react';
import { PropsWithChildren } from 'react';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';
import AccessDenied from '../fallback/AccessDenied';
import PageError from '../fallback/PageError';

const AppErrorBoundary = (props: PropsWithChildren) => {
  //TODO:build 임시 수정
  const logError = (error: Error, info: ErrorInfo) => {
    console.error('error name : %s', error.name);
    console.error('error message : %s', error.message);
    console.error('error stack : %s', error.stack);
    console.error('info component stack : %s', info.componentStack);
  };

  const fallbackRender = (fallbackProps) => {
    const errorCode: number = fallbackProps.error.response?.status;
    // 포탈 최초 접속 시 권한이 아예 없는 경우
    // S : 2024-12-17 변경
    return <>{errorCode == 403 ? <AccessDenied /> : <PageError />}</>;
    // E : 2024-12-17 변경
  };

  return (
    <ReactErrorBoundary onError={logError} fallbackRender={(fallbackProps) => fallbackRender(fallbackProps)}>
      {/*<ReactErrorBoundary onError={logError} fallback={<div>폴백</div>}>*/}
      {props.children}
    </ReactErrorBoundary>
  );
};
export default AppErrorBoundary;
