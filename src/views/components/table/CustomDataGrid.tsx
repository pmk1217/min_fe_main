//2024-12-16 전체덮어쓰기
import { Box, Pagination, PaginationItem, Paper, styled, SvgIcon, Theme, Typography, useTheme } from '@mui/material';
import { DataGrid, DataGridProps, GridColDef, GridOverlay, GridRowIdGetter } from '@mui/x-data-grid';
import React from 'react';
import { PaginationModel } from '../../../models/common/CommonModel';
import ImgNoResult from '../../../assets/images/img-no-result.svg?react';
import { CSSObject } from '@emotion/react';

interface CustomDataGridProps extends DataGridProps {
  columns: GridColDef[];
  rows: any[];
  totalElements?: number;
  onPaginationChange?: (newPagination: PaginationModel) => void;
  noDataText?: string;
  sx?: CSSObject;
  isDialog?: boolean;
  // S : 2024-12-17 추가
  rowHeight?: number;
  isCheckboxSelection?: boolean;
  // E : 2024-12-17 추가
}

const CustomDataGrid = (props: CustomDataGridProps) => {
  const theme = useTheme();

  const CustomNoRowsOverlay = () => {
    return (
      <StyledGridOverlay>
        <SvgIcon component={ImgNoResult} inheritViewBox sx={{ fill: 'none', fontSize: '100px' }} />
        <Typography variant="body2" color="textSecondary">
          {props.noDataText ?? '데이터를 찾을 수 없습니다.'}
        </Typography>
      </StyledGridOverlay>
    );
  };

  return (
    <DataGridContainer
      theme={theme}
      noResult={props.rows.length === 0}
      isDialog={props.isDialog}
      isCheckboxSelection={props.isCheckboxSelection}
    >
      <DataGrid
        rows={props.rows}
        columns={props.columns}
        disableColumnFilter
        disableColumnMenu
        disableColumnSorting
        disableColumnSelector
        // S : 2024-12-17 변경
        rowHeight={(props.rowHeight ?? props.isDialog) ? 48 : 40}
        // E : 2024-12-17 변경
        hideFooter
        hideFooterPagination
        rowCount={props.totalElements ?? 0}
        paginationMode="server"
        slots={{
          noRowsOverlay: CustomNoRowsOverlay,
          noResultsOverlay: CustomNoRowsOverlay,
        }}
        sx={{
          width: '100%',
          height: '100%',
          position: 'relative',
          ...(props.sx ?? null),
        }}
        checkboxSelection={props.isCheckboxSelection ?? false}
        {...props}
      />
      {props.paginationModel && (
        <CustomPagination
          count={Math.ceil(props.totalElements / props.paginationModel.pageSize)} // 전체 페이지 수
          page={props.paginationModel.page + 1} // MUI Pagination은 1부터 시작
          renderItem={(item) => (
            <PaginationItem {...item} sx={{ fontSize: '0.875rem' }} /> // 스타일 커스터마이징
          )}
          defaultPage={0}
          onChange={(event, page) => {
            const newPagination: PaginationModel = { ...props.paginationModel, page: page - 1 }; // MUI는 1-based, DataGrid는 0-based
            if (props.onPaginationChange) {
              props.onPaginationChange(newPagination); // 페이지 변경 이벤트 전달
            }
          }}
        />
      )}
    </DataGridContainer>
  );
};

// S : 2024-12-17 변경
const DataGridContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'noResult' && prop !== 'isDialog' && prop !== 'isCheckboxSelection',
})<{ theme: Theme; noResult?: boolean; isDialog?: boolean; isCheckboxSelection?: boolean }>(
  ({ theme, noResult, isDialog, isCheckboxSelection }) => ({
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    '& .MuiDataGrid-root': {
      flex: 1,
      border: 'none',
      borderBottom: '1px solid #E1E1E1',
      position: 'relative',
    },
    '& .MuiDataGrid-row--borderBottom': {
      background: `${theme.palette.grey[50]} !important`,
    },
    '.MuiDataGrid-virtualScrollerContent .MuiDataGrid-row': {
      border: 'none',
    },
    '& .MuiDataGrid-columnHeader': {
      height: 'auto !important',
      padding: '10px !important',
      cursor: 'initial',
      '& .MuiDataGrid-columnHeaderTitle': {
        color: theme.palette.text.primary,
        fontSize: '14px',
      },
      ':focus': {
        outline: 'none !important',
      },
      '& .MuiDataGrid-columnSeparator': {
        display: 'none',
      },
    },
    '& .MuiDataGrid-row': {
      border: '1px solid #E1E1E1',
      borderRadius: '5px',
      boxSizing: 'border-box',
      ':hover': {
        background: theme.palette.grey[50],
      },
    },
    '.MuiDataGrid-row.Mui-selected': {
      border: isCheckboxSelection ? 'none' : '1px solid #E0B3B4',
      background: isCheckboxSelection ? '#F8F4F5' : '#fff',
      boxShadow: isCheckboxSelection ? 'none' : '0px 0px 10px rgba(245, 209, 209, 0.6)',
      ':hover': {
        background: '#fff',
      },
    },

    '& .MuiDataGrid-cell': {
      alignContent: isDialog ? 'space-evenly' : 'unset',
      border: isDialog && '1px solid #f3f3f3',
      fontSize: '14px',
    },
    '& .MuiDataGrid-cell:focus': {
      outline: 'none !important', // 포커스 아웃라인 제거
    },
    '& .MuiDataGrid-cell:focus-within': {
      outline: 'none !important', // 내부 포커스 아웃라인 제거
    },
    '& .MuiDataGrid-virtualScroller': {
      overflowY: 'hidden', // 세로 스크롤 숨김
      height: noResult ? '200px' : 'auto',
    },
    '& .MuiDataGrid-scrollbar': {
      display: 'none',
    },
  }),
);

const CustomPagination = styled(Pagination)({
  marginTop: '10px',
  '& .MuiPagination-ul': {
    justifyContent: 'flex-end',
    '& .MuiPaginationItem-root': {
      borderRadius: '5px',
    },
  },
});

// StyledGridOverlay 스타일 수정
const StyledGridOverlay = styled(GridOverlay)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'absolute', // 부모 내부에서 정렬
  top: 0,
  left: 0,
  width: '100%',
  height: '100%', // 부모 높이에 맞추기
  backgroundColor: 'white',
  zIndex: 2,
  justifyContent: 'flex-start',
}));

// E : 2024-12-17 변/경
export default CustomDataGrid;
