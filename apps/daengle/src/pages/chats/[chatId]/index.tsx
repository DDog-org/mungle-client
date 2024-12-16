import { useRouter } from 'next/router';
import { FormEvent, useCallback, useEffect, useRef, useState } from 'react';
import { css } from '@emotion/react';
import { AppBar, CapsuleButton, Layout, Tag, Text, theme } from '@daengle/design-system';
import { ChatPlus, ChatSendButton, DefaultImage } from '@daengle/design-system/icons';
import { useStomp } from '@daengle/services/hooks';
import { Bubble } from '~/components/chats/bubble';
import { ROUTES } from '~/constants/commons';
import { Message, MessageInfos } from '~/interfaces';
import { useGetChatQuery, usePostChatMessages } from '~/queries';
import dayjs from 'dayjs';

export default function ChatRoom() {
  const router = useRouter();
  const chatId = router.query.chatId as string;

  // TODO: 미용사/병원 상세에서 query string으로 partnerId를 받아오도록
  const partnerId = router.query.partnerId as string;

  const [messages, setMessages] = useState<MessageInfos[]>([]);
  const [newMessage, setNewMessage] = useState<string>('');

  const chatListRef = useRef<HTMLDivElement>(null);

  const { data } = useGetChatQuery(partnerId);
  const partnerName = data?.partnerName;

  const { mutate } = usePostChatMessages();

  const { sendMessage, connect } = useStomp({
    url: `${process.env.NEXT_PUBLIC_API_URL}/chat/`,
    topic: `/sub`,
    onMessage: (message: MessageInfos) => {
      setMessages((prev) => [...prev, message]);
    },
  });

  const handleSendMessage = useCallback(() => {
    if (newMessage.trim()) {
      const currentDate = new Date().toISOString().split('T')[0];

      const messageData: Message = {
        messageType: 'TEXT_MESSAGE',
        messageContent: newMessage,
        sender: 'user',
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

      sendMessage(`/api/chat/${chatId}`, messageData);
      mutate({
        roomId: Number(chatId),
        body: {
          messageType: 'TEXT_MESSAGE',
          messageContent: newMessage,
          senderId: Number(data?.userId),
        },
      });

      setNewMessage('');
    }
  }, [sendMessage, newMessage, chatId, data?.userId]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSendMessage();
  };

  useEffect(() => {
    if (!data) return;

    setMessages(
      data.messagesGroupedByDate.map((message) => ({
        ...message,
        messages: message.messages.map((msg) => ({
          messageType: msg.messageType,
          messageContent: msg.messageContent,
          sender: msg.messageSenderId === data.userId ? 'user' : 'partner',
          messageTime: msg.messageTime,
        })),
      }))
    );
  }, [data]);

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
      <AppBar title={partnerName} suffix={<></>} onBackClick={router.back} />

      <section css={wrapper}>
        {data?.estimateId && (
          <div css={estimateWrapper}>
            <div css={profileWrapper}>
              <DefaultImage width={32} height={32} />
              <Text typo="body5" color="black">
                {partnerName}
              </Text>
            </div>

            {data?.estimateId && (
              <CapsuleButton
                size="S"
                onClick={() => router.push(ROUTES.ESTIMATE_DETAIL(data.estimateId!))}
              >
                <Text typo="body2" color="gray500">
                  견적서 상세보기
                </Text>
              </CapsuleButton>
            )}
          </div>
        )}

        <section css={chatList} ref={chatListRef}>
          {messages?.map((message) => (
            <>
              <div css={tagWrapper}>
                <Tag variant="line">
                  <Text typo="body2" color="blue200">
                    {dayjs(message.date).format('YYYY년 MM월 DD일')}
                  </Text>
                </Tag>
              </div>
              {message.messages.map((msg) =>
                msg.sender === 'user' ? (
                  <Bubble.Sender key={msg.messageTime} message={msg} />
                ) : (
                  <Bubble.Receiver
                    key={msg.messageTime}
                    message={msg}
                    partnerName={partnerName ?? ''}
                  />
                )
              )}
            </>
          ))}
        </section>
      </section>

      <div css={inputFieldWrapper}>
        <ChatPlus width={32} height={32} />

        <form css={inputWrapper} onSubmit={handleSubmit}>
          <input
            css={input}
            placeholder="메시지를 입력해 주세요"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button type="submit">
            <ChatSendButton width={24} height={24} cursor="pointer" />
          </button>
        </form>
      </div>
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

export const inputFieldWrapper = css`
  display: flex;
  align-items: center;
  gap: 4px;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);

  width: 100%;
  max-width: ${theme.size.maxWidth};
  margin: 0 auto;
  padding: 20px 18px;

  background: white;
  box-shadow: 0 -4px 10px 0 rgb(0 0 0 / 5%);
`;

export const inputWrapper = css`
  display: flex;
  align-items: center;

  width: 100%;
  padding: 8px 8px 8px 18px;
  border: 1px solid ${theme.colors.gray200};
  border-radius: 21px;
`;

export const input = css`
  width: 100%;
  height: 100%;
  ${theme.typo.body12};

  ::placeholder {
    color: ${theme.colors.gray200};
  }
`;

export const tagWrapper = css`
  display: flex;
  justify-content: center;

  width: 100%;
  margin: 0 8px;
`;
