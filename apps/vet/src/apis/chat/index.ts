import {
  GetChatWithParams,
  GetChatWithResponse,
  PostChatMessagesRequestArgs,
  DeleteChatDeleteRequestParams,
  GetChatVetListResponse,
} from '~/models';
import { api } from '../config';

export const getChatWith = async (params: GetChatWithParams) => {
  return await api.get<GetChatWithResponse>('/chat/with', { params });
};

export const postChatMessages = async ({ roomId, body }: PostChatMessagesRequestArgs) => {
  return await api.post(`/chat/messages/${roomId}`, body);
};

export const deleteChatDelete = async ({ roomId }: DeleteChatDeleteRequestParams) => {
  return await api.delete(`/chat/delete/${roomId}`);
};

export const getChatVetList = async () => {
  return await api.get<GetChatVetListResponse>('/chat/vet/list');
};
