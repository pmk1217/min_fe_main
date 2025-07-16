// 2024-12-17 전체덮어쓰기
import { Box, SvgIcon, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { NotFoundContainer } from './StyledFallbackComponent';
import { FlexBox } from '../components/CommonLayoutComponents';
import IconDenied from '../../assets/images/icons/ic_access_denied.svg?react';

const AccessDenied = () => {
  return (
    <NotFoundContainer>
      <FlexBox sx={{ alignItems: 'flex-start' }}>
        <CustomSizer>
          <SvgIcon component={IconDenied} inheritViewBox sx={{ fill: 'none', fontSize: '260px' }} />
          <Typography variant="h1" fontWeight="700">
            액세스 권한이 없습니다
          </Typography>
          <Typography variant="h5" sx={{ my: '20px' }}>
            별도 권한이 필요한 화면에 접근하셨습니다.
            <br />
            관리자로부터 권한을 부여 받으신 후 사용해 주세요.
          </Typography>
        </CustomSizer>
      </FlexBox>
    </NotFoundContainer>
  );
};

export default AccessDenied;

const CustomSizer = styled(Box)({
  width: '410px',
  marginRight: '51px',
  textAlign: 'center',
});
