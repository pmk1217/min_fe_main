// 2024-12-16 추가
import { Dialog, useTheme, Box, Typography, Theme, styled, DialogTitle, IconButton, SvgIcon, Tooltip } from '@mui/material';
import { AlignCenter, JustifyCenter } from '../CommonLayoutComponents';
import CustomButton from '../buttons/CustomButton';
import { useDialogStore } from '../../../stores/common/DialogStore';
import IconClose from '../../../assets/images/icons/ic_dialog_close.svg?react';
import CustomDataGrid from '../table/CustomDataGrid';
import { GridColDef } from '@mui/x-data-grid';
import { PaginationModel } from '../../../models/common/CommonModel';
import { useState } from 'react';
import { TabelCellTooltip } from '../table/TableCellTooltip';

//퍼블용 임시, 추후 model 파일에서 재정의해주세요
interface UserHistoryDetailModel {
  userId: number;
  userName: string;
  userPosition: string;
  chatDate: string;
  chat: ChatDetailModel[];
}
interface ChatDetailModel {
  chatIndex: number;
  question: string;
  answer: string;
  feedback: string;
  score: number;
}

const UserHistoryDetailDialog = () => {
  const theme = useTheme();
  const { userHistoryDetailDialog } = useDialogStore();
  const [pagination, setPagination] = useState<PaginationModel>({ page: 0, pageSize: 10 });

  const handlePaginationChange = (newPagination: PaginationModel) => {
    setPagination(newPagination);
  };

  const onConfirm = () => {
    userHistoryDetailDialog.actions.setIsOpen(false);
  };

  const columns: GridColDef<ChatDetailModel>[] = [
    {
      field: 'userName',
      headerName: '면담자',
      flex: 1,
      headerAlign: 'center',
      align: 'center',

      renderCell: (params) => {
        if (params.row.chatIndex === 0) {
          return <DialogDataGridTypo>{rows[0].userName}</DialogDataGridTypo>;
        }
      },
    },
    {
      field: 'userPosition',
      headerName: '직급',
      flex: 1,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params) => {
        if (params.row.chatIndex === 0) {
          return <DialogDataGridTypo>{rows[0].userPosition}</DialogDataGridTypo>;
        }
      },
    },
    {
      field: 'chatDate',
      headerName: '면담 일자',
      flex: 1.2,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params) => {
        if (params.row.chatIndex === 0) {
          return <DialogDataGridTypo>{rows[0].chatDate}</DialogDataGridTypo>;
        }
      },
    },
    {
      field: 'chatIndex',
      headerName: '번호',
      flex: 0.8,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params) => {
        return <DialogDataGridTypo>{params.row.chatIndex + 1}</DialogDataGridTypo>;
      },
    },
    {
      field: 'question',
      headerName: '질문',
      flex: 2.2,
      headerAlign: 'center',
      renderCell: (params) => {
        return <TabelCellTooltip>{params.row.question}</TabelCellTooltip>;
      },
    },
    {
      field: 'answer',
      headerName: '사용자 입력 답변',
      flex: 2.2,
      headerAlign: 'center',
      // renderCell: (params) => {
      //   return <DialogDataGridTypo>{params.row.answer}</DialogDataGridTypo>;
      // },
      renderCell: (params) => {
        return <TabelCellTooltip>{params.row.question}</TabelCellTooltip>;
      },
    },
    {
      field: 'feedback',
      headerName: 'AI 피드백',
      flex: 2.2,
      headerAlign: 'center',
      renderCell: (params) => {
        return <TabelCellTooltip>{params.row.feedback}</TabelCellTooltip>;
      },
    },
    {
      field: 'score',
      headerName: 'AI 평가 점수',
      flex: 1.4,
      headerAlign: 'center',
      align: 'center',
      renderHeader: () => {
        return <Typography>AI 평가 점수</Typography>;
      },
      renderCell: (params) => {
        return <DialogDataGridTypo>{params.row.score}</DialogDataGridTypo>;
      },
    },
  ];

  const rows: UserHistoryDetailModel[] = [
    {
      userId: 1,
      userName: '김엘지',
      userPosition: '공장장',
      chatDate: '2024.10.30',
      chat: [
        {
          chatIndex: 0,
          question: 'MSDS에는 어떤 내용이 포함되어 있습니까?',
          answer: 'MSDS에는 이런 내용이 포함되어 있습니다.',
          feedback:
            '물질안전보건자료(MSDS, Material Safety Data Sheet)는 화학 물질의 안전한 취급과 사용을 위해 필요한 정보를 제공하는 문서입니다. MSDS는 아래와 같은 주요 내용을 포함합니다.',
          score: 90,
        },
        {
          chatIndex: 1,
          question: 'MSDS에는 어떤 내용이 포함되어 있습니까?',
          answer: 'MSDS에는 이런 내용이 포함되어 있습니다.',
          feedback:
            '물질안전보건자료(MSDS, Material Safety Data Sheet)는 화학 물질의 안전한 취급과 사용을 위해 필요한 정보를 제공하는 문서입니다. MSDS는 아래와 같은 주요 내용을 포함합니다.',
          score: 90,
        },
        {
          chatIndex: 2,
          question: '화학 물질을 안전하게 다루려면 어떤 점을 유의해야 하나요?',
          answer: '화학 물질을 다룰 때는 항상 안전 장비를 착용해야 합니다.',
          feedback:
            '화학 물질을 취급할 때는 항상 안전 장비를 착용하고, 통풍이 좋은 곳에서 작업하며, 화학 물질에 대한 MSDS를 참고해야 합니다.',
          score: 85,
        },
        {
          chatIndex: 3,
          question: '불꽃이 발생할 수 있는 화학 물질은 어떤 것이 있나요?',
          answer: '가연성 화학 물질이 불꽃을 발생시킬 수 있습니다.',
          feedback:
            '가연성 화학 물질은 불꽃이 발생할 수 있으므로, 이를 다룰 때는 불꽃과의 접촉을 피해야 하며, 적절한 보관 조건을 확인해야 합니다.',
          score: 92,
        },
        {
          chatIndex: 4,
          question: 'MSDS에서 주의해야 할 사항은 무엇인가요?',
          answer: 'MSDS에서 취급 방법과 저장 조건을 주의 깊게 확인해야 합니다.',
          feedback:
            'MSDS에서는 화학 물질의 취급 방법, 저장 조건, 위험성 등을 명확히 기재하고 있습니다. 이를 정확히 숙지하고 따라야 합니다.',
          score: 88,
        },
        {
          chatIndex: 5,
          question: '화학 물질의 적절한 저장 방법은 무엇인가요?',
          answer: '화학 물질은 지정된 장소에 보관해야 하며, 화합물 간 반응을 피해야 합니다.',
          feedback:
            '화학 물질은 보관할 때 적절한 온도와 습도를 유지해야 하며, 서로 반응할 가능성이 있는 화합물은 분리하여 보관해야 합니다.',
          score: 87,
        },
        {
          chatIndex: 6,
          question: '화학 물질 누출 시 대처 방법은 무엇인가요?',
          answer: '화학 물질 누출 시 즉시 대피하고, 신고해야 합니다.',
          feedback: '화학 물질이 누출되면 즉시 대피하고, 누출된 물질의 특성을 고려하여 적절한 대처 방법을 취해야 합니다.',
          score: 91,
        },
        {
          chatIndex: 7,
          question: 'MSDS에 포함된 응급처치 방법은 무엇인가요?',
          answer: '응급처치 방법은 물질에 따라 다릅니다.',
          feedback:
            'MSDS에는 각 화학 물질에 대한 응급처치 방법이 상세히 기술되어 있습니다. 이를 숙지하고, 필요 시 응급처치를 시행해야 합니다.',
          score: 84,
        },
        {
          chatIndex: 8,
          question: 'MSDS의 주요 항목은 무엇인가요?',
          answer: 'MSDS에는 물질의 성질, 취급 방법, 위험성 등이 포함됩니다.',
          feedback:
            'MSDS는 물질의 성질, 취급 방법, 위험성, 응급처치 방법 등을 포함하여, 화학 물질의 안전한 사용을 돕기 위한 정보를 제공합니다.',
          score: 93,
        },
        {
          chatIndex: 9,
          question: '화학 물질을 다룰 때 필요한 보호 장비는 무엇인가요?',
          answer: '보호 장비로는 장갑, 고글, 마스크가 필요합니다.',
          feedback:
            '화학 물질을 다룰 때는 반드시 적절한 보호 장비를 착용해야 하며, 사용 환경에 따라 더 많은 보호 장비가 필요할 수 있습니다.',
          score: 90,
        },
      ],
    },
  ];

  return (
    <Dialog
      open={userHistoryDetailDialog.isOpen}
      onClose={() => userHistoryDetailDialog.actions.setIsOpen(false)}
      disableScrollLock
      PaperProps={{ sx: { borderRadius: '8px' } }}
    >
      <DialogTitle>전체 면담 이력 조회</DialogTitle>
      <CloseBtn onClick={() => userHistoryDetailDialog.actions.setIsOpen(false)}>
        <SvgIcon component={IconClose} sx={{ fill: 'none', fontSize: '30PX' }} inheritViewBox />
      </CloseBtn>
      <DialogContainer>
        <Box my={2} sx={{ width: '100%' }}>
          <CustomDataGrid
            columns={columns}
            rows={rows[0].chat}
            getRowId={(row) => row.chatIndex}
            disableMultipleRowSelection
            totalElements={rows[0].chat.length}
            paginationModel={pagination}
            onPaginationChange={handlePaginationChange}
            disableRowSelectionOnClick
            isDialog
          />
        </Box>
        <AlignCenter sx={{ gap: '6px' }}>
          <CustomButton btnsize={'ssm'} onClick={onConfirm}>
            확인
          </CustomButton>
        </AlignCenter>
      </DialogContainer>
    </Dialog>
  );
};

export default UserHistoryDetailDialog;

const DialogContainer = styled(Box)({
  width: '1000px',
  minHeight: '500px',
  background: '#fff',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0px 27px 20px',
});

const CloseBtn = styled(IconButton)({
  position: 'absolute',
  right: '24px',
  top: '16px',
});

const DialogDataGridTypo = styled(Typography)({
  color: '#444',
  fontSize: '14px',
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  WebkitLineClamp: 2,
  whiteSpace: 'normal',
  verticalAlign: 'middle',
});
