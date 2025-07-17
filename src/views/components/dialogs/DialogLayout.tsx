import styled, { CSSObject } from '@emotion/styled';
import { Dialog, DialogActions, IconButton, Box, useTheme, DialogContent, FormControlLabel, Typography } from '@mui/material';
import { AlignCenter, CenterBox } from '../CommonLayoutComponents';
import { DialogBox, DialogTitle, DialogTitleDivider } from './StyledDialogLayout';
import ic_round_24_modal_close from '../../../assets/images/icons/ic_round_24_modal_close.svg';
import ic_dialog_close_fix from '../../../assets/images/icons/ic_dialog_close_fix.svg';
import ic_close from '../../../assets/images/icons/ic_close.svg';
// import _OutlinedButton from '../../components/button/_OutlinedButton';
// import _PrimaryButton from '../../components/button/_PrimaryButton.tsx';
// import _SecondaryButton from '../../components/button/_SecondaryButton';
// import { CustomCheckbox } from '../../components/checkbox/MuiCheckbox.tsx';
import { SetStateAction, useEffect } from 'react';
import CustomButton from '../buttons/CustomButton';

interface DialogLayoutProps {
  title?: string;
  children: React.ReactElement;
  handleClose: () => void;
  handleConfirm?: () => void;
  isConfirm?: boolean;
  confirmTxt?: string;
  closeTxt?: string; // 2024-07-17 추가 (닫기버튼 문구 수정)
  isOpen: boolean;
  isMainDialog?: boolean; //NOTE: main페이지 dialog는 우측 상단에 x버튼이 다름 / 확인버튼 없음
  isDownloadDialog?: boolean; //NOTE: 다운로드 dialog는 확인버튼 대신 Secondary 다운로드 버튼이 있음 (일반은 Primary)
  disabled?: boolean;
  isPeriodHidden?: {
    // 일주일, 오늘 보지 않기 관련 props
    // txt: string;
    // onClick: () => void;
    noticeId: number;
    checkedPeriod: number[];
    setCheckedPeriod: React.Dispatch<SetStateAction<Map<number, number[]>>>;
  };
  sx?: CSSObject;
}

const DialogLayout = (props: DialogLayoutProps) => {
  const theme = useTheme();

  const handleSetHidePeriod = (period: number) => {
    let tempCheckedPeriod: number[] = props.isPeriodHidden.checkedPeriod;
    if (props.isPeriodHidden.checkedPeriod.includes(period)) {
      tempCheckedPeriod = tempCheckedPeriod.filter((item) => item !== period);
    } else {
      tempCheckedPeriod = [...tempCheckedPeriod, period];
    }
    props.isPeriodHidden.setCheckedPeriod((prev) => new Map(prev).set(props.isPeriodHidden.noticeId, tempCheckedPeriod));
  };

  useEffect(() => {
    if (props.isPeriodHidden && props.isPeriodHidden.checkedPeriod && props.isPeriodHidden.checkedPeriod.length > 0) {
      props.handleClose();
    }
  }, [props.isPeriodHidden]);

  return (
    <Dialog onClose={props.handleClose} open={props.isOpen} sx={styles.dialogArea}>
      <DialogBox sx={{ ...styles, ...(props.sx && props.sx) }}>
        <DialogTitle variant="h3">{props.title}</DialogTitle>
        <IconButtonPositioner aria-label="close" onClick={props.handleClose}>
          <Box component="img" src={ic_dialog_close_fix} alt="dialog close icon" width={'30px'} />
        </IconButtonPositioner>
        {/* <DialogTitleDivider theme={theme} /> */}

        <DialogContent>{props.children}</DialogContent>
        <DialogActions>
          {/* {props.isPeriodHidden && (
            <PoAbLeft>
              <AlignCenter sx={{ gap: '8px', cursor: 'pointer' }} onClick={() => handleSetHidePeriod(7)}>
                <CustomCheckbox checked={props.isPeriodHidden.checkedPeriod?.includes(7)} />
                <Typography>{t(TextKeys.TEXT_COMMUNITY_019)}</Typography>
              </AlignCenter>
              <AlignCenter sx={{ gap: '8px', cursor: 'pointer' }} onClick={() => handleSetHidePeriod(1)}>
                <CustomCheckbox checked={props.isPeriodHidden.checkedPeriod?.includes(1)} />
                <Typography>{t(TextKeys.TEXT_COMMUNITY_020)}</Typography>
              </AlignCenter>
            </PoAbLeft>
          )} */}
          <CustomButton btnsize="sm" onClick={props.handleClose}>
            {props?.closeTxt ? props.closeTxt : '닫기'}
          </CustomButton>
          {((!props.isMainDialog && !props.isDownloadDialog) || props.isConfirm) && (
            <CustomButton btnsize="sm" onClick={props.handleConfirm ?? props.handleClose} disabled={props.disabled ?? false}>
              {props?.confirmTxt ? props.confirmTxt : '확인'}
            </CustomButton>
          )}
          {/* {props.isDownloadDialog && <_SecondaryButton size="small">{t(ButtonKeys.DOWNLOAD)}</_SecondaryButton>} */}
        </DialogActions>
      </DialogBox>
    </Dialog>
  );
};

export default DialogLayout;

const IconButtonPositioner = styled(IconButton)({
  position: 'absolute',
  right: '35px',
  top: '20px',
});

const styles = {
  '& > div:last-of-type': {
    padding: '0px',
  },
  '& > div:last-of-type > div': {
    flex: '1',
  },
  '& > div:last-of-type > div > button:last-of-type': {
    marginLeft: '6px',
  },
  // S: 2024-04-19 추가
  dialogArea: {
    '& ~ .MuiDialog-root': {
      '.MuiDialog-container': { left: '20px', top: '20px' },
      '& ~ .MuiDialog-root': {
        '.MuiDialog-container': { left: '40px', top: '40px' },
      },
    },
  },
  // E: 2024-04-19 추가
};
