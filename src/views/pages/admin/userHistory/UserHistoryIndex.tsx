import { Box, Button, IconButton, Input, InputAdornment, styled, SvgIcon, Typography } from '@mui/material';
import React, { useState } from 'react';
import { AlignCenter } from '../../../components/CommonLayoutComponents';
import IconSearch from '../../../../assets/images/icons/ic_search.svg?react';
import IconReset from '../../../../assets/images/icons/ic_reset.svg?react';
import CustomDataGrid from '../../../components/table/CustomDataGrid';
import { GridColDef, GridRowSelectionModel } from '@mui/x-data-grid';
import { PaginationModel } from '../../../../models/common/CommonModel';
import { useDialogStore } from '../../../../stores/common/DialogStore';

//퍼블용 임시, 추후 model 파일에서 재정의해주세요
interface UserHistoryModel {
  userId: number;
  userName: string;
  userGrade: string;
  userPosition: string;
  chatDate: string;
  chatScore: number;
}

const UserHistoryIndex = () => {
  const [pagination, setPagination] = useState<PaginationModel>({ page: 0, pageSize: 10 });
  const [selectedRowId, setSelectedRowId] = useState<number | null>(null);
  const { userHistoryDetailDialog } = useDialogStore();

  const handlePaginationChange = (newPagination: PaginationModel) => {
    setPagination(newPagination);
  };

  const handleSelectRow = (rowSelectionModel: GridRowSelectionModel) => {
    // 클릭된 행이 이미 선택된 상태라면 해제
    const clickedRowId = rowSelectionModel[0];
    if (clickedRowId === selectedRowId) {
      setSelectedRowId(null); // 선택 해제
    } else {
      //mui가 selected row id를 항상 string으로 뱉어서 형변환 필요함
      setSelectedRowId(Number(clickedRowId));
      userHistoryDetailDialog.actions.setIsOpen(true);
    }
  };

  const columns: GridColDef<UserHistoryModel>[] = [
    {
      field: 'userId',
      headerName: '번호',
      flex: 1,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'userName',
      headerName: '면담자',
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
      field: 'userPosition',
      headerName: '면담 직책',
      flex: 2,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'chatDate',
      headerName: '면담 일자',
      flex: 2,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'chatScore',
      headerName: 'AI 평균점수',
      flex: 2,
      headerAlign: 'center',
      align: 'center',
    },
  ];

  //mock 데이터
  const rows: UserHistoryModel[] = [
    { userId: 1, userName: '김엘지', userGrade: '담당', userPosition: '공장장', chatDate: '2024.10.30', chatScore: 80 },
    { userId: 2, userName: '박철수', userGrade: '담당', userPosition: '팀장', chatDate: '2024.10.29', chatScore: 85 },
    { userId: 3, userName: '이영희', userGrade: '대리', userPosition: '사원', chatDate: '2024.10.28', chatScore: 75 },
    { userId: 4, userName: '최민수', userGrade: '차장', userPosition: '과장', chatDate: '2024.10.27', chatScore: 92 },
    { userId: 5, userName: '장서현', userGrade: '대리', userPosition: '사원', chatDate: '2024.10.26', chatScore: 78 },
    { userId: 6, userName: '윤지훈', userGrade: '담당', userPosition: '공장장', chatDate: '2024.10.25', chatScore: 88 },
    { userId: 7, userName: '김지민', userGrade: '사원', userPosition: '인턴', chatDate: '2024.10.24', chatScore: 67 },
    { userId: 8, userName: '백승호', userGrade: '차장', userPosition: '팀장', chatDate: '2024.10.23', chatScore: 93 },
    { userId: 9, userName: '정하늘', userGrade: '대리', userPosition: '사원', chatDate: '2024.10.22', chatScore: 81 },
    { userId: 10, userName: '서하은', userGrade: '사원', userPosition: '인턴', chatDate: '2024.10.21', chatScore: 72 },
  ];

  return (
    <>
      <PageTitle variant="h3" mt={3} sx={{ fontWeight: 500 }}>
        전체 면담 이력 조회
      </PageTitle>
      <SubText>
        전체 면담 이력 조회 행을 클릭하면 상세내용을 조회 할 수 있습니다. 면담자 기본 정보 및 시뮬레이션 전체 정보를 조회 가능합니다.
      </SubText>

      <Box mt={3}>
        {/* 테이블 상단 검색영역  */}
        <AlignCenter sx={{ gap: '10px' }}>
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
        {/* 테이블 영역  */}
        <Box mt={2}>
          <CustomDataGrid
            columns={columns}
            rows={rows ?? []}
            getRowId={(row) => row.userId}
            disableMultipleRowSelection
            totalElements={rows.length}
            paginationModel={pagination}
            onPaginationChange={handlePaginationChange}
            rowSelectionModel={selectedRowId ? [selectedRowId] : []}
            onRowSelectionModelChange={handleSelectRow}
          />
        </Box>
      </Box>
    </>
  );
};

const PageTitle = styled(Typography)({
  fontWeight: 600,
  marginTop: '40px',
  fontSize: '24px',
});

const SubText = styled(Typography)({
  color: '#8A8A8A',
  fontSize: '14px',
  fontWeight: '300',
  marginTop: '6px',
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

export default UserHistoryIndex;
