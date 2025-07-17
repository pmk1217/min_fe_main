import React, { useEffect, useState } from 'react';
import { useDialogStore } from '../../../stores/common/DialogStore.ts';
import { Box, Radio, Typography } from '@mui/material';
import { AlignCenter } from '../CommonLayoutComponents.tsx';
import DialogLayout from './DialogLayout.tsx';
import useConfirm from '../../../utils/ConfirmDialogUtils.ts';
import { codeText } from '../../../models/common/CommonModel.ts';

const CodeDialog = () => {
  const { confirm } = useConfirm();
  const { codeDialog } = useDialogStore();
  const codeString = `
        const ExplanationText = styled(Typography)({
          marginTop: '10px',
          fontSize: '15px',
          fontWeight: 'bold',
        });`;

  return (
    <DialogLayout
      isOpen={codeDialog.isOpen}
      title={'dd'}
      isMainDialog={true}
      isConfirm={true}
      handleClose={() => codeDialog.actions.setIsOpen(false)}
      sx={{ width: '840px' }}
    >
      <pre
        style={{
          backgroundColor: '#f4f4f4',
          padding: '10px',
          borderRadius: '8px',
          whiteSpace: 'pre-wrap',
          fontFamily: 'Noto Sans KR',
          fontWeight: '600',
          overflowX: 'auto',
        }}
      >
        {codeText.styled}
      </pre>
    </DialogLayout>
  );
};

export default CodeDialog;
