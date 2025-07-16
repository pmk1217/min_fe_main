//2024-12-13 추가
import React, { useEffect, useState } from 'react';
import CustomDateRangePicker from '../../../../components/datepicker/CustomDateRangePicker';
import { Box, Paper } from '@mui/material';
import { DateRange, PaginationModel } from '../../../../../models/common/CommonModel';
import { DataGrid, GridColDef, GridRowSelectionModel } from '@mui/x-data-grid';
import CustomDataGrid from '../../../../components/table/CustomDataGrid';

//퍼블용 임시, 추후 model 파일에서 재정의해주세요
interface ChatHistoryModel {
  chatId: number;
  chatDate: string;
  questionCnt: number;
  avgScore: number;
}

const ChatHistoryTable = () => {
  const [selectedRange, setSelectedRange] = useState({
    startDate: null,
    endDate: null,
  });

  const [pagination, setPagination] = useState<PaginationModel>({ page: 0, pageSize: 3 });
  const [selectedRowId, setSelectedRowId] = useState<number | null>(null);

  const handleSearchHistory = (range: DateRange) => {
    setSelectedRange(range);
    //검색 function
  };

  const columns: GridColDef<ChatHistoryModel>[] = [
    {
      field: 'chatId',
      headerName: '번호',
      flex: 1,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'chatDate',
      headerName: '면담 일자',
      width: 200,
      flex: 2,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'questionCnt',
      headerName: '질문 개수',
      width: 200,
      flex: 2,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'avgScore',
      headerName: '평균 점수',
      flex: 2,
      headerAlign: 'center',
      align: 'center',
    },
  ];

  const rows: ChatHistoryModel[] = [
    { chatId: 1, chatDate: '2023.08.30', questionCnt: 10, avgScore: 80 },
    { chatId: 2, chatDate: '2023.12.25', questionCnt: 10, avgScore: 87 },
    { chatId: 3, chatDate: '2024.04.30', questionCnt: 10, avgScore: 96 },
  ];

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
    }
  };
  useEffect(() => {
    console.log('selectedRowId', selectedRowId);
  }, [selectedRowId]);

  return (
    <Box mt={2}>
      <CustomDateRangePicker
        initialRange={selectedRange}
        minDate={new Date('2024-01-01')}
        maxDate={new Date()}
        onSearch={handleSearchHistory}
        onReset={() => setSelectedRange({ startDate: null, endDate: null })}
        sx={{ marginBottom: '10px' }}
      />
      {/* 주의 : getRowId prop에 데이터 id에 해당하는 key name을 꼭 지정해주세요 */}
      <CustomDataGrid
        columns={columns}
        rows={rows ?? []}
        getRowId={(row) => row.chatId}
        totalElements={rows.length}
        disableMultipleRowSelection
        paginationModel={pagination}
        onPaginationChange={handlePaginationChange}
        rowSelectionModel={selectedRowId ? [selectedRowId] : []}
        onRowSelectionModelChange={handleSelectRow} // 선택된 row ID를 배열로 처리
        // S : 2024-12-16 수정
        noDataText={'면담 결과를 찾을 수 없습니다.'}
        // E : 2024-12-16 수정
        // S : 2024-12-17 추가
        rowHeight={36}
        // E : 2024-12-17 추가
      />
    </Box>
  );
};

export default ChatHistoryTable;
