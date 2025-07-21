export interface DialogModel {
  isOpen: boolean;
  isOnlyConfirmActionDialog?: boolean; //'확인' 버튼만 제공하는 경우 true
  confirmMessage?: string;
  onActionConfirm?: () => void;
  actions: {
    setIsOpen: (isOpen: boolean) => void;
    setIsOnlyConfirmActionDialog?: (isOnlyConfirmActionDialog: boolean) => void;
    setConfirmMessage?: (confirmMessage: string) => void;
    setOnActionConfirm?: (callback: () => void) => void;
  };
}

//S : 2024-12-16 추가
export interface UserHistoryDetailDialogModel extends DialogModel {
  userId: string;
  actions: DialogModel['actions'] & { setUserId: (userId: string) => void };
}
//E : 2024-12-16 추가

export interface CodeDialogModel {
  isOpen: boolean;
  isConfirmed?: boolean;
  codeId: number;
  title: string;
  codeDetail: string;
  actions: {
    setIsOpen: (isOpen: boolean) => void;
    setIsConfirmed: (isConfirmed: boolean) => void;
    setTitle: (title: string) => void;
    setCodeId: (codeId: number) => void;
    setCodeDetail: (codeDetail: string) => void;
  };
}
