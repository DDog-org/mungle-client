export interface ChatItem {
  roomId: number;
  partnerId: number;
  partnerName: string;
  partnerProfile: string | null;
  messageTime: string;
  lastMessage: string;
}
