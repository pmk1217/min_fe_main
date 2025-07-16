// 2024-12-11 추가
import { Box, Grid, IconButton, keyframes, Skeleton, styled, SvgIcon, Theme, Typography, useTheme } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { AlignCenter, FlexBox } from '../../../components/CommonLayoutComponents';
import './scss/main.scss';
import { MainContainer, ChatContainer, MessageList, Message, Avatar } from '@chatscope/chat-ui-kit-react';
import ImgEndChat from '../../../../assets/images/img-end-chat.svg?react';
import ic_tutor from '../../../../assets/images/icons/ic_tutor.svg';
import ic_user from '../../../../assets/images/icons/ic_user.svg';
import ic_go_down from '../../../../assets/images/icons/ic_go_down.svg';
import ic_scroll_to_top from '../../../../assets/images/icons/ic_scroll_to_top.svg';
import CustomButton from '../../../components/buttons/CustomButton';
import _ from 'lodash';
import CustomMessageInput from './components/CustomMessageInput';
import ProgressBar from './components/ProgressBar';
import HorizontalLine from './components/HorizontalLine';

interface MessageModel {
  message: string;
  sentTime: string;
  direction: 'incoming' | 'outgoing';
  //   S : 2024-12-12 추가
  isFeedback?: boolean;
  //   E : 2024-12-12 추가
}

