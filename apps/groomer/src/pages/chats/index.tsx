import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import { Empty, Layout, Text, theme } from '@daengle/design-system';
import { ROUTES } from '~/constants';
import { GNB } from '~/components/commons';
import { ChatListItem } from '~/components/chats';
import { useGetChatGroomerList } from '~/queries';

export default function Chats() {
  const router = useRouter();
  const { data: chatRoomInfo, refetch: refetchChatList } = useGetChatGroomerList();

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollTo(0, scrollRef.current.scrollHeight);
  }, []);

  return (
    <Layout isAppBarExist={false}>
      <GNB />
      <section css={wrapper}>
        <div css={titleWrapper}>
          <Text tag="h1" typo="title1" color="black">
            채팅
          </Text>
        </div>

        <div css={chatsWrapper}>
          {!chatRoomInfo || chatRoomInfo.roomList?.length === 0 ? (
            <Empty title="채팅 내역이 없어요" />
          ) : (
            chatRoomInfo?.roomList.map((chat) => (
              <ChatListItem
                key={chat.roomId}
                roomId={chat.roomId}
                partnerName={chat.otherName}
                lastMessage={chat.lastMessage}
                messageTime={chat.messageTime}
                onChatItemClick={() =>
                  router.push({
                    pathname: ROUTES.CHATS_DETAIL(chat.roomId),
                    query: { otherId: chat.otherId.toString() },
                  })
                }
                refetchChatList={refetchChatList}
              />
            ))
          )}
        </div>
      </section>
    </Layout>
  );
}

const wrapper = css`
  overflow: hidden;

  width: 100%;
  height: 100%;
  padding: 38px 0 ${theme.size.gnbHeight};
`;

const titleWrapper = css`
  width: 100%;
  padding: 0 18px;
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
