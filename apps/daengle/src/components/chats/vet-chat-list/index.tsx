import { useRouter } from 'next/router';
import { Empty, useDialog } from '@daengle/design-system';
import { useGetChatUserVetListQuery } from '~/queries';
import { ROUTES } from '~/constants/commons';
import { ChatListItem } from '../chat-list-item';
import { Loading } from '~/components/commons';

export function VetChatList() {
  const router = useRouter();
  const {
    data: chats,
    refetch: refetchRoomList,
    isError,
    isLoading,
  } = useGetChatUserVetListQuery();

  if (isLoading) return <Loading title="채팅 내역을 불러오고 있어요" />;

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
