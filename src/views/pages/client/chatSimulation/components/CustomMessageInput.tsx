// 2024-12-11 추가
import { MessageInput } from '@chatscope/chat-ui-kit-react';
import { MessageInputProps } from '@chatscope/chat-ui-kit-react/src/components/MessageInput/MessageInput';
import { Box, colors, IconButton, styled, SvgIcon, Theme, Tooltip, Typography, useTheme } from '@mui/material';
import IconArrow from '../../../../../assets/images/icons/ic_arrow_red.svg?react';
import IconCircleClose from '../../../../../assets/images/icons/ic_round_24_modal_close.svg?react';
import IconMic from '.././../../../../assets/images/icons/ic_mic.svg?react';
import IconMicDisabled from '.././../../../../assets/images/icons/ic_mic_disabled.svg?react';
import { useEffect, useRef, useState } from 'react';
import CustomButton from '../../../../components/buttons/CustomButton';
import { AlignCenter } from '../../../../components/CommonLayoutComponents';

interface CustomMessageInputProps extends MessageInputProps {
  isGenerating: boolean;
  inputValue: string;
  handleInputChange: (e) => void;
  handleInputSend: (message: string) => void;
  handleInputClear: () => void;
  handleResetChat?: () => void;
  //S : 2024-12-12 추가
  disabled?: boolean;
  //E : 2024-12-12 추가
}

const CustomMessageInput = (props: CustomMessageInputProps) => {
  const theme = useTheme();
  const refInput = useRef(null);
  //S : 2024-12-12 추가
  const [isAudioInput, setIsAudioInput] = useState<boolean>(false);
  //E : 2024-12-12 추가

  //S : 2024-12-12 변경
  useEffect(() => {
    if (!props.disabled) {
      refInput.current.focus();
    }
  }, [props.disabled]);
  //E : 2024-12-12 변경

  //S : 2024-12-12 추가
  const handleSendMessage = (message: string) => {
    props.handleInputSend(message);
    setIsAudioInput(false);
  };
  //E : 2024-12-12 추가

  return (
    <MessageInputArea>
      <NewChatBtnArea theme={theme}>
        <Typography>답변을 입력하세요.</Typography>
        <Typography>
          (speech{' '}
          <Box component={'span'} sx={{ transform: 'translateY(1px)' }}>
            🎙️
          </Box>{' '}
          or text{' '}
          <Box component={'span'} sx={{ transform: 'translateY(-1px)' }}>
            ⌨️
          </Box>
          )
        </Typography>
      </NewChatBtnArea>
      <AlignCenter>
        {/* S : 2024-12-12 추가 */}
        <BtnAudio>
          {!props.disabled && isAudioInput ? (
            <IconMic onClick={() => setIsAudioInput(!isAudioInput)} />
          ) : (
            <IconMicDisabled onClick={() => setIsAudioInput(!isAudioInput)} />
          )}
        </BtnAudio>
        {/* E: 2024-12-12 추가 */}
        <MessageInput
          attachButton={false}
          // placeholder={'답변을 입력하세요'}
          value={props.inputValue}
          onChange={props.handleInputChange}
          // S : 2024-12-12 변경
          onSend={handleSendMessage}
          // E : 2024-12-12 변경
          onPaste={(event) => {
            event.preventDefault();
            props.handleInputChange(props.inputValue.concat(event.clipboardData.getData('text')));
          }}
          // S : 2024-12-12 변경
          disabled={props.isGenerating || props.disabled}
          sendDisabled={props.isGenerating || props.disabled}
          // E : 2024-12-12 변경
          ref={refInput}
        />
        {props.inputValue && (
          <BtnClear theme={theme} onClick={props.handleInputClear}>
            <IconCircleClose />
          </BtnClear>
        )}
      </AlignCenter>
    </MessageInputArea>
  );
};

export default CustomMessageInput;

const MessageInputArea = styled(Box)({
  width: '100%',
  order: 1,
  '&::before': {
    content: '""',
    position: 'absolute',
    left: 0,
    right: 0,
    top: '-40px',
    width: '100%',
    height: 40,
    background: 'linear-gradient(to bottom, transparent, #fff)',
    zIndex: 1,
  },
  '& .cs-message-input': {
    height: '100px',
  },
  '& .cs-message-input__tools': {
    height: '100%',
  },
  '& .cs-button--send': {
    background: '#B27071',
  },
});

const BtnAudio = styled(IconButton)((props: { theme: Theme }) => {
  return {
    position: 'absolute',
    left: '20px',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 10,
    svg: {
      fontSize: '46px',
    },
  };
});

const NewChatBtnArea = styled(AlignCenter)((props: { theme: Theme }) => {
  return {
    position: 'absolute',
    left: '0px',
    top: '-34px',
    justifyContent: 'flex-end',
    gap: '10px',
    zIndex: 2,
    '& p': {
      verticalAlign: 'middle',
      color: '#444',
      fontSize: '15px',
    },
  };
});

const BtnClear = styled(IconButton)((props: { theme: Theme }) => {
  return {
    position: 'absolute',
    right: 150,
    top: '50%',
    transform: 'translateY(-50%)',
    svg: {
      fontSize: 18,
      rect: {
        fill: props.theme.palette.grey[200],
      },
      path: {
        fill: props.theme.palette.background.default,
      },
    },
  };
});
