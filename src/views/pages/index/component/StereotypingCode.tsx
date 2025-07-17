import { Avatar, Box, Button, List, ListItemButton, ListItemText, Paper, styled, Typography } from '@mui/material';
import React from 'react';
import { useDialogStore } from '../../../../stores/common/DialogStore';
import { CodeMock } from '../../../../models/code/CodeModel';

const StereotypingCode = () => {
  const { codeDialog, userHistoryDetailDialog } = useDialogStore();

  const handleClickCode = (codeId: number, codeDetail: string) => {
    codeDialog.actions.setCodeId(codeId);
    codeDialog.actions.setCodeDetail(codeDetail);
    codeDialog.actions.setIsOpen(true);
  };

  return (
    <List>
      {CodeMock.map((item) => (
        <CodeListItem onClick={() => handleClickCode(item.codeId, item.codeDetail)}>
          <ListItemText primary={<Typography fontWeight="bold">{item.title}</Typography>} />
        </CodeListItem>
      ))}
    </List>
  );
};

export default StereotypingCode;

const CodeListItem = styled(ListItemButton)({
  transition: '0.2s',
  borderTop: '3px soild',
  paddingLeft: 5,
  height: '45px',
  '&:hover': {
    backgroundColor: '#F6F6F6',
    cursor: 'pointer',
  },
});
