//2024-02-11 추가
import React from 'react';
import { useDialogStore } from '../../../stores/common/DialogStore';
import UserHistoryDetailDialog from './UserHistoryDetailDialog';
import CodeDialog from './CodeDialog';
import ShortcutKeyDialog from './ShortcutKeyDialog';

const Dialogs = () => {
  const { codeDialog, userHistoryDetailDialog, shortcutKeyDialog } = useDialogStore();
  return (
    <>
      {codeDialog.isOpen && <CodeDialog />}
      {userHistoryDetailDialog.isOpen && <UserHistoryDetailDialog />}
      {shortcutKeyDialog.isOpen && <ShortcutKeyDialog />}
    </>
  );
};

export default Dialogs;
