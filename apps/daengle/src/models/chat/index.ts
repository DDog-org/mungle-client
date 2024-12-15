export interface GetChatUserGroomerListResponse {
  roomList: ChatUser[];
}

export interface GetChatUserVetListResponse {
  roomList: ChatUser[];
}

export interface ChatUser {
  roomId: number;
  partnerId: number;
  partnerName: string;
  partnerProfile: string | null;
  messageTime: string;
  lastMessage: string;
}
