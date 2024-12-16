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
  sender?: 'user' | 'partner';
  messageTime: string;
}
