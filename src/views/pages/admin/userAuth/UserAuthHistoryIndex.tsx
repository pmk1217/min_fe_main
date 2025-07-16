// 2024-12-17 추가
import { Box, Button, IconButton, Input, InputAdornment, styled, SvgIcon, Typography } from '@mui/material';
import React, { useState } from 'react';
import { AlignCenter } from '../../../components/CommonLayoutComponents';
import IconSearch from '../../../../assets/images/icons/ic_search.svg?react';
import IconReset from '../../../../assets/images/icons/ic_reset.svg?react';
import CustomDataGrid from '../../../components/table/CustomDataGrid';
import AllUserTable from './components/AllUserTable';
import AdminUserTable from './components/AdminUserTable';
import CustomButton from '../../../components/buttons/CustomButton';

const UserAuthHistoryIndex = () => {
  const [selectedUserIds, setSelectedUserIds] = useState<number[]>([]);
  return (
    <>
      <Typography variant="h4" sx={{ fontWeight: 500 }}>
        관리자 권한 부여
      </Typography>
      <SubText>이름으로 검색 후 관리자로 추가 할 수 있습니다.</SubText>
      <Box mt={3}>
        {/* 테이블 상단 검색영역  */}
        <AlignCenter sx={{ width: '100%' }}>
          <AlignCenter sx={{ gap: '10px', width: '100%' }}>
            <TableSearch
              placeholder="Search"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton aria-label="searchIcon" edge="end" onClick={() => {}}>
                    <SvgIcon component={IconSearch} inheritViewBox sx={{ fill: 'none' }} />
                  </IconButton>
                </InputAdornment>
              }
            />
            <ResetButton onClick={() => {}}>
              <SvgIcon component={IconReset} sx={{ fill: 'none' }} inheritViewBox />
            </ResetButton>
          </AlignCenter>
          <CustomButton btntype="primary" btnsize="sm">
            관리자 추가
          </CustomButton>
        </AlignCenter>
        {/* 상단 전체 사용자 테이블 영역  */}
        <AllUserTable selectedUserId={selectedUserIds} setSelectedUserId={setSelectedUserIds} />
      </Box>
      <Typography variant="h4" sx={{ fontWeight: 500 }}>
        관리자 조회
      </Typography>
      <SubText>현재 관리자로 지정된 목록을 조회할 수 있습니다.</SubText>
      {/* 하단 admin 사용자 테이블 영역  */}
      <AdminUserTable />
    </>
  );
};

const SubText = styled(Typography)({
  color: '#8A8A8A',
  fontSize: '14px',
  fontWeight: '300',
  marginTop: '4px',
});

const TableSearch = styled(Input)({
  width: '40%',
  borderRadius: '5px',
});

const ResetButton = styled(Button)({
  padding: '8px',
  border: '1px solid #EAEAEA',
  borderRadius: '5px',
});

export default UserAuthHistoryIndex;
