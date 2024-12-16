export type MessageType = 'TEXT_MESSAGE' | 'PICTURE_MESSAGE';

export interface GetChatWithParams {
  otherId: number;
}

export interface GetChatWithResponse {
  roomId: number;
  userId: number;
  otherId: number;
  otherProfile: string | null;
  otherName: string;
  estimateId: number | null;
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
  messageType: MessageType;
}

export interface PostChatMessagesRequestArgs {
  roomId: number;
  body: PostChatMessagesRequestBody;
}

export interface PostChatMessagesRequestBody {
  messageType: MessageType;
  messageContent: string;
  senderId: number;
}

export interface DeleteChatDeleteRequestParams {
  roomId: number;
}

export interface GetChatGroomerListResponse {
  roomList: GetChatGroomerChatListItem[];
}

export interface GetChatGroomerChatListItem {
  roomId: number;
  otherId: number;
  otherName: string;
  otherProfile: string | null;
  messageTime: string;
  lastMessage: string;
}
