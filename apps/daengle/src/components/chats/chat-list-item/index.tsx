import { Text } from '@daengle/design-system';
import { ChatItemMenu, DefaultImage } from '@daengle/design-system/icons';
import { formatLastSendTime } from '@daengle/services/utils';
import { chatItem, chatItemText, chatMenu, wrapper } from './index.styles';

interface Props {
  partnerName: string;
  lastMessage: string;
  messageTime: string;
  onChatItemClick: () => void;
}

export function ChatListItem({ partnerName, lastMessage, messageTime, onChatItemClick }: Props) {
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
        <ChatItemMenu width={12} height={3} />
        <Text typo="body11" color="gray300">
          {formatLastSendTime(messageTime)}
        </Text>
      </div>
    </div>
  );
}
