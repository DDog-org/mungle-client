import { useRouter } from 'next/router';
import { Empty } from '@daengle/design-system';
import { useGetChatUserVetListQuery } from '~/queries';
import { ROUTES } from '~/constants/commons';
import { ChatListItem } from '../chat-list-item';

export function VetChatList() {
  const router = useRouter();
  const { data: chats, refetch: refetchRoomList } = useGetChatUserVetListQuery();

  return (
    <>
      {!chats || chats.roomList.length === 0 ? (
        <Empty title="채팅 내역이 없어요" />
      ) : (
        chats?.roomList.map((chat) => (
          <ChatListItem
            key={chat.roomId}
            roomId={chat.roomId}
            partnerName={chat.otherName}
            lastMessage={chat.lastMessage}
            messageTime={chat.messageTime}
            onChatItemClick={() =>
              router.push({
                pathname: ROUTES.CHATS_DETAIL(chat.roomId),
                query: { otherId: chat.otherId.toString(), service: 'vet' },
              })
            }
            refetchRoomList={refetchRoomList}
          />
        ))
      )}
    </>
  );
}
