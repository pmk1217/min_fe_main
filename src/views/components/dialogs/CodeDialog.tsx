import React, { useEffect, useState } from 'react';
import { useDialogStore } from '../../../stores/common/DialogStore.ts';
import { Box, Radio, Typography } from '@mui/material';
import { AlignCenter } from '../CommonLayoutComponents.tsx';
import DialogLayout from './DialogLayout.tsx';
import useConfirm from '../../../utils/ConfirmDialogUtils.ts';

const CodeDialog = () => {
  const { confirm } = useConfirm();
  const { codeDialog } = useDialogStore();

  return (
    <DialogLayout
      isOpen={codeDialog.isOpen}
      title={codeDialog.title}
      isMainDialog={true}
      isConfirm={false}
      handleClose={() => codeDialog.actions.setIsOpen(false)}
      sx={{ width: codeDialog.title.includes('Api') ? '750px' : '600px' }}
    >
      <pre
        style={{
          backgroundColor: '#f4f4f4',
          padding: '13px',
          borderRadius: '8px',
          whiteSpace: 'pre-wrap',
          fontFamily: 'Noto Sans KR',
          fontWeight: '600',
          overflowX: 'auto',
          marginBottom: '15px',
        }}
      >
        {codeDialog.codeDetail}
      </pre>
    </DialogLayout>
  );
};

export default CodeDialog;
