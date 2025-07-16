// 2024-12-17 추가
import { Box } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';
import React, { useState } from 'react';
import CustomDataGrid from '../../../../components/table/CustomDataGrid';
import { PaginationModel } from '../../../../../models/common/CommonModel';

//퍼블용 임시, 추후 model 파일에서 재정의해주세요
interface UserModel {
  userId: number;
  userName: string;
  userGrade: string;
  affiliate: string;
}

const AdminUserTable = () => {
  const [pagination, setPagination] = useState<PaginationModel>({ page: 0, pageSize: 5 });

  const handlePaginationChange = (newPagination: PaginationModel) => {
    setPagination(newPagination);
  };

  const columns: GridColDef<UserModel>[] = [
    {
      field: 'userId',
      headerName: '번호',
      flex: 1,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'userName',
      headerName: '이름',
      width: 200,
      flex: 2,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'userGrade',
      headerName: '직급',
      width: 200,
      flex: 2,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'affiliate',
      headerName: '소속부서',
      width: 200,
      flex: 2,
      headerAlign: 'center',
      align: 'center',
    },
  ];

  //mock 데이터
  const rows: UserModel[] = [
    { userId: 1, userName: '김엘지', userGrade: '담당', affiliate: '빅데이터엔지니어링2팀' },
    { userId: 2, userName: '박철수', userGrade: '담당', affiliate: '빅데이터엔지니어링2팀' },
    { userId: 3, userName: '이영희', userGrade: '대리', affiliate: '빅데이터엔지니어링2팀' },
    { userId: 4, userName: '최민수', userGrade: '차장', affiliate: '빅데이터엔지니어링2팀' },
    { userId: 5, userName: '장서현', userGrade: '대리', affiliate: '빅데이터엔지니어링2팀' },
  ];

  return (
    <Box mt={2}>
      <CustomDataGrid
        columns={columns}
        // loading
        rows={rows ?? []}
        getRowId={(row) => row.userId}
        totalElements={rows.length}
        paginationModel={pagination}
        onPaginationChange={handlePaginationChange}
        disableRowSelectionOnClick
        rowHeight={34}
      />
    </Box>
  );
};

export default AdminUserTable;
