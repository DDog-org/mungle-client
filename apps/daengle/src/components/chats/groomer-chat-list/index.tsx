import { useRouter } from 'next/router';
import { Empty } from '@daengle/design-system';
import { useGetChatUserGroomerListQuery } from '~/queries';
import { ROUTES } from '~/constants/commons';
import { ChatListItem } from '../chat-list-item';

export function GroomerChatList() {
  const router = useRouter();
  const { data: chats, refetch: refetchRoomList } = useGetChatUserGroomerListQuery();

  return (
    <>
      {!chats || chats.roomList.length === 0 ? (
        <Empty title="채팅 내역이 없어요" />
      ) : (
        chats?.roomList.map((chat) => (
          <ChatListItem
            key={chat.roomId}
            roomId={chat.roomId}
            partnerName={chat.partnerName}
            lastMessage={chat.lastMessage}
            messageTime={chat.messageTime}
            onChatItemClick={() =>
              router.push({
                pathname: ROUTES.CHATS_DETAIL(chat.roomId),
                query: { otherId: chat.partnerId.toString() },
              })
            }
            refetchRoomList={refetchRoomList}
          />
        ))
      )}
    </>
  );
}
