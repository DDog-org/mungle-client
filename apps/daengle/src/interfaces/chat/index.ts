export interface ChatItem {
  roomId: number;
  partnerId: number;
  partnerName: string;
  partnerProfile: string | null;
  messageTime: string;
  lastMessage: string;
}

export interface ChatMessage {
  messageType: string;
  messageContent: string;
  sender?: 'user' | 'partner';
  messageTime?: string;
}
