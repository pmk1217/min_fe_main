import { CSSObject } from '@emotion/react';
import { styled, Tooltip, Typography } from '@mui/material';
import { useEffect, useRef, useState } from 'react';

export const TabelCellTooltip = ({
  children,
  sx,
  followCursorOff,
  onClick,
  isTop,
  isSelect,
}: {
  children: string | React.ReactNode;
  sx?: CSSObject;
  followCursorOff?: boolean;
  onClick?: () => void;
  isTop?: boolean;
  isSelect?: boolean;
}) => {
  const textRef = useRef<HTMLDivElement>(null);
  const [showTooltip, setShowTooltip] = useState<boolean>(false);

  useEffect(() => {
    //일단 30자 기준으로 tooltip 표시
    const checkOverflow = () => {
      if (typeof children === 'string' && children.length > 30) {
        setShowTooltip(true);
      } else {
        setShowTooltip(false);
      }
      //   if (textRef.current) {
      //     setTimeout(() => {
      //       const isOverflowing = textRef.current.nodeValue.length > 32;
      //       setShowTooltip(isOverflowing);
      //     }, 0);
      //   }
    };

    checkOverflow();
    window.addEventListener('resize', checkOverflow);

    return () => window.removeEventListener('resize', checkOverflow);
  }, [children]);

  return (
    <>
      <Tooltip
        followCursor={followCursorOff ? false : true}
        title={
          showTooltip ? (
            <Typography sx={{ padding: '10px', color: '#000', maxWidth: '400px', whiteSpace: 'break-spaces' }}>{children}</Typography>
          ) : null
        }
        placement={isTop ? 'top' : 'bottom'}
        sx={{ maxWidth: '200px', whiteSpace: 'break-spaces' }}
      >
        <DialogDataGridTypo
          ref={textRef}
          sx={{
            ...sx,
            cursor: onClick || isSelect ? 'pointer' : 'default',
          }}
          onClick={onClick}
        >
          {children}
        </DialogDataGridTypo>
      </Tooltip>
    </>
  );
};

// S : 2024-12-17 수정
const DialogDataGridTypo = styled(Typography)(() => ({
  color: '#444',
  width: '100%',
  fontSize: '13px',
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  WebkitLineClamp: 2,
  whiteSpace: 'normal',
  verticalAlign: 'middle',
}));
// E : 2024-12-17 수정
