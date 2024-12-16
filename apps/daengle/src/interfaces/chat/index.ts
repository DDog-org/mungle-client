export interface ChatItem {
  roomId: number;
  partnerId: number;
  partnerName: string;
  partnerProfile: string | null;
  messageTime: string;
  lastMessage: string;
}

export interface MessageInfos {
  date: string;
  messages: Message[];
}

export interface Message {
  messageType: string;
  messageContent: string;
  isSender: boolean;
  messageTime: string;
}

export interface ReceivedMessage {
  chatRoomId: number;
  content: string;
  messageId: number;
  messageType: 'TEXT_MESSAGE' | 'PICTURE_MESSAGE';
  recipientId: number;
  senderId: number;
  timestamp: string;
}
