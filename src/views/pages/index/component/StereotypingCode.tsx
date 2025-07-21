import { Avatar, Box, Button, List, ListItemButton, ListItemText, Paper, styled, Typography } from '@mui/material';
import React from 'react';
import { useDialogStore } from '../../../../stores/common/DialogStore';
import { CodeMock } from '../../../../models/code/CodeModel';

const StereotypingCode = () => {
  const { codeDialog, userHistoryDetailDialog } = useDialogStore();

  const handleClickCode = (codeId: number, codeDetail: string, title: string) => {
    codeDialog.actions.setCodeId(codeId);
    codeDialog.actions.setTitle(title);
    codeDialog.actions.setCodeDetail(codeDetail);
    codeDialog.actions.setIsOpen(true);
  };

  return (
    <ListContainer>
      <List>
        {CodeMock.map((item) => (
          <CodeListItem onClick={() => handleClickCode(item.codeId, item.codeDetail, item.title)}>
            <ListItemText primary={<Typography fontWeight="bold">{item.title}</Typography>} />
          </CodeListItem>
        ))}
      </List>
    </ListContainer>
  );
};

export default StereotypingCode;

const CodeListItem = styled(ListItemButton)({
  transition: '0.2s',
  paddingLeft: 5,
  marginBottom: 2,
  height: '45px',
  '&:hover': {
    backgroundColor: '#F6F6F6',
    cursor: 'pointer',
  },
});

const codeTitle = styled(Typography)({
  height: '45px',
});

const ListContainer = styled(Box)({
  height: '300px',
  overflow: 'auto',
});
