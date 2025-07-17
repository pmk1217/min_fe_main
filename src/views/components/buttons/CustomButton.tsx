// 2024-12-12 전체덮어쓰기
import { Button, ButtonProps, Theme, useTheme } from '@mui/material';
import styled, { CSSObject } from '@emotion/styled';
import { ReactNode } from 'react';

interface CustomButtonProps extends ButtonProps {
  children?: ReactNode;
  btnsize?: 'xlg' | 'lg' | 'lgm' | 'md' | 'sm' | 'ssm';
  btntype?: 'primary' | 'primaryOutlined' | 'secondary' | 'outlined' | 'whiteOutlined' | 'redOutlined' | 'tertiary';
  gap?: number;
  radius?: number;
  between?: boolean;
  btncolor?: string;
  sx?: CSSObject;
}

const CustomButton = (props: CustomButtonProps) => {
  const { children, btntype = 'primary', btnsize = 'md', gap, radius, between, btncolor, sx, ...buttonProps } = props;
  const theme = useTheme();
  return (
    <CustomMuiButton
      {...buttonProps}
      btntype={btntype}
      btncolor={btncolor}
      btnsize={btnsize}
      gap={gap}
      radius={radius}
      between={between ? 1 : 0}
      theme={theme}
      sx={sx}
    >
      {children}
    </CustomMuiButton>
  );
};

const CustomMuiButton = styled(Button)<{
  theme: Theme;
  btntype?: string;
  btnsize?: string;
  gap?: number;
  radius?: number;
  between?: number;
  btncolor?: string;
}>((props) => {
  const buttonStyles: Record<string, CSSObject> = {
    xlg: {
      minWidth: '240px',
      fontSize: 16,
      height: '52px',
    },
    lg: {
      minWidth: '240px',
      fontSize: 16,
      height: '40px',
    },
    lgm: {
      minWidth: '200px',
      height: '40px',
    },
    md: {
      minWidth: '160px',
      height: '40px',
    },
    sm: {
      minWidth: '110px',
      height: '38px',
    },
    ssm: {
      minWidth: '57px',
      height: '24px',
      borderRadius: props.radius ?? '2px',
      fontSize: 12,
    },
    primary: {
      backgroundColor: props.theme.palette.secondary.main,
      '&:hover': {
        background: props.theme.palette.secondary.dark,
        boxShadow: 'none',
      },
      '&.disabled': {
        opacity: '0.3',
        border: 'none',
      },
    },
    primaryOutlined: {
      backgroundColor: '#fff',
      border: '1px solid',
      borderColor: props.theme.palette.secondary.main,
      color: props.theme.palette.secondary.main,
      '&:hover': {
        // background: '#FFF7F7',
      },
      '&:disabled': {
        opacity: '0.3',
        border: 'none',
      },
    },
    outlined: {
      backgroundColor: '#fff',
      border: '1px solid',
      borderColor: props.theme.palette.grey[700],
      color: props.theme.palette.grey[700],
      '&:hover': {
        background: '#f7f7f7',
      },
      '&.disabled': {
        opacity: '0.3',
        border: 'none',
      },
    },
    // 나머지 btntype 스타일도 추가
  };

  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: props.between === 1 ? 'space-between' : undefined,
    gap: props.gap ?? 6,
    borderRadius: props.radius ?? '4px',
    textTransform: 'none',
    color: '#fff',
    fontSize: '15px',
    fontWeight: 500,
    padding: '0 10px',
    ...(props.btntype ? buttonStyles[props.btntype] : {}),
    ...(props.btnsize ? buttonStyles[props.btnsize] : {}),
  };
});

export default CustomButton;
