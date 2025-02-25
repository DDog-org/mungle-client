export interface GetChatUserGroomerListResponse {
  roomList: ChatUserListItem[];
}

export interface GetChatUserVetListResponse {
  roomList: ChatUserListItem[];
}

export interface ChatUserListItem {
  roomId: number;
  otherId: number;
  otherName: string;
  otherProfile: string;
  messageTime: string;
  lastMessage: string;
  partnerType: 'GROOMER_PARTNER' | 'VET_PARTNER';
}

export interface GetChatWithParams {
  otherId: number;
}

export interface GetChatWithResponse {
  roomId: number;
  userId: number;
  otherId: number;
  otherProfile: string | null;
  otherName: string;
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

export interface GetchatStartRequestParams {
  otherId: number;
}

export interface GetChatStartResponse {
  chatRoomId: number;
  userId: number;
  partnerId: number;
  partnerType: 'GROOMER_PARTNER' | 'VET_PARTNER';
}
