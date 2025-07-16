import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { throttle } from '../../utils/Throttle';

//페이지 이동 시 scroll 위치 최상단으로 돌려주는 module
const ScrollToTop = () => {
  const location = useLocation();
  const scrollPositions = useRef({});
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    if (scrollPositions.current[location.key] !== undefined) {
      setTimeout(() => window.scrollTo(0, scrollPositions.current[location.key]), 0);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  useEffect(() => {
    scrollPositions.current[location.key] = scrollY;
  }, [scrollY]);

  useEffect(() => {
    window.addEventListener(
      'scroll',
      throttle(() => setScrollY(window.scrollY), 100),
    );
  }, []);

  return null;
};

export default ScrollToTop;
