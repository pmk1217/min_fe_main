// 2024-12-17 전체덮어쓰기
import { useTheme, Box, Theme, SvgIcon, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { NotFoundContainer, NotFoundTitle, ErrorMessage, ErrorGreyBox, MainColorDivider } from './StyledFallbackComponent';
import IconDenied from '../../assets/images/icons/ic_not_found.svg?react';
import CustomButton from '../components/buttons/CustomButton';
import { useNavigate } from 'react-router-dom';
import { AlignCenter } from '../components/CommonLayoutComponents';

const NotFound = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <NotFoundContainer>
      <AlignStart>
        <CustomSizer sx={styles(theme)}>
          <SvgIcon component={IconDenied} inheritViewBox sx={{ fill: 'none', fontSize: '260px' }} />
          <Typography variant="h4" sx={{ color: '#000', fontWeight: 500 }} mb={3}>
            죄송합니다. 현재 찾을 수 없는 페이지를 요청하셨습니다.
          </Typography>
          <Typography sx={{ fontSize: '16px' }}>
            존재하지 않는 주소를 입력하셨거나, <br />
            요청하신 페이지의 주소가 변경, 삭제 되어 찾을 수 없습니다.
          </Typography>
          <AlignCenter mt={3} sx={{ justifyContent: 'center' }}>
            <CustomButton btntype="primary" btnsize="sm" onClick={() => navigate('/')}>
              메인으로
            </CustomButton>
          </AlignCenter>
        </CustomSizer>
      </AlignStart>
    </NotFoundContainer>
  );
};

export default NotFound;

const AlignStart = styled(Box)({
  display: 'flex',
  alignItems: 'flex-start',
});

const CustomSizer = styled(Box)({
  width: '500px',
});

const styles = (theme: Theme) => {
  return {
    textAlign: 'center',
    '& > div': {
      marginBottom: '40px',
      textAlign: 'center',
    },
  };
};
