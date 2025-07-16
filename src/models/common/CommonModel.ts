// 2024-12-11 폴더링 구조 변경
export enum jwtKey {
  SSO_ACCESS = 'sso_jwt',
  SSO_REFRESH = 'sso_refresh',
  ACCESS = 'accessToken',
  REFRESH = 'refreshToken',
}

export enum viteMode {
  LOCAL = 'eap-local',
  LOCAL_DEV = 'local-dev',
  DEV = 'development',
  PROD = 'production',
}

export enum ssoUrl {
  DEV = 'http://testsso.lge.com',
  PROD = 'http://sso.lge.com',
  // PROD = 'http://sso.lge.com/agentless/seoul/eapAgentless.jsp',
}

export interface DateRange {
  startDate: Date;
  endDate: Date;
}

export interface PaginationModel {
  pageSize: number;
  page: number;
}

export enum SnackbarTypes {
  DEFAULT = 'default',
  WARNING = 'warning',
}