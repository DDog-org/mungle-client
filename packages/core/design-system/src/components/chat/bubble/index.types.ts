export interface ReceiverBubbleProps {
  message: Message;
  partnerName: string;
}

export interface SenderBubbleProps {
  message: Message;
}

export interface Message {
  content: string;
  sentAt: string;
}
