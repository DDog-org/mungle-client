import { Text } from '@daengle/design-system';
import { ChatItemMenu, DefaultImage } from '@daengle/design-system/icons';
import { formatLastSendTime } from '@daengle/services/utils';
import {
  chatItem,
  chatItemText,
  chatMenu,
  fab,
  fabWrapper,
  timeWrapper,
  wrapper,
} from './index.styles';
import { useState, useEffect, useRef } from 'react';
import { useDeleteChatDeleteMutation } from '~/queries';

interface Props {
  roomId: number;
  partnerName: string;
  lastMessage: string;
  messageTime: string;
  onChatItemClick: () => void;
  refetchChatList: () => void;
}

export function ChatListItem({
  roomId,
  partnerName,
  lastMessage,
  messageTime,
  onChatItemClick,
  refetchChatList,
}: Props) {
  const [isFABOpen, setIsFABOpen] = useState<boolean>(false);
  const { mutateAsync } = useDeleteChatDeleteMutation();

  const fabRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (fabRef.current && !fabRef.current.contains(event.target as Node)) {
        setIsFABOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div css={wrapper} onClick={onChatItemClick}>
      <div css={chatItem}>
        <DefaultImage width={56} height={56} />
        <div css={chatItemText}>
          <Text tag="h3" typo="body1" color="black">
            {partnerName}
          </Text>
          <Text typo="body5" color="gray500">
            {lastMessage}
          </Text>
        </div>
      </div>

      <div css={chatMenu}>
        <div css={fabWrapper} ref={fabRef}>
          <ChatItemMenu
            width={32}
            height={32}
            cursor="pointer"
            onClick={(e) => {
              e.stopPropagation();
              setIsFABOpen((prev) => !prev);
            }}
          />
          {isFABOpen && (
            <button
              css={fab}
              onClick={async (e) => {
                e.stopPropagation();
                await mutateAsync({ roomId });
                refetchChatList();
              }}
            >
              <Text typo="body12" color="black">
                채팅방 나가기
              </Text>
            </button>
          )}
        </div>

        <Text typo="body11" color="gray300" css={timeWrapper}>
          {formatLastSendTime(messageTime)}
        </Text>
      </div>
    </div>
  );
}
