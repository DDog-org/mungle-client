import { GetChatUserGroomerListResponse, GetChatUserVetListResponse } from '~/models/chat';
import { api } from '../config';

export const getChatUserGroomerList = async () => {
  return await api.get<GetChatUserGroomerListResponse>('/chat/user/groomer/list');
};

export const getChatUserVetList = async () => {
  return await api.get<GetChatUserVetListResponse>('/chat/user/vet/list');
};
