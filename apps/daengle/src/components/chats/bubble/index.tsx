import { ReactNode } from 'react';
import { Text } from '@daengle/design-system';
import { ChatDefaultProfileImage } from '@daengle/design-system/icons';
import { Message } from '~/interfaces';
import {
  receiverBubble,
  receiverBubbleWrapper,
  receiverBubbleInfo,
  senderBubbleWrapper,
  wrapper,
  timeWrapper,
  senderBubble,
} from './index.styles';
import dayjs from 'dayjs';

interface ReceiverBubbleProps {
  message: Message;
  partnerName: string;
}

interface SenderBubbleProps {
  message: Message;
}
interface Props {
  children: ReactNode;
}

function BubbleWrapper({ children }: Props) {
  return <div css={wrapper}>{children}</div>;
}

function ReceiverBubble({ message }: ReceiverBubbleProps) {
  return (
    <div css={receiverBubbleWrapper}>
      <ChatDefaultProfileImage width={28} height={28} />

      <div css={receiverBubbleInfo}>
        <Text typo="body12" color="black">
          문소연 디자이너
        </Text>
        <div css={receiverBubble}>
          <Text tag="p" typo="body7" color="black100">
            {message.messageContent}
          </Text>
        </div>
      </div>

      <div css={timeWrapper}>
        <Text typo="body12" color="gray300">
          {dayjs(message.messageTime).format('A hh:mm')}
        </Text>
      </div>
    </div>
  );
}

function SenderBubble({ message }: SenderBubbleProps) {
  return (
    <div css={senderBubbleWrapper}>
      <div css={timeWrapper}>
        <Text typo="body12" color="gray300">
          {dayjs(message.messageTime).format('A hh:mm')}
        </Text>
      </div>

      <div css={senderBubble}>
        <Text tag="p" typo="body7" color="white">
          {message.messageContent}
        </Text>
      </div>
    </div>
  );
}

export const Bubble = Object.assign(BubbleWrapper, {
  Receiver: ReceiverBubble,
  Sender: SenderBubble,
});
