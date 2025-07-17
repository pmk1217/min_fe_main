import { Box, Button } from '@mui/material';
import React from 'react';
import { useDialogStore } from '../../../../stores/common/DialogStore';

const StereotypingCode = () => {
  const { codeDialog, userHistoryDetailDialog } = useDialogStore();

  const handleClickCode = () => {
    codeDialog.actions.setIsOpen(true);
  };

  return (
    <Box>
      <Button onClick={handleClickCode}>딸깍</Button>
    </Box>
  );
};

export default StereotypingCode;
