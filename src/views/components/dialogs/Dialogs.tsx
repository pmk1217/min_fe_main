//2024-02-11 추가
import React from 'react';
import { useDialogStore } from '../../../stores/common/DialogStore';
import UserHistoryDetailDialog from './UserHistoryDetailDialog';
import CodeDialog from './CodeDialog';

const Dialogs = () => {
  const { codeDialog, userHistoryDetailDialog } = useDialogStore();
  return (
    <>
      {codeDialog.isOpen && <CodeDialog />}
      {userHistoryDetailDialog.isOpen && <UserHistoryDetailDialog />}
    </>
  );
};

export default Dialogs;
