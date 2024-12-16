import {
  GetChatParams,
  GetChatUserGroomerListResponse,
  GetChatUserVetListResponse,
  GetChatResponse,
  PostChatMessagesRequestArgs,
  DeleteChatDeleteRequestParams,
} from '~/models/chat';
import { api } from '../config';

export const getChatUserGroomerList = async () => {
  return await api.get<GetChatUserGroomerListResponse>('/chat/user/groomer/list');
};

export const getChatUserVetList = async () => {
  return await api.get<GetChatUserVetListResponse>('/chat/user/vet/list');
};

export const getChat = async (params: GetChatParams) => {
  return await api.get<GetChatResponse>('/chat/with', { params });
};

export const postChatMessages = async ({ roomId, body }: PostChatMessagesRequestArgs) => {
  return await api.post(`/chat/messages/${roomId}`, body);
};

export const deleteChatDelete = async ({ roomId }: DeleteChatDeleteRequestParams) => {
  return await api.delete(`/chat/delete/${roomId}`);
};
