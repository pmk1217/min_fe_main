//2024-02-11 추가
import { DialogModel, UserHistoryDetailDialogModel } from '../../models/common/DialogModel';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

interface DialogStore {
  confirmDialog: DialogModel;
  userHistoryDetailDialog: UserHistoryDetailDialogModel;
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
  })),
);
