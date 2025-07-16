// 2024-12-17 추가
import React, { useState } from 'react';
import { PaginationModel } from '../../../../../models/common/CommonModel';
import { GridColDef, GridRowSelectionModel } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import CustomDataGrid from '../../../../components/table/CustomDataGrid';

//퍼블용 임시, 추후 model 파일에서 재정의해주세요
interface UserModel {
  userId: number;
  userName: string;
  userGrade: string;
  affiliate: string;
}

interface AllUserTableProps {
  selectedUserId: number[];
  setSelectedUserId: React.Dispatch<React.SetStateAction<number[]>>;
}

const AllUserTable = (props: AllUserTableProps) => {
  const [pagination, setPagination] = useState<PaginationModel>({ page: 0, pageSize: 10 });

  const handlePaginationChange = (newPagination: PaginationModel) => {
    setPagination(newPagination);
  };

  const handleSelectRow = (rowSelectionModel: GridRowSelectionModel) => {
    const selectedIds = rowSelectionModel.map((i) => Number(i));
    props.setSelectedUserId(selectedIds);
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
    { userId: 6, userName: '윤지훈', userGrade: '담당', affiliate: '빅데이터엔지니어링2팀' },
    { userId: 7, userName: '김지민', userGrade: '사원', affiliate: '빅데이터엔지니어링2팀' },
    { userId: 8, userName: '백승호', userGrade: '차장', affiliate: '빅데이터엔지니어링2팀' },
    { userId: 9, userName: '정하늘', userGrade: '대리', affiliate: '빅데이터엔지니어링2팀' },
    { userId: 10, userName: '서하은', userGrade: '사원', affiliate: '빅데이터엔지니어링2팀' },
  ];
  return (
    <Box mt={2}>
      <CustomDataGrid
        columns={columns}
        rows={rows ?? []}
        getRowId={(row) => row.userId}
        totalElements={rows.length}
        paginationModel={pagination}
        onPaginationChange={handlePaginationChange}
        rowSelectionModel={props.selectedUserId ?? []}
        onRowSelectionModelChange={handleSelectRow}
        isCheckboxSelection
        disableRowSelectionOnClick
        rowHeight={34}
      />
    </Box>
  );
};

export default AllUserTable;
