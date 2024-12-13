import { Text } from '@daengle/design-system';
import { ChatItemMenu, DefaultImage } from '@daengle/design-system/icons';
import { chatItem, chatItemText, chatMenu, wrapper } from './index.styles';

interface Props {
  onChatItemClick: () => void;
}

export function ChatListItem({ onChatItemClick }: Props) {
  return (
    <div css={wrapper} onClick={onChatItemClick}>
      <div css={chatItem}>
        <DefaultImage width={56} height={56} />
        <div css={chatItemText}>
          <Text tag="h3" typo="body1" color="black">
            왈왈
          </Text>
          <Text typo="body5" color="gray500">
            마지막 메시지
          </Text>
        </div>
      </div>

      <div css={chatMenu}>
        <ChatItemMenu width={12} height={3} />
        <Text typo="body11" color="gray300">
          1분 전
        </Text>
      </div>
    </div>
  );
}
