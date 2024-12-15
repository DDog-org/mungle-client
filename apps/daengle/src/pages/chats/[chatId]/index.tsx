import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { css } from '@emotion/react';
import { AppBar, CapsuleButton, Layout, Text, theme } from '@daengle/design-system';
import { ChatPlus, ChatSendButton, DefaultImage } from '@daengle/design-system/icons';
import { Bubble } from '~/components/chats/bubble';
import { ROUTES } from '~/constants/commons';
import { ChatMessage } from '~/interfaces';
import { useGetChatQuery } from '~/queries';

export default function ChatRoom() {
  const router = useRouter();

  // TODO: 미용사/병원 상세에서 query string으로 partnerId를 받아오도록
  const partnerId = router.query.partnerId as string;

  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [newMessage, setNewMessage] = useState<string>('');

  const ws = useRef<WebSocket | null>(null);
  const chatListRef = useRef<HTMLDivElement>(null);

  const { data } = useGetChatQuery(partnerId);

  useEffect(() => {
    if (!data) return;

    setMessages(
      data.messages.map((msg) => ({
        messageType: msg.messageType,
        messageContent: msg.messageContent,
        sender: msg.messageSenderId === data.userId ? 'user' : 'partner',
        messageTime: msg.messageTime,
      }))
    );
  }, []);

  useEffect(() => {
    if (ws.current) return;

    ws.current = new WebSocket('ws://api.daengle.com/chat');

    ws.current.onopen = () => {
      console.log('Connected to server');
    };

    ws.current.onmessage = (message) => {
      const data = JSON.parse(message.data);
      setMessages((prev) => [...prev, data]);
    };

    ws.current.onclose = () => {
      console.log('Disconnected from server');
    };

    return () => {
      ws.current?.close();
    };
  }, []);

  useEffect(() => {
    if (!chatListRef.current) return;
    chatListRef.current.scrollTo({
      top: chatListRef.current.scrollHeight,
      behavior: 'smooth',
    });
  }, [messages]);

  const sendMessage = () => {
    if (ws.current?.readyState === WebSocket.OPEN && newMessage.trim()) {
      const messageData = {
        messageType: 'TEXT_MESSAGE',
        messageContent: newMessage,
      };

      ws.current.send(JSON.stringify(messageData));
      setMessages((prev) => [...prev, { ...messageData, sender: 'user' }]);
      setNewMessage('');
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendMessage();
  };

  return (
    <Layout>
      <AppBar title={data?.partner?.partnerNickname} suffix={<></>} onBackClick={router.back} />

      <section css={wrapper}>
        {data?.estimateId && (
          <div css={estimateWrapper}>
            <div css={profileWrapper}>
              <DefaultImage width={32} height={32} />
              <Text typo="body5" color="black">
                {data?.partner.partnerNickname}
              </Text>
            </div>

            <CapsuleButton size="S" onClick={() => router.push(ROUTES.ESTIMATE_DETAIL(1))}>
              <Text typo="body2" color="gray500">
                견적서 상세보기
              </Text>
            </CapsuleButton>
          </div>
        )}

        <section css={chatList} ref={chatListRef}>
          {/* <Bubble.Sender />
          <Bubble.Receiver />
          <Bubble.Sender />
          <Bubble.Receiver />
          <Bubble.Sender />
          <Bubble.Receiver />
          <Bubble.Sender />
          <Bubble.Receiver />
          <Bubble.Sender />
          <Bubble.Sender />
          <Bubble.Sender />
          <Bubble.Receiver />
          <Bubble.Sender />
          <Bubble.Receiver />
          <Bubble.Sender />
          <Bubble.Receiver /> */}
          {messages.map((msg) =>
            msg.sender === 'user' ? (
              <Bubble.Sender key={msg.messageTime} message={msg} />
            ) : (
              <Bubble.Receiver key={msg.messageTime} message={msg} />
            )
          )}
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
