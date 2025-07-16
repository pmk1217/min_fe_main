// 2024-12-11 추가
import { Box, colors, FormControl, MenuItem, Select, styled, SvgIcon, Theme, Typography, useTheme } from '@mui/material';
import React, { useState } from 'react';
import { AlignCenter, FlexBox, JustifyCenter } from '../../../../components/CommonLayoutComponents';
import CustomButton from '../../../../components/buttons/CustomButton';
import IconArrow from '../../../../../assets/images/icons/ic_arrow_right.svg?react';
import IconSpeaker from '../../../../../assets/images/icons/ic_speaker.svg?react';
import IconTriangle from '../../../../../assets/images/icons/ic_triangle_right.svg?react';
import IconDownload from '../../../../../assets/images/icons/ic_download.svg?react';
import useConfirm from '../../../../../utils/ConfirmDialogUtils';
import { useNavigate } from 'react-router-dom';

const BasicInformation = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { confirm } = useConfirm();

  const [selectedInfo, setSelectedInfo] = useState<{ affiliation: string; position: string }>({ affiliation: '선택', position: '선택' });

  return (
    <BasicInfoContainer>
      <Box sx={{ width: 'calc(50% - 55px)' }}>
        <Box>
          <AlignCenter>
            <GradientText variant="h4">PSM AI 모의면담에 오신 것을 환영합니다!</GradientText>
            <Typography fontSize={'28px'}>😊</Typography>
          </AlignCenter>
          <AlignCenter>
            <GradientText variant="h4">면담을 시작하기 전에 기본정보를 입력해주세요.</GradientText>
          </AlignCenter>
        </Box>
        <Box mt={5}>
          <AlignCenter gap={'10px'}>
            <SvgIcon component={IconTriangle} inheritViewBox sx={{ fill: 'none' }} />
            <Typography variant="h4">소속 및 직책을 선택해주세요</Typography>
          </AlignCenter>
          <AlignCenter gap={'10px'}>
            <FormControl variant="standard" sx={{ marginTop: '14px', paddingLeft: '34px' }}>
              <Select
                size={'small'}
                onChange={(e) => setSelectedInfo({ ...selectedInfo, affiliation: e.target.value as string })}
                sx={styles.selectBox}
                value={selectedInfo.affiliation}
              >
                <MenuItem value="선택">선택</MenuItem>
                <MenuItem value="HPM">HPM공장</MenuItem>
                <MenuItem value="AAA">AAA공장</MenuItem>
                <MenuItem value="BBB">BBB공장</MenuItem>
                <MenuItem value="CCC">CCC공장</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="standard" sx={{ marginTop: '14px' }}>
              <Select
                size={'small'}
                defaultValue={'선택'}
                onChange={(e) => setSelectedInfo({ ...selectedInfo, position: e.target.value as string })}
                sx={styles.selectBox}
                value={selectedInfo.position}
              >
                <MenuItem value="선택">선택</MenuItem>
                <MenuItem value="과장">전문과장</MenuItem>
                <MenuItem value="차장">전문차장</MenuItem>
                <MenuItem value="부장">전문부장</MenuItem>
                <MenuItem value="이사">전문이사</MenuItem>
              </Select>
            </FormControl>
          </AlignCenter>
        </Box>
      </Box>
      <Box sx={{ width: 'calc(50% - 55px)' }}>
        <Box sx={styles.downloadBtnWrapper}>
          <CustomButton btntype="outlined" btnsize="sm">
            매뉴얼 다운로드
            <SvgIcon component={IconDownload} inheritViewBox sx={{ fill: 'none' }} />
          </CustomButton>
        </Box>
        <GuideBox theme={theme}>
          <SvgIcon component={IconSpeaker} inheritViewBox sx={{ fill: 'none' }} />
          <Box>
            <Typography variant="h5">
              면담 시뮬레이션 진행 중 자리를 이탈하거나 화면을 끄면 면담 내용이 저장되지 않으니 주의하세요. <br />
              마지막 질문까지 답변해야 면담 이력이 저장됩니다.
            </Typography>
            <Typography>
              면담은 총 <Box component={'span'}>10문항, 약 15분</Box> 소요 됩니다.
            </Typography>
            <JustifyCenter mt={5}>
              <CustomButton
                btntype="primaryOutlined"
                onClick={() =>
                  confirm('모의 면담으로 이동하시겠습니까?', () => {
                    navigate('/chat');
                  })
                }
              >
                모의 면담 하러가기 <SvgIcon component={IconArrow} inheritViewBox sx={{ fill: 'none' }} />
              </CustomButton>
            </JustifyCenter>
          </Box>
        </GuideBox>
      </Box>
    </BasicInfoContainer>
  );
};

const BasicInfoContainer = styled(FlexBox)({
  marginTop: '100px',
  justifyContent: 'space-between',
  // height: 'calc(100% - 44px)',
});

const GradientText = styled(Typography)({
  background: 'linear-gradient(90deg, #333333, #C26465)', // 원하는 그라데이션 색상
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontWeight: 800,
  fontSize: '30px',
  whiteSpace: 'nowrap',
});

const GuideBox = styled(Box)((props: { theme: Theme }) => {
  return {
    width: '100%',
    minWidth: '504px',
    height: '380px',
    boxShadow: '0 0 30px 0 #F0DADE',
    position: 'absolute',
    top: '100px',
    '>svg': {
      position: 'absolute',
      fontSize: '80px',
      left: '24px',
      top: '28px',
    },
    '> div': {
      position: 'relative',
      padding: '30px 84px',
      display: 'flex',
      width: '100%',
      height: '100%',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    '& h5': {
      color: '#444',
      fontWeight: 600,
      fontSize: '20px',
      lineHeight: '150%',
      '@media (max-width: 1902px)': {
        fontSize: '18px',
      },
    },
    '& p': {
      fontSize: '18px',
      marginTop: '20px',
      '& > span': {
        color: props.theme.palette.primary.main,
      },
    },
  };
});

const styles = {
  selectBox: {
    width: '200px',
  },
  downloadBtnWrapper: {
    textAlign: '-webkit-right',
  },
};

export default BasicInformation;
