// 2024-12-10 추가
import { Box, Button, styled, SvgIcon, Theme, useTheme } from '@mui/material';
import IconMessage from '../../../assets/images/icons/ic_message.svg?react';
import IconDoc from '../../../assets/images/icons/ic_document.svg?react';
import IconUsers from '../../../assets/images/icons/ic_users.svg?react';
import IconAuth from '../../../assets/images/icons/ic_auth.svg?react';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router';

const LNBMenu = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const handleClickMenu = (pathName: string) => {
    navigate(pathName);
  };

  return (
    <MenuContainer theme={theme}>
      <MenuButton isactive={location.pathname === '/' || location.pathname === '/chat'} onClick={() => handleClickMenu('/')}>
        <SvgIcon className="menu-icon" component={IconMessage} inheritViewBox sx={styles.messageIcon} />
        Home
      </MenuButton>
      <MenuButton isactive={location.pathname === '/test' || location.pathname === '/test'} onClick={() => handleClickMenu('/test')}>
        <SvgIcon className="menu-icon" component={IconMessage} inheritViewBox sx={styles.messageIcon} />
        CSS 공부
      </MenuButton>
      <MenuButton isactive={location.pathname === '/history'} onClick={() => handleClickMenu('/history')}>
        <SvgIcon className="menu-icon" component={IconDoc} inheritViewBox sx={styles.messageIcon} />
        메뉴2
      </MenuButton>
      {/* S: 2024-12-16 추가 */}
      <MenuButton isactive={location.pathname === '/user-history'} onClick={() => handleClickMenu('/user-history')}>
        <SvgIcon className="menu-icon" component={IconUsers} inheritViewBox sx={styles.messageIcon} />
        메뉴3
      </MenuButton>
      <MenuButton isactive={location.pathname === '/user-auth'} onClick={() => handleClickMenu('/user-auth')}>
        <SvgIcon className="menu-icon" component={IconAuth} inheritViewBox sx={styles.messageIcon} />
        메뉴4
      </MenuButton>
      {/* E: 2024-12-16 추가 */}
    </MenuContainer>
  );
};

const MenuContainer = styled(Box)((props: { theme: Theme }) => ({
  marginTop: '62px',
}));

const MenuButton = styled(Button)((props: { isactive?: boolean }) => {
  const theme = useTheme();
  return {
    justifyContent: 'flex-start',
    padding: '10px 20px',
    fontSize: '15px',
    width: '100%',
    gap: '10px',
    fontWeight: '500',
    whiteSpace: 'nowrap',
    marginBottom: '10px',
    color: props.isactive ? theme.palette.primary.main : theme.palette.grey[500],
    background: props.isactive ? '#fff' : 'initial',
    '.menu-icon *': {
      stroke: props.isactive ? '#8E2121' : '#77787B',
    },
    '@media (max-width: 1600px)': {
      paddingLeft: '10px',
    },
    ':hover': {
      color: theme.palette.primary.main,
    },
    ':hover .menu-icon *': {
      stroke: '#8E2121',
    },
  };
});

const styles = {
  messageIcon: {
    fontSize: '30px',
    fill: 'none',
    transition:
      'stroke 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    '& *': {
      stroke: '#77787B',
      transition:
        'stroke 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    },
  },
};
export default LNBMenu;
