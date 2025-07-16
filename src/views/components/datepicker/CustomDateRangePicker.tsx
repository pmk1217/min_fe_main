// 2024-12-12 추가
import React, { useEffect, useState } from 'react';
import { DateRange, RangeKeyDict } from 'react-date-range';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { Box, Button, Popover, styled, SvgIcon, Typography, useTheme } from '@mui/material';
import { DateTimeFormat } from '../../../utils/DateTimeUtils';
import IconCalender from '../../../assets/images/icons/ic_calender.svg?react';
import IconReset from '../../../assets/images/icons/ic_reset.svg?react';
import CustomButton from '../buttons/CustomButton';
import { AlignCenter } from '../CommonLayoutComponents';
import { CSSObject } from '@emotion/react';

interface DateRangePickerProps {
  initialRange?: { startDate: Date; endDate: Date }; // 초기 날짜 범위
  minDate?: Date; // 선택 가능한 최소 날짜
  maxDate?: Date; // 선택 가능한 최대 날짜
  disabledDates?: Date[]; // 비활성화할 날짜
  showPreview?: boolean; // 날짜 미리보기 활성화 여부
  onSearch?: (range: { startDate: Date; endDate: Date }) => void; // 검색 버튼 클릭 핸들러
  onReset?: () => void; //있으면 리셋 버튼 제공
  sx?: CSSObject;
}

const CustomDateRangePicker = (props: DateRangePickerProps) => {
  const theme = useTheme();

  const [selectionRange, setSelectionRange] = useState({
    startDate: props.initialRange.startDate,
    endDate: props.initialRange.endDate,
    key: 'selection',
  });

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (ranges: RangeKeyDict) => {
    const { startDate, endDate } = ranges.selection;
    setSelectionRange({ ...selectionRange, startDate, endDate });
  };

  const handleSearch = () => {
    if (props.onSearch) {
      props.onSearch({
        startDate: selectionRange.startDate,
        endDate: selectionRange.endDate,
      });
    }
    handleClose();
  };

  //focus out 시 이전 선택 날짜로 reset
  const resetToPrevious = () => {
    setSelectionRange({ startDate: props.initialRange.startDate, endDate: props.initialRange.endDate, key: 'selection' });
  };

  //날짜 미지정 상태로 reset
  const handleReset = () => {
    props.onReset();
    setSelectionRange({ startDate: null, endDate: null, key: 'selection' });
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <AlignCenter sx={{ gap: '8px', ...props.sx }}>
      <DateRangeButton aria-describedby={id} variant="contained" onClick={handleClick}>
        <SvgIcon component={IconCalender} inheritViewBox sx={{ fill: 'none' }} />
        <Typography>
          {selectionRange.startDate && selectionRange.endDate
            ? `${format(selectionRange.startDate, DateTimeFormat.YYYYMMDD_DOT)} ~ ${format(selectionRange.endDate, DateTimeFormat.YYYYMMDD_DOT)}`
            : '날짜를 선택해주세요'}
        </Typography>
      </DateRangeButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={() => {
          resetToPrevious();
          handleClose();
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <DateRangeContainer>
          <DateRange
            ranges={[
              {
                ...selectionRange,
                startDate: selectionRange.startDate ?? new Date(),
                endDate: selectionRange.endDate ?? new Date(),
              },
            ]}
            onChange={handleSelect}
            minDate={props.minDate}
            maxDate={props.maxDate}
            disabledDates={props.disabledDates}
            showDateDisplay={props.showPreview}
            rangeColors={['#B27071']}
            locale={ko}
          />
          <AlignCenter sx={{ gap: '4px', marginTop: '8px' }}>
            <CustomButton
              btntype="primaryOutlined"
              btnsize="ssm"
              onClick={() => {
                resetToPrevious();
                handleClose();
              }}
            >
              취소
            </CustomButton>
            <CustomButton btntype="primary" btnsize="ssm" onClick={handleSearch}>
              검색
            </CustomButton>
          </AlignCenter>
        </DateRangeContainer>
      </Popover>
      {/* reset 옵션 있는 경우 버튼 제공 */}
      {props.onReset && (
        <ResetButton onClick={handleReset}>
          <SvgIcon component={IconReset} sx={{ fill: 'none' }} inheritViewBox />
        </ResetButton>
      )}
    </AlignCenter>
  );
};

const DateRangeButton = styled(Button)({
  minWidth: '300px',
  background: '#fff',
  border: '1px solid #EAEAEA',
  borderRadius: 5,
  padding: '8px 20px',
  color: '#8B8B8B',
  boxShadow: 'none',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: '10px',
  ':hover': {
    boxShadow: 'none',
    background: '#fafafa',
  },
});

const DateRangeContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '8px 16px',
  backgroundColor: '#f9f9f9',
});

const ResetButton = styled(Button)({
  padding: '8px',
  border: '1px solid #EAEAEA',
  borderRadius: '5px',
});
export default CustomDateRangePicker;
