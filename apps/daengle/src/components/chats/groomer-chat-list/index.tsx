import { useRouter } from 'next/router';
import { Empty, useDialog } from '@daengle/design-system';
import { useGetChatUserGroomerListQuery } from '~/queries';
import { ROUTES } from '~/constants/commons';
import { ChatListItem } from '../chat-list-item';

export function GroomerChatList() {
  const router = useRouter();
  const { data: chats, refetch: refetchRoomList, isError } = useGetChatUserGroomerListQuery();

  if (isError) {
    alert('로그인 후 이용해 주세요');
    router.back();
  }

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
