//2024-02-11 추가
import React from 'react';
import { useDialogStore } from '../../../stores/common/DialogStore';
import ConfirmDialog from './ConfirmDialog';
import UserHistoryDetailDialog from './UserHistoryDetailDialog';

const Dialogs = () => {
  const { confirmDialog, userHistoryDetailDialog } = useDialogStore();
  return (
    <>
      {confirmDialog.isOpen && <ConfirmDialog />}
      {userHistoryDetailDialog.isOpen && <UserHistoryDetailDialog />}
    </>
  );
};

export default Dialogs;
