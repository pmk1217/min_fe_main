import styled from '@emotion/styled';
import { Theme, Box, Divider, Typography } from '@mui/material';
import { PageTitle } from '../common/CommonTypoSet';
import { AlignCenter } from '../CommonLayoutComponents';

export const DialogBox = styled(Box)({
  padding: '35px 40px',
  background: '#fff',
  borderRadius: '16px',
  minWidth: '300px',
});

export const DialogTitle = styled(PageTitle)({
  marginBottom: '20px',
  fontSize: '20px',
  fontWeight: 'bold',
});

export const DialogTitleDivider = styled(Divider)((props: { theme: Theme }) => {
  return {
    width: '100%',
    height: '1px',
    background: props.theme.palette.primary.main,
    marginBottom: '20px',
  };
});

export const DialogPositioner = styled(Box)({
  padding: '10px 10px 20px',
  overflowX: 'hidden',
});

export const DialogScrollSizer = styled(Box)({
  paddingLeft: '10px',
  paddingRight: '17px',
  maxHeight: '300px',
  overflowY: 'auto',
  // marginBottom: '20px',
  // overflowX: 'hidden',
  // textOverflow : 'ellipsis',
  // whiteSpace : 'nowrap'
});

export const GreyContainer = styled(AlignCenter)({
  padding: '10px 20px',
  background: '#f6f6f6',
  border: '1px solid #dddddd',
  marginBottom: '20px',
  justifyContent: 'space-between',
});

export const LightGreyContainer = styled(Box)({
  padding: '30px 20px',
  borderRadius: '8px',
  background: '#f6f6f6',
  border: '1px solid #ccc',
  marginBottom: '20px',
});

export const HeightLimitScroller = styled(Box)((props: { height?: number; borderBottom?: string }) => {
  return {
    '& .MuiTableContainer-root': {
      height: props.height ? `${props.height}px` : 'auto',
    },
    '& tr:last-of-type': {
      borderBottom: props.borderBottom === 'true' ? '1px solid #eee' : 'none', // table의 맨 밑에만 border-bottom이 있는 경우
    },
  };
});

export const DialogSubTitle = styled(Typography)({
  fontWeight: '500',
  marginBottom: '10px',
  paddingLeft: '10px',
  borderLeft: `1px solid #eee`,
});

export const DialogBorder = styled(Box)({
  borderBottom: '1px solid #ccc',
  marginBottom: '20px',
});

interface FileNameModuleProps {
  theme: Theme;
  fileName: string;
  children?: React.ReactElement;
  isHideTitle?: boolean;
  isCommunity?: boolean;
  onClick?: () => void;
}

export const FileNameModule = (props: FileNameModuleProps) => {
  return (
    <AlignCenter sx={{ mb: '10px', '& img': { width: '12px', height: '12px', marginLeft: '10px' } }}>
      {!props.isHideTitle && (
        <Typography variant="h6" sx={{ mr: '4px', color: '#777' }}>
          {'파일이름'} :
        </Typography>
      )}
      <Typography
        variant="h6"
        sx={{ color: props.theme.palette.primary.main, mr: '10px', maxWidth: props.isCommunity ? 'calc(100% - 100px)' : 'auto' }}
      >
        {props.fileName}
      </Typography>
      {props.children}
    </AlignCenter>
  );
};
