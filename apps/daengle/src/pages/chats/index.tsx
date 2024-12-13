import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import { Layout, Text, theme } from '@daengle/design-system';
import { ROUTES } from '~/constants/commons';
import { GNB } from '~/components/commons';
import { ChatListItem } from '~/components/chats';
import { useEffect, useRef } from 'react';

export default function Chats() {
  const router = useRouter();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollTo(0, scrollRef.current.scrollHeight);
  }, []);

  return (
    <Layout isAppBarExist={false}>
      <GNB />
      <section css={wrapper}>
        <Text tag="h1" typo="title1" color="black">
          채팅
        </Text>

        <div css={chatsWrapper}>
          <ChatListItem onChatItemClick={() => router.push(ROUTES.CHATS_DETAIL(1))} />
          <ChatListItem onChatItemClick={() => router.push(ROUTES.CHATS_DETAIL(1))} />
          <ChatListItem onChatItemClick={() => router.push(ROUTES.CHATS_DETAIL(1))} />
          <ChatListItem onChatItemClick={() => router.push(ROUTES.CHATS_DETAIL(1))} />
          <ChatListItem onChatItemClick={() => router.push(ROUTES.CHATS_DETAIL(1))} />
          <ChatListItem onChatItemClick={() => router.push(ROUTES.CHATS_DETAIL(1))} />
          <ChatListItem onChatItemClick={() => router.push(ROUTES.CHATS_DETAIL(1))} />
          <ChatListItem onChatItemClick={() => router.push(ROUTES.CHATS_DETAIL(1))} />
          <ChatListItem onChatItemClick={() => router.push(ROUTES.CHATS_DETAIL(1))} />
          <ChatListItem onChatItemClick={() => router.push(ROUTES.CHATS_DETAIL(1))} />
          <ChatListItem onChatItemClick={() => router.push(ROUTES.CHATS_DETAIL(1))} />
          <ChatListItem onChatItemClick={() => router.push(ROUTES.CHATS_DETAIL(1))} />
          <ChatListItem onChatItemClick={() => router.push(ROUTES.CHATS_DETAIL(1))} />
          <ChatListItem onChatItemClick={() => router.push(ROUTES.CHATS_DETAIL(1))} />
          <ChatListItem onChatItemClick={() => router.push(ROUTES.CHATS_DETAIL(1))} />
          <ChatListItem onChatItemClick={() => router.push(ROUTES.CHATS_DETAIL(1))} />
          <ChatListItem onChatItemClick={() => router.push(ROUTES.CHATS_DETAIL(1))} />
          <ChatListItem onChatItemClick={() => router.push(ROUTES.CHATS_DETAIL(1))} />
          <ChatListItem onChatItemClick={() => router.push(ROUTES.CHATS_DETAIL(1))} />
          <ChatListItem onChatItemClick={() => router.push(ROUTES.CHATS_DETAIL(1))} />
        </div>
      </section>
    </Layout>
  );
}

const wrapper = css`
  overflow: hidden;

  width: 100%;
  height: 100%;
  padding: 38px 18px ${theme.size.gnbHeight};
`;

const chatsWrapper = css`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  width: 100%;
  height: 100%;
  margin: 22px 0 0;
  padding: 0 0 ${theme.size.gnbHeight};
`;
