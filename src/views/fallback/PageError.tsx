import React from 'react';
import { NotFoundContainer } from './StyledFallbackComponent';
import { Box, styled, SvgIcon, Typography } from '@mui/material';
import IconBoxError from '../../assets/images/icons/ic_error_box.svg?react';
import { AlignCenter } from '../components/CommonLayoutComponents';
import CustomButton from '../components/buttons/CustomButton';
import { useNavigate } from 'react-router-dom';

const PageError = () => {
  const navigate = useNavigate();
  return (
    <NotFoundContainer>
      <AlignCenter>
        <CustomSizer>
          <SvgIcon component={IconBoxError} inheritViewBox sx={{ fill: 'none', fontSize: '260px' }} />
          <Typography variant="h4" sx={{ color: '#000', fontWeight: 500 }} mt={3} mb={1}>
            죄송합니다. 페이지가 작동하지 않습니다.
          </Typography>
          <Typography sx={{ fontSize: '16px' }}>현재 페이지에서 요청을 처리 할 수 없습니다.</Typography>
          <AlignCenter mt={5} sx={{ justifyContent: 'center' }}>
            <CustomButton btntype="primary" btnsize="sm" onClick={() => navigate('/')}>
              메인으로
            </CustomButton>
          </AlignCenter>
        </CustomSizer>
      </AlignCenter>
    </NotFoundContainer>
  );
};

const CustomSizer = styled(Box)({
  width: '500px',
  textAlign: 'center',
});

export default PageError;
