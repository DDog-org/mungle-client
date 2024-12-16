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
  partnerId: number;
  partnerProfile: string | null;
  partnerName: string;
  estimateId: number | null;
  dateTime: string | null;
  messagesGroupedByDate: MessagesGroupedByDate[];
}

export interface MessagesGroupedByDate {
  date: string;
  messages: GetChatResponseMessage[];
}

export interface GetChatResponseMessage {
  messageId: number;
  messageSenderId: number;
  messageContent: string;
  messageTime: string;
  messageType: 'TEXT_MESSAGE' | 'PICTURE_MESSAGE';
}

export interface PostChatMessagesRequestArgs {
  roomId: number;
  body: PostChatMessagesRequestBody;
}

export interface PostChatMessagesRequestBody {
  messageType: 'TEXT_MESSAGE' | 'PICTURE_MESSAGE';
  messageContent: string;
  senderId: number;
}

export interface DeleteChatDeleteRequestParams {
  roomId: number;
}
