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

export interface GetChatParams {
  otherId: number;
}

export interface GetChatResponse {
  roomId: number;
  userId: number;
  partner: GetChatResponsePartner;
  estimateId: number | null;
  messages: GetChatResponseMessage[];
}

export interface GetChatResponsePartner {
  partnerId: number;
  partnerProfile: string | null;
  partnerNickname: string;
}

export interface GetChatResponseMessage {
  messageId: number;
  messageSenderId: number;
  messageContent: string;
  messageTime: string;
  messageType: 'TEXT_MESSAGE' | 'PICTURE_MESSAGE';
}
