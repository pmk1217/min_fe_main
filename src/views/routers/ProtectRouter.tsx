import { PropsWithChildren, useEffect } from 'react';
import { getCookie, removeCookie, setCookie } from '../../utils/CookieUtils.ts';
import { Navigate, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
// import { jwtKey, ssoUrl, viteMode } from '../../models/CommonModel.ts;

const ProtectRouter = (props: PropsWithChildren) => {
  // S : EAP SSO 소스, 필요시 참고하세요
  // const navigate = useNavigate();
  // const location = useLocation();
  // const [searchParams] = useSearchParams();

  // const SsoJwt = searchParams.get(jwtKey.SSO_ACCESS);
  // const refreshJwt = searchParams.get(jwtKey.SSO_REFRESH);
  // const activeMode = import.meta.env.MODE;

  // useEffect(() => {
  //   if (!SsoJwt && !getCookie(jwtKey.ACCESS)) {
  //     removeCookie('isLogin');
  //     removeCookie('isAdmin');
  //     removeCookie('empNo');
  //     if (activeMode == viteMode.LOCAL || activeMode == viteMode.LOCAL_DEV) {
  //       navigate('/login');
  //     } else if (activeMode == viteMode.DEV) {
  //       // MEMO SSO 설정 전까지 백도어 로그인으로 이동
  //       navigate('/login');
  //       // window.location.replace(ssoUrl.DEV);
  //     } else {
  //       window.location.replace(ssoUrl.PROD);
  //     }
  //   }
  // }, []);

  //ofcId, ofcData, sso response 모두 정상이면 jwt 쿠키에 세팅, sso response 오류 시 다시 testsso로 redirect
  // useEffect(() => {
  //   if (SsoJwt) {
  //     if (SsoJwt.length > 0) {
  //       setCookie(jwtKey.ACCESS, SsoJwt);
  //       setCookie(jwtKey.REFRESH, refreshJwt);
  //       window.history.replaceState('', '', '/');
  //     } else {
  //       window.location.replace(activeMode == viteMode.DEV ? ssoUrl.DEV : ssoUrl.PROD);
  //     }
  //   }
  // }, []);

  // const isAuthenticate = SsoJwt || getCookie('isLogin') || getCookie(jwtKey.ACCESS);

  // //sso response 정상이면 화면표출, 오류시 null(임시)
  // // 쿠키에 access 토큰이 없으면 무조건 임시 로그인 페이지로 (SSO 적용 후 변경)
  // return !isAuthenticate && activeMode == viteMode.DEV ? (
  //   <Navigate replace to="/login" />
  // ) : !isAuthenticate && activeMode == viteMode.PROD ? (
  //   // MEMO 임시
  //   <>{window.location.replace(ssoUrl.PROD)}</>
  // ) : isAuthenticate ? (
  //   props.children
  // ) : (
  //   <Navigate replace to="/login" />
  // );

  // E : EAP SSO 소스, 필요시 참고하세요

  return props.children;
};

export default ProtectRouter;
