import { useRouter } from 'next/router';
import { Empty } from '@daengle/design-system';
import { useGetChatUserGroomerListQuery } from '~/queries';
import { ROUTES } from '~/constants/commons';
import { ChatListItem } from '../chat-list-item';
import { Loading } from '~/components/commons';

export function GroomerChatList() {
  const router = useRouter();

  const { data: chats, refetch: refetchRoomList, isLoading } = useGetChatUserGroomerListQuery();

  if (isLoading) return <Loading title="채팅 내역을 불러오고 있어요" />;

  return (
    <>
      {!chats || chats.roomList.length === 0 ? (
        <Empty title="채팅 내역이 없어요" />
      ) : (
        chats?.roomList.map((chat) => (
          <ChatListItem
            key={chat.roomId}
            roomId={chat.roomId}
            partnerName={`${chat.otherName} 디자이너`}
            lastMessage={chat.lastMessage}
            messageTime={chat.messageTime}
            onChatItemClick={() =>
              router.push({
                pathname: ROUTES.CHATS_DETAIL(chat.roomId),
                query: { otherId: chat.otherId.toString(), service: 'groomer' },
              })
            }
            refetchRoomList={refetchRoomList}
          />
        ))
      )}
    </>
  );
}
