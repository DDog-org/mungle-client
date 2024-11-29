import { api } from '~/apis';
import {
  PostAvailableNicknameRequestBody,
  PostAvailableNicknameResponse,
  PostJoinWithoutPetRequestBody,
  PostJoinWithoutPetResponse,
} from '~/models';

export const postJoinWithoutPet = async (body: PostJoinWithoutPetRequestBody) => {
  return await api.post<PostJoinWithoutPetResponse>('/join-without-pet', body);
};

export const postAvailableNickname = async (body: PostAvailableNicknameRequestBody) => {
  return await api.post<PostAvailableNicknameResponse>('/available-nickname', body);
};