const ChatIndex = () => {
  const theme = useTheme();
  const messageListRef = useRef(null);

  const [messageList, setMessageList] = useState<MessageModel[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [outgoingMessage, setOutgoingMessage] = useState<string>('');
  //  S : 2024-12-12 추가
  const [progressValue, setProgressValue] = useState<number>(0);
  //  S : 2024-12-12 추가

  const [isChatScrolled, setIsChatScrolled] = useState<boolean>(false);

  // body scroll Y 안생기게 처리
  useEffect(() => {
    document.body.style.overflowY = 'hidden';
    setInitMessage();

    return () => {
      document.body.style.overflowY = 'unset';
    };
  }, []);

  //S : 2024-12-12 추가
  useEffect(() => {
    // 질문이 총 4개라고 가정
    if (progressValue < 100 && messageList && messageList[messageList.length - 1]?.isFeedback) {
      const progressValue = (messageList.filter((message) => message.direction === 'outgoing').length / 4) * 100;
      setProgressValue(progressValue);
    }

    // return () => {
    //   setProgressValue(0);
    // };
  }, [messageList]);

  //E : 2024-12-12추가

  //스크롤 감지 event
  useEffect(() => {
    const container = document.querySelector('.scrollbar-container');
    container.addEventListener('scroll', () => handleScroll(container), { passive: true });
    return () => {
      container.removeEventListener('scroll', () => handleScroll());
    };
  }, []);

  //초기 메시지 세팅
  const setInitMessage = () => {
    setMessageList([
      {
        message: `PSM AI 모의면담을 시작하겠습니다.`,
        sentTime: new Date().toLocaleTimeString(),
        direction: 'incoming',
      },
      {
        message: `2023년도 자체감사 중 기억나는 것을 말씀해보세요.`,
        sentTime: new Date().toLocaleTimeString(),
        direction: 'incoming',
      },
    ]);
  };

  //답변 전송 handler
  const handleSendMessage = (message: string) => {
    setIsLoading(true);
    setMessageList([...messageList, { message, sentTime: new Date().toLocaleTimeString(), direction: 'outgoing' }]);
    setOutgoingMessage('');

    //S : 2024-12-12 변경
    //퍼블확인용
    setTimeout(() => {
      setIsLoading(false);
      //면담질문갯수 4개라고 가정
      if (messageList.filter((item) => item.direction === 'outgoing').length < 4) {
        setMessageList((prevList) => [
          ...prevList,
          {
            message:
              '튜터로서, 답변 내용을 평가해 드리겠습니다. \n 자체감사 목록에 있는 사례를 잘 말씀해주셨습니다.SV-5236 후단 차단밸브의 시건장치(CSO 또는 LO) 설치가 누락된 사례를 정확하게 기억하고 있으며, \n 핵심 키워드도 모두 포함한 좋은 답변이라고 평가합니다.',
            sentTime: new Date().toLocaleTimeString(),
            direction: 'incoming',
            isFeedback: true,
          },
        ]);
      }
    }, 2000);
    //E : 2024-12-12 변경
  };

  //답변 초기화 버튼 handler
  const handleClickClearChat = () => {
    setOutgoingMessage('');
  };

  //S :2024-12-12 추가

  //다음질문 버튼 handler
  const handleClickNextQuestion = (index: number) => {
    setMessageList((prevList) => [
      ...prevList,
      {
        message: '다음 질문입니다.',
        sentTime: new Date().toLocaleTimeString(),
        direction: 'incoming',
      },
    ]);

    // 다음 질문 버튼 클릭 후 unmount
    const nextBtn = document.querySelector(`.question-${index}`) as HTMLButtonElement;
    nextBtn.style.display = 'none';
  };
  //E : 2024-12-12 추가

  //채팅창 scroll handler
  const handleScroll = _.throttle((scrollable?: any) => {
    const threshold = 100;
    const isScrolled = Math.abs(scrollable.scrollHeight - scrollable.clientHeight - scrollable.scrollTop) > threshold;
    setIsChatScrolled(isScrolled);
  }, 100); // 100ms 단위로 호출

  //  S : 2024-12-12 변경
  //수신 메시지
  const tutorMessage = (content: string, index: number, isFeedback?: boolean) => (
    <MessageArea key={index} className={'incoming'}>
      <AvatarArea>
        <Avatar src={ic_tutor} name="튜터" />
        <Typography variant={'body2'} fontWeight={700} textAlign={'center'}>
          튜터
        </Typography>
      </AvatarArea>

      <Message
        model={{
          direction: 'incoming',
          position: 'single',
        }}
      >
        <Message.CustomContent>
          <Typography
            sx={{ fontWeight: 400, margin: '20px 0px', fontSize: '15px', lineHeight: '170%' }}
            dangerouslySetInnerHTML={{ __html: content }}
          ></Typography>
          {/* 피드백 메시지일때 다음질문 버튼 */}
          {isFeedback && messageList.filter((message) => message.direction === 'outgoing').length < 4 && (
            <AlignCenter mb={1} sx={{ justifyContent: 'flex-end' }}>
              <CustomButton
                className={`question-${index}`}
                btntype="primaryOutlined"
                btnsize="ssm"
                onClick={() => handleClickNextQuestion(index)}
              >
                다음 질문
              </CustomButton>
            </AlignCenter>
          )}
        </Message.CustomContent>
      </Message>
    </MessageArea>
  );
  //  E : 2024-12-12 변경

  //발신 메시지
  const myMessage = (content: string, index: number) => (
    <MessageArea key={index} className={'outgoing'}>
      <Message
        model={{
          direction: 'outgoing',
          position: 'single',
        }}
      >
        <Message.CustomContent>
          <Box dangerouslySetInnerHTML={{ __html: content }} />
        </Message.CustomContent>
      </Message>
      <AvatarArea>
        <Avatar src={ic_user} name="사용자" size="md" className="user-profile" />
        <Typography variant={'body2'} fontWeight={700} textAlign={'center'}>
          사용자
        </Typography>
      </AvatarArea>
    </MessageArea>
  );

  //수신메시지 로딩 UI
  const generatingMessage = () => (
    <MessageArea className={'generating'}>
      <AvatarArea>
        <Avatar src={ic_tutor} name="튜터" />
        <Typography variant={'body2'} fontWeight={700} textAlign={'center'}>
          튜터
        </Typography>
      </AvatarArea>

      <Message
        model={{
          direction: 'incoming',
          position: 'single',
        }}
      >
        <Message.CustomContent>
          <Typography variant={'h6'} component={'p'}>
            로딩중입니다.
          </Typography>
          <WhiteBgBox theme={theme} sx={{ marginTop: '20px' }}>
            <Box sx={{ width: 400 }}>
              <Skeleton animation="wave" />
              <Skeleton animation="wave" width="60%" />
              <Skeleton animation="wave" width="80%" />
            </Box>
          </WhiteBgBox>
        </Message.CustomContent>
      </Message>
    </MessageArea>
  );

  //면담 종료 UI
  const endMessage = () => (
    <MessageArea className={'incoming'}>
      <AvatarArea>
        <Avatar src={ic_tutor} name="튜터" />
        <Typography variant={'body2'} fontWeight={700} textAlign={'center'}>
          튜터
        </Typography>
      </AvatarArea>

      <Message
        model={{
          direction: 'incoming',
          position: 'single',
        }}
      >
        <Message.CustomContent>
          <EndChatContainer>
            <SvgIcon component={ImgEndChat} inheritViewBox sx={{ fill: 'none' }} />
            <Typography>
              면담이 종료되었습니다. <br />
              종료 버튼을 누르면 면담이 종료되고 면담 이력을 확인할 수 있습니다.
            </Typography>
            <CustomButton btntype="primaryOutlined" btnsize="ssm">
              면담 종료
            </CustomButton>
          </EndChatContainer>
        </Message.CustomContent>
      </Message>
    </MessageArea>
  );

  return (
    <MainContainer>
      <ProgressBar value={progressValue} />
      <ChatContainer>
        {/* S : 2024-12-12 변경 */}
        <MessageList ref={messageListRef} scrollBehavior="auto">
          {/* E : 2024-12-12 변경 */}
          {messageList.map((message, index) => (
            <React.Fragment key={index}>
              {message.direction === 'incoming' && tutorMessage(message.message, index, message.isFeedback)}
              {message.direction === 'outgoing' && myMessage(message.message, index)}
              {/* S : 2024-12-12 추가 */}
              {/* 절취선 */}
              {message.isFeedback && index < messageList.length - 1 && !messageList[index + 1].isFeedback && <HorizontalLine />}
              {/* E : 2024-12-12 추가 */}
            </React.Fragment>
          ))}
          {isLoading && generatingMessage()}
          {/* S : 2024-12-12 추가 */}
          {progressValue >= 100 && !isLoading && endMessage()}
          {/* E : 2024-12-12 추가 */}
        </MessageList>
      </ChatContainer>
      <CustomMessageInput
        isGenerating={isLoading}
        inputValue={outgoingMessage}
        handleInputChange={(e) => setOutgoingMessage(e)}
        handleInputSend={handleSendMessage}
        handleInputClear={handleClickClearChat}
        //S : 2024-12-12 추가
        disabled={progressValue >= 100 || messageList?.[messageList?.length - 1]?.isFeedback}
        //E : 2024-12-12 추가
      />
      {/* S : 2024-12-12 변경 */}
      {isChatScrolled && (
        <ScrollButtonContainer>
          <IconButton onClick={() => messageListRef?.current?.scrollToBottom('auto')}>
            <Box component="img" src={ic_go_down} alt={'go to bottom'} />
          </IconButton>
        </ScrollButtonContainer>
      )}
      {/* E : 2024-12-12 변경 */}
    </MainContainer>
  );
};

const slideUp = keyframes`
    0% {
      transform: translateY(100%);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  `;

const fadeIn = keyframes`
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  `;

const MessageArea = styled(AlignCenter)({
  gap: '4px',
  paddingTop: '10px',
  '& + .MuiBox-root': { marginTop: '20px' },
  '&.outgoing, &.generating': {
    animation: `${slideUp} 0.5s ease-in-out forwards`,
  },
  '& .cs-message__content': {
    background: '#f1f1f1',
    padding: '14px 20px',
  },
  '&.generating': { opacity: 0, animationDelay: '1s' },
  '&.incoming .cs-message__custom-content': {
    animation: `${fadeIn} 1s ease-in-out forwards`,
    '& p': {
      fontSize: '16px',
      color: '#111',
      margin: 0,
    },
  },
});

const AvatarArea = styled(AlignCenter)({
  marginTop: '-10px',
  flexDirection: 'column',
  alignSelf: 'flex-start',
  '.MuiTypography-root': {
    fontSize: '14px',
    fontWeight: '400',
    color: '#444',
  },
  '& .cs-avatar.cs-avatar--md': {
    width: '36px',
    height: '36px',
    minWidth: '36px',
    minHeight: '36px',
    marginBottom: '6px',
  },
  '& .cs-avatar > img': {
    borderRadius: 0,
  },
  '& .cs-avatar.user-profile': {
    width: '46px',
    height: '46px',
    minWidth: '46px',
    minHeight: '46px',
  },
});

const WhiteBgBox = styled(Box)((props: { theme: Theme }) => {
  return {
    padding: '16px 30px',
    backgroundColor: props.theme.palette.background.default,
    borderRadius: '8px',
  };
});

const EndChatContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '20px',
  paddingBottom: '30px',
  '& svg': {
    fontSize: '280px',
  },
  '& p': {
    textAlign: 'center',
  },
});

const ScrollButtonContainer = styled(Box)({
  position: 'absolute',
  bottom: '120px',
  right: '10px',
  zIndex: 10,
});

export default ChatIndex;
