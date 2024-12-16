import { useRouter } from 'next/router';
import { FormEvent, Fragment, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { css } from '@emotion/react';
import {
  AppBar,
  Bubble,
  CapsuleButton,
  ChatInputForm,
  InputFormRef,
  Layout,
  Tag,
  Text,
  theme,
} from '@daengle/design-system';
import { DefaultImage } from '@daengle/design-system/icons';
import { useStomp } from '@daengle/services/hooks';
import { ROUTES } from '~/constants/commons';
import { MessageInfos, ReceivedMessage } from '~/interfaces';
import { useGetChatWithQuery, usePostChatMessages } from '~/queries';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';

export default function ChatRoom() {
  const router = useRouter();
  const chatRoomId = router.query.chatRoomId as string;
  const service = router.query.service as string;
  const otherId = router.query.otherId as string;

  const [messages, setMessages] = useState<MessageInfos[]>([]);

  const inputRef = useRef<InputFormRef>(null);
  const chatListRef = useRef<HTMLDivElement>(null);

  const { mutate } = usePostChatMessages();
  const { data: chatHistory } = useGetChatWithQuery(otherId);

  const otherName = useMemo(
    () => (service === 'groomer' ? `${chatHistory?.otherName} 디자이너` : chatHistory?.otherName),
    [chatHistory?.otherName, service]
  );

  const { sendMessage, connect } = useStomp({
    url: `${process.env.NEXT_PUBLIC_API_URL}/chat`,
    topic: `/sub/${chatRoomId}`,
    onMessage: (message: ReceivedMessage) => {
      const currentDate = dayjs().format('YYYY-MM-DD');

      setMessages((prevMessages) => {
        const lastGroup = prevMessages[prevMessages.length - 1];

        if (lastGroup && lastGroup.date === currentDate) {
          return [
            ...prevMessages.slice(0, -1),
            {
              ...lastGroup,
              messages: [
                ...lastGroup.messages,
                {
                  messageType: message.messageType,
                  messageContent: message.content,
                  isSender: message.senderId === Number(chatHistory?.userId),
                  messageTime: message.timestamp,
                },
              ],
            },
          ];
        } else {
          return [
            ...prevMessages,
            {
              date: currentDate || '',
              messages: [
                {
                  messageType: message.messageType,
                  messageContent: message.content,
                  isSender: message.senderId === Number(chatHistory?.userId),
                  messageTime: message.timestamp,
                },
              ],
            },
          ];
        }
      });
    },
  });

  const handleSendMessage = useCallback(() => {
    const inputValue = inputRef.current?.getValue();

    if (inputValue) {
      const currentDate = dayjs().locale('ko').format('YYYY-MM-DD');

      const messageData = {
        messageType: 'TEXT_MESSAGE',
        messageContent: inputValue,
        isSender: true,
        messageTime: new Date().toISOString(),
      };

      setMessages((prevMessages) => {
        const lastGroup = prevMessages[prevMessages.length - 1];

        if (lastGroup && lastGroup.date === currentDate) {
          return [
            ...prevMessages.slice(0, -1),
            {
              ...lastGroup,
              messages: [...lastGroup.messages, messageData],
            },
          ];
        } else {
          return [
            ...prevMessages,
            {
              date: currentDate || '',
              messages: [messageData],
            },
          ];
        }
      });

      sendMessage(`/pub/${chatRoomId}`, messageData);

      mutate({
        roomId: Number(chatRoomId),
        body: {
          messageType: 'TEXT_MESSAGE',
          messageContent: inputValue,
          senderId: Number(chatHistory?.userId),
        },
      });

      if (inputRef.current) {
        inputRef.current.reset();
      }
    }
  }, [sendMessage, chatRoomId, chatHistory?.userId]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSendMessage();
  };

  useEffect(() => {
    if (!chatHistory) return;

    setMessages(
      chatHistory.messagesGroupedByDate.map(({ date, messages }) => ({
        date,
        messages: messages?.map(
          ({ messageType, messageContent, messageSenderId, messageTime }) => ({
            messageType,
            messageContent,
            isSender: messageSenderId === chatHistory.userId,
            messageTime,
          })
        ),
      }))
    );
  }, [chatHistory]);

  useEffect(() => {
    connect();
  }, [connect]);

  useEffect(() => {
    if (!chatListRef.current) return;
    chatListRef.current.scrollTo({
      top: chatListRef.current.scrollHeight,
      behavior: 'smooth',
    });
  }, [messages]);

  return (
    <Layout>
      <AppBar title={otherName} suffix={<></>} onBackClick={router.back} />

      <section css={wrapper}>
        {chatHistory?.estimateId && (
          <div css={estimateWrapper}>
            <div css={profileWrapper}>
              <DefaultImage width={32} height={32} />
              <Text typo="body5" color="black">
                {otherName}
              </Text>
            </div>

            {chatHistory?.estimateId && (
              <CapsuleButton
                size="S"
                onClick={() => router.push(ROUTES.ESTIMATE_DETAIL(chatHistory.estimateId!))}
              >
                <Text typo="body2" color="gray500">
                  견적서 상세보기
                </Text>
              </CapsuleButton>
            )}
          </div>
        )}

        <section css={chatList} ref={chatListRef}>
          {messages?.map((messageInfo, index) => (
            <Fragment key={`${messageInfo.date}${index}`}>
              <div css={tagWrapper}>
                <Tag variant="line">
                  <Text typo="body2" color="blue200">
                    {dayjs(messageInfo.date).format('YYYY년 MM월 DD일')}
                  </Text>
                </Tag>
              </div>

              {messageInfo.messages?.map((message) =>
                message.isSender ? (
                  <Bubble.Sender
                    key={message.messageTime}
                    message={{
                      content: message.messageContent,
                      sentAt: dayjs(message.messageTime).locale('ko').format('A HH:mm'),
                    }}
                  />
                ) : (
                  <Bubble.Receiver
                    key={message.messageTime}
                    partnerName={otherName ?? ''}
                    message={{
                      content: message.messageContent,
                      sentAt: dayjs(message.messageTime).locale('ko').format('A HH:mm'),
                    }}
                  />
                )
              )}
            </Fragment>
          ))}
        </section>
      </section>

      <ChatInputForm ref={inputRef} onSubmit={handleSubmit} service="daengle" />
    </Layout>
  );
}

const wrapper = css`
  position: relative;
  overflow: hidden;

  width: 100%;
  height: 100%;
`;

export const estimateWrapper = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 0;

  width: 100%;
  padding: 12px 18px;
  border-radius: 0 0 10px 10px;

  background: ${theme.colors.white};
  box-shadow: 0 1px 10px 0 rgb(0 0 0 / 5%);

  border-top: 1px solid ${theme.colors.gray100};

  svg,
  img {
    border-radius: 50%;

    background: ${theme.colors.gray200};
  }
`;

export const profileWrapper = css`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const chatList = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: auto;

  width: 100%;
  height: 100%;
  padding: calc(56px + 24px) 18px calc(78px + 18px) 18px;

  border-bottom: 1px solid ${theme.colors.gray200};
`;

export const tagWrapper = css`
  display: flex;
  justify-content: center;

  width: 100%;
  margin: 0 8px;
`;
