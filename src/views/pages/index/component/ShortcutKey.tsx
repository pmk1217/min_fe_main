import { Box, styled, SvgIcon, Typography } from '@mui/material';
import React from 'react';
import ShortKey from '../../../components/keyboard/ShortKey';
import MiddleKey from '../../../components/keyboard/MiddleKey';
import LongKey from '../../../components/keyboard/LongKey';
import IconMouse from '../../../../assets/images/icons/ic_mouse.svg?react';
const ShortcutKey = () => {
  return (
    <ShorkcutKeyContainer>
      <KeyListContainer>
        <KeyList>
          <ShortKey label={'End'} />
        </KeyList>
        <ExplanationText>→ 현재 커서가 위치한 줄의 오른쪽 끝으로 커서 이동</ExplanationText>
      </KeyListContainer>

      <KeyListContainer>
        <KeyList>
          <MiddleKey label={'Shift'} /> <KeyText>+</KeyText>
          <ShortKey label={'End'} />
        </KeyList>
        <ExplanationText>→ 현재 커서가 위치한 줄의 오른쪽 끝까지 블록 처리</ExplanationText>
      </KeyListContainer>

      <KeyListContainer>
        <KeyList>
          <ShortKey label={'Home'} />
        </KeyList>
        <ExplanationText>→ 현재 커서가 위치한 줄의 왼쪽 끝으로 커서 이동</ExplanationText>
      </KeyListContainer>

      <KeyListContainer>
        <KeyList>
          <MiddleKey label={'Shift'} /> <KeyText>+</KeyText>
          <ShortKey label={'Home'} />
        </KeyList>
        <ExplanationText>→ 현재 커서가 위치한 줄의 쪽 끝까지 블록 처리</ExplanationText>
      </KeyListContainer>

      <KeyListContainer>
        <KeyList>
          <ShortKey label={'Ctrl'} /> <KeyText>+</KeyText>
          <ShortKey label={'←'} /> /
          <ShortKey label={'→'} />
        </KeyList>
        <ExplanationText>→ 커서를 단어단위로 이동</ExplanationText>
      </KeyListContainer>

      <KeyListContainer>
        <KeyList>
          <ShortKey label={'Alt'} />
          <KeyText>+</KeyText>
          <Box>
            <SvgIcon component={IconMouse} inheritViewBox sx={{ fill: 'none', fontSize: '35px' }} />
            <ClickText>Click</ClickText>
          </Box>
        </KeyList>
        <ExplanationText>→ 클릭한 위치에 멀티 커서 추가</ExplanationText>
      </KeyListContainer>

      <KeyListContainer>
        <KeyList>
          <ShortKey label={'Ctrl'} /> <KeyText>+</KeyText>
          <ShortKey label={'.'} />
        </KeyList>
        <ExplanationText>→ 에러 발생시 없는 모듈 자동으로 찾아주기</ExplanationText>
      </KeyListContainer>

      <KeyListContainer>
        <KeyList>
          <ShortKey label={'Alt'} /> <KeyText>+</KeyText>
          <ShortKey label={'↑'} /> /
          <ShortKey label={'↓'} />
        </KeyList>
        <ExplanationText>→ 현재 줄 위/아래로 이동</ExplanationText>
      </KeyListContainer>

      <KeyListContainer>
        <KeyList>
          <MiddleKey label={'Shift'} /> <KeyText>+</KeyText>
          <ShortKey label={'Alt'} /> <KeyText>+</KeyText>
          <ShortKey label={'↑'} /> /
          <ShortKey label={'↓'} />
        </KeyList>
        <ExplanationText>→ 현재 줄 복사</ExplanationText>
      </KeyListContainer>

      <KeyListContainer>
        <KeyList>
          <ShortKey label={'Ctrl'} /> <KeyText>+</KeyText>
          <ShortKey label={'X'} />
        </KeyList>
        <ExplanationText>→ 한 줄 삭제</ExplanationText>
      </KeyListContainer>

      <KeyListContainer>
        <KeyList>
          <ShortKey label={'Ctrl'} /> <KeyText>+</KeyText>
          <ShortKey label={'L'} />
        </KeyList>
        <ExplanationText>→ 코드 한 줄 선택</ExplanationText>
      </KeyListContainer>

      <KeyListContainer>
        <KeyList>
          <ShortKey label={'Ctrl'} /> <KeyText>+</KeyText>
          <ShortKey label={'D'} />
        </KeyList>
        <ExplanationText>→ 같은 단어 하나씩 선택</ExplanationText>
      </KeyListContainer>

      <KeyListContainer>
        <KeyList>
          <ShortKey label={'Ctrl'} /> <KeyText>+</KeyText>
          <MiddleKey label={'Shift'} /> <KeyText>+</KeyText>
          <ShortKey label={'L'} />
        </KeyList>
        <ExplanationText>→ 선택한 단어 전체 동시 수정</ExplanationText>
      </KeyListContainer>

      <KeyListContainer>
        <KeyList>
          <ShortKey label={'F2'} />
        </KeyList>
        <ExplanationText>→ 변수 이름 일괄 변경</ExplanationText>
      </KeyListContainer>

      <KeyListContainer>
        <KeyList>
          <MiddleKey label={'Shift'} /> <KeyText>+</KeyText>
          <ShortKey label={'Alt'} /> <KeyText>+</KeyText>
          <ShortKey label={'F'} />
        </KeyList>
        <ExplanationText>→ 들여쓰기 자동정렬</ExplanationText>
      </KeyListContainer>

      <KeyListContainer>
        <KeyList>
          <ShortKey label={'Ctrl'} /> <KeyText>+</KeyText>
          <MiddleKey label={'Shift'} /> <KeyText>+</KeyText>
          <ShortKey label={'\\'} />
        </KeyList>
        <ExplanationText>→ 여는 / 닫는 괄호로 점프</ExplanationText>
      </KeyListContainer>

      <KeyListContainer>
        <KeyList>
          <MiddleKey label={'Shift'} /> <KeyText>+</KeyText>
          <ShortKey label={'Alt'} /> <KeyText>+</KeyText>
          <Box>
            <SvgIcon component={IconMouse} inheritViewBox sx={{ fill: 'none', fontSize: '35px' }} />
            <ClickText>Drag</ClickText>
          </Box>
        </KeyList>
        <ExplanationText>→ 자유 영역 지정</ExplanationText>
      </KeyListContainer>

      <KeyListContainer>
        <KeyList>
          <MiddleKey label={'Shift'} /> <KeyText>+</KeyText>
          <ShortKey label={'Alt'} /> <KeyText>+</KeyText>
          <ShortKey label={'I'} />
        </KeyList>
        <ExplanationText>→ 드래그된 모든 줄의 끝에 커서 생성</ExplanationText>
      </KeyListContainer>

      <KeyListContainer>
        <KeyList>
          <ShortKey label={'Ctrl'} /> <KeyText>+</KeyText>
          <MiddleKey label={'Shift'} /> <KeyText>+</KeyText>
          <ShortKey label={'T'} />
        </KeyList>
        <ExplanationText>→ 닫은 탭 다시 열기</ExplanationText>
      </KeyListContainer>

      <KeyListContainer>
        <KeyList>
          <ShortKey label={'Ctrl'} /> <KeyText>+</KeyText>
          <ShortKey label={'L'} />
        </KeyList>
        <ExplanationText>→ 주소창으로 커서 이동</ExplanationText>
      </KeyListContainer>
    </ShorkcutKeyContainer>
  );
};

export default ShortcutKey;

const ShorkcutKeyContainer = styled(Box)({
  overflow: 'auto',
  height: '320px',
});

const KeyListContainer = styled(Box)({
  padding: '10px',
});

const KeyList = styled(Box)({
  display: 'flex',
  gap: '15px',
  alignItems: 'center',
});

const KeyText = styled(Typography)({
  fontSize: '20px',
  fontWeight: 'bold',
});

const ExplanationText = styled(Typography)({
  marginTop: '10px',
  fontSize: '15px',
  fontWeight: 'bold',
});

const ClickText = styled(Typography)({
  textAlign: 'center',
  fontSize: '15px',
  fontWeight: 'bold',
});
