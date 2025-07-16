import { Dialog, useTheme, Box, Typography, Theme, styled } from '@mui/material';
import { AlignCenter, JustifyCenter } from '../CommonLayoutComponents';
import CustomButton from '../buttons/CustomButton';
import { useDialogStore } from '../../../stores/common/DialogStore';

const ConfirmDialog = () => {
  const theme = useTheme();
  const { confirmDialog } = useDialogStore();

  const onConfirm = () => {
    confirmDialog.onActionConfirm && confirmDialog.onActionConfirm();
    confirmDialog.actions.setIsOpen(false);
  };

  const onCancel = () => {
    confirmDialog.actions.setIsOpen(false);
  };

  return (
    <Dialog
      open={confirmDialog.isOpen}
      onClose={() => confirmDialog.actions.setIsOpen(false)}
      disableScrollLock
      PaperProps={{ sx: { borderRadius: '8px' } }}
    >
      <DialogContainer>
        <JustifyCenter flexDirection={'column'} minHeight={'110px'}>
          <ContextTypo theme={theme} dangerouslySetInnerHTML={{ __html: confirmDialog.confirmMessage }} />
        </JustifyCenter>
        <AlignCenter sx={{ gap: '6px' }}>
          {!confirmDialog.isOnlyConfirmActionDialog && (
            <CustomButton btntype={'outlined'} btnsize={'ssm'} onClick={onCancel}>
              취소
            </CustomButton>
          )}
          <CustomButton btnsize={'ssm'} onClick={onConfirm}>
            확인
          </CustomButton>
        </AlignCenter>
      </DialogContainer>
    </Dialog>
  );
};

export default ConfirmDialog;

const DialogContainer = styled(Box)({
  width: '320px',
  minHeight: '240px',
  background: '#fff',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '60px 27px 20px',
});

const ContextTypo = styled(Typography)((props: { theme: Theme }) => ({
  color: props.theme.palette.grey[700],
  fontWeight: '500',
  textAlign: 'center',
  whiteSpace: 'break-spaces',
  marginBottom: '20px',
  lineHeight: '150%',
  fontSize: '16px',
}));
