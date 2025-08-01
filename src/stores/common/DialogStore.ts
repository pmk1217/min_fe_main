//2024-02-11 추가
import { CodeDialogModel, DialogModel, UserHistoryDetailDialogModel } from '../../models/common/DialogModel';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

interface DialogStore {
  confirmDialog: DialogModel;
  userHistoryDetailDialog: UserHistoryDetailDialogModel;
  codeDialog: CodeDialogModel;
  shortcutKeyDialog: DialogModel;
}

export const useDialogStore = create<DialogStore>()(
  immer((set) => ({
    confirmDialog: {
      isOpen: false,
      isOnlyConfirmActionDialog: false,
      confirmMessage: '',
      onActionConfirm: () => {},
      actions: {
        setIsOpen: (isOpen: boolean) => {
          set((state) => {
            state.confirmDialog.isOpen = isOpen;
          });
        },
        setIsOnlyConfirmActionDialog: (isOnlyConfirmActionDialog: boolean) => {
          set((state) => {
            state.confirmDialog.isOnlyConfirmActionDialog = isOnlyConfirmActionDialog;
          });
        },
        setConfirmMessage: (confirmMessage: string) => {
          set((state) => {
            state.confirmDialog.confirmMessage = confirmMessage;
          });
        },
        setOnActionConfirm: (callback: () => void) => {
          set((state) => {
            state.confirmDialog.onActionConfirm = callback;
          });
        },
      },
    },

    shortcutKeyDialog: {
      isOpen: false,
      isOnlyConfirmActionDialog: false,
      confirmMessage: '',
      onActionConfirm: () => {},
      actions: {
        setIsOpen: (isOpen: boolean) => {
          set((state) => {
            state.shortcutKeyDialog.isOpen = isOpen;
          });
        },
        setIsOnlyConfirmActionDialog: (isOnlyConfirmActionDialog: boolean) => {
          set((state) => {
            state.shortcutKeyDialog.isOnlyConfirmActionDialog = isOnlyConfirmActionDialog;
          });
        },
        setConfirmMessage: (confirmMessage: string) => {
          set((state) => {
            state.shortcutKeyDialog.confirmMessage = confirmMessage;
          });
        },
        setOnActionConfirm: (callback: () => void) => {
          set((state) => {
            state.shortcutKeyDialog.onActionConfirm = callback;
          });
        },
      },
    },

    userHistoryDetailDialog: {
      isOpen: false,
      userId: undefined,
      actions: {
        setIsOpen: (isOpen: boolean) => {
          set((state) => {
            state.userHistoryDetailDialog.isOpen = isOpen;
          });
        },
        setUserId: (userId: string) => {
          set((state) => {
            state.userHistoryDetailDialog.userId = userId;
          });
        },
      },
    },
    codeDialog: {
      isOpen: false,
      isConfirmed: false,
      codeId: null,
      title: '',
      codeDetail: '',
      actions: {
        setIsOpen: (isOpen: boolean) => {
          set((state) => {
            state.codeDialog.isOpen = isOpen;
          });
        },
        setIsConfirmed: (isConfirmed: boolean) => {
          set((state) => {
            state.codeDialog.isConfirmed = isConfirmed;
          });
        },
        setTitle: (title: string) => {
          set((state) => {
            state.codeDialog.title = title;
          });
        },
        setCodeId: (codeId: number) => {
          set((state) => {
            state.codeDialog.codeId = codeId;
          });
        },
        setCodeDetail: (codeDetail: string) => {
          set((state) => {
            state.codeDialog.codeDetail = codeDetail;
          });
        },
      },
    },
  })),
);
