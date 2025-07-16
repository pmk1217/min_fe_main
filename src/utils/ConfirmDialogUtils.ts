// 2024-12-11 추가
import { useDialogStore } from '../stores/common/DialogStore';

const useConfirm = () => {
  const { confirmDialog } = useDialogStore();

  //param 1 : 확인 문구, param 2 : 확인 클릭시 다음 callback, param 3(optional) : true 일시 확인버튼만 제공, false일시 확인,취소 버튼 제공 (기본 false)
  const showConfirmDialog = (confirmMessage: string, onConfirm: () => void, isOnlyConfirm?: boolean) => {
    isOnlyConfirm ? confirmDialog.actions.setIsOnlyConfirmActionDialog(true) : confirmDialog.actions.setIsOnlyConfirmActionDialog(false);
    confirmDialog.actions.setConfirmMessage(confirmMessage);
    confirmDialog.actions.setIsOpen(true);
    confirmDialog.actions.setOnActionConfirm(onConfirm);
  };
  return { confirm: showConfirmDialog };
};

// 사용예시
// const {confirm} = useConfirm();
// confirm('진행 하시겠습니까?', () => window.open('www.naver.com'), true)

export default useConfirm;
