import { Theme, Typography, Divider, styled } from '@mui/material';
import { AlignCenter, CenterBox } from '../components/CommonLayoutComponents';

export const NotFoundContainer = styled(AlignCenter)({
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  background: '#F8F4F5',
  flex: 1,
  flexDirection: 'column',
  paddingTop: '190px',
  top: '0',
  left: '0',
});

export const NotFoundTitle = styled(Typography)({
  fontSize: '50px',
  fontWeight: '700',
  lineHeight: '59px',
  marginBottom: '20px',
});

export const ErrorMessage = styled(Typography)((props: { theme: Theme }) => {
  return {
    fontWeight: '500',
    color: props.theme.palette.grey[700],
    textAlign: 'center',
    marginBottom: '20px',
  };
});

export const ErrorGreyBox = styled(CenterBox)((props: { theme: Theme }) => {
  return {
    background: '#F6F6F6',
    borderRadius: '50px',
    color: props.theme.palette.primary.main,
    padding: '12px 20px',
    height: '50px',
    fontSize: '18px',
    fontWeight: '500',
    width: '450px',
    marginBottom: '20px',
  };
});

export const MainColorDivider = styled(Divider)((props: { theme: Theme }) => {
  return {
    width: '1px',
    height: '22px',
    background: props.theme.palette.primary.main,
    margin: '0px 14px',
  };
});
