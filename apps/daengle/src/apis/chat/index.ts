import {
  GetChatWithParams,
  GetChatUserGroomerListResponse,
  GetChatUserVetListResponse,
  GetChatWithResponse,
  PostChatMessagesRequestArgs,
  DeleteChatDeleteRequestParams,
  GetchatStartRequestParams,
  GetChatStartResponse,
} from '~/models';
import { api } from '../config';

export const getChatUserGroomerList = async () => {
  return await api.get<GetChatUserGroomerListResponse>('/chat/user/groomer/list');
};

export const getChatUserVetList = async () => {
  return await api.get<GetChatUserVetListResponse>('/chat/user/vet/list');
};

export const getChatWith = async (params: GetChatWithParams) => {
  return await api.get<GetChatWithResponse>('/chat/with', { params });
};

export const postChatMessages = async ({ roomId, body }: PostChatMessagesRequestArgs) => {
  return await api.post(`/chat/messages/${roomId}`, body);
};

export const deleteChatDelete = async ({ roomId }: DeleteChatDeleteRequestParams) => {
  return await api.delete(`/chat/delete/${roomId}`);
};

export const getChatStart = async (params: GetchatStartRequestParams) => {
  return await api.get<GetChatStartResponse>(`/chat/start`, { params });
};
