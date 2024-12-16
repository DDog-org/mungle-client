import { ReactNode } from 'react';
import { Text } from '@daengle/design-system';
import { ChatDefaultProfileImage } from '@daengle/design-system/icons';
import { ReceiverBubbleProps, SenderBubbleProps } from './index.types';
import {
  receiverBubble,
  receiverBubbleWrapper,
  receiverBubbleInfo,
  senderBubbleWrapper,
  wrapper,
  timeWrapper,
  senderBubble,
} from './index.styles';

interface Props {
  children: ReactNode;
}

function BubbleWrapper({ children }: Props) {
  return <div css={wrapper}>{children}</div>;
}

function ReceiverBubble({ message, partnerName }: ReceiverBubbleProps) {
  return (
    <div css={receiverBubbleWrapper}>
      <ChatDefaultProfileImage width={28} height={28} />

      <div css={receiverBubbleInfo}>
        <Text typo="body12" color="black">
          {partnerName}
        </Text>
        <div css={receiverBubble}>
          <Text tag="p" typo="body7" color="black100">
            {message.content}
          </Text>
        </div>
      </div>

      <div css={timeWrapper}>
        <Text typo="body12" color="gray400">
          {message.sentAt}
        </Text>
      </div>
    </div>
  );
}

function SenderBubble({ message }: SenderBubbleProps) {
  return (
    <div css={senderBubbleWrapper}>
      <div css={timeWrapper}>
        <Text typo="body12" color="gray400">
          {message.sentAt}
        </Text>
      </div>

      <div css={senderBubble}>
        <Text tag="p" typo="body7" color="white">
          {message.content}
        </Text>
      </div>
    </div>
  );
}

export const Bubble = Object.assign(BubbleWrapper, {
  Receiver: ReceiverBubble,
  Sender: SenderBubble,
});
