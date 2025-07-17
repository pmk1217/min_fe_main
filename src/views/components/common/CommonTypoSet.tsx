import styled from '@emotion/styled';
import { Typography } from '@mui/material';

//NOTE:특수: 페이지 제목 Typo
export const PageTitle = styled(Typography)((props: { underline?: string; istab?: string }) => {
  return {
    fontSize: '22px',
    fontWeight: '500',
    lineHeight: '140%',
    marginBottom: '20px',
    paddingBottom: props.underline === 'true' ? '10px' : '0px',
    borderBottom: props.underline === 'true' ? '2px solid #DF0A24' : 'none', // 2024-06-19 수정
    borderColor: props.istab === 'true' ? '#ccc' : undefined, // 2024-06-19 추가
  };
});
