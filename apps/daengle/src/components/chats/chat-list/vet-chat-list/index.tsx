import { useRouter } from 'next/router';
import { Empty } from '@daengle/design-system';
import { useGetChatUserVetListQuery } from '~/queries';
import { ROUTES } from '~/constants/commons';
import { ChatListItem } from '../chat-list-item';

export function VetChatList() {
  const router = useRouter();
  const { data: chats } = useGetChatUserVetListQuery();

  return (
    <>
      {!chats || chats.roomList.length === 0 ? (
        <Empty title="채팅 내역이 없어요" />
      ) : (
        chats?.roomList.map((chat) => (
          <ChatListItem
            key={chat.roomId}
            partnerName={chat.partnerName}
            lastMessage={chat.lastMessage}
            onChatItemClick={() =>
              router.push({
                pathname: ROUTES.CHATS_DETAIL(chat.roomId),
                query: { partnerId: chat.partnerId.toString() },
              })
            }
          />
        ))
      )}
    </>
  );
}
