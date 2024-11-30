import { api } from '~/apis';
import {
  GetBreedListResponse,
  PostAvailableNicknameRequestBody,
  PostAvailableNicknameResponse,
  PostJoinWithoutPetRequestBody,
  PostJoinWithoutPetResponse,
  PostJoinWithPetRequestBody,
  PostJoinWithPetResponse,
} from '~/models';

export const postJoinWithoutPet = async (body: PostJoinWithoutPetRequestBody) => {
  return await api.post<PostJoinWithoutPetResponse>('/join-without-pet', body);
};

export const postAvailableNickname = async (body: PostAvailableNicknameRequestBody) => {
  return await api.post<PostAvailableNicknameResponse>('/available-nickname', body);
};

export const getBreedList = async () => {
  return await api.get<GetBreedListResponse>('/breed-list');
};

export const postJoinWithPet = async (body: PostJoinWithPetRequestBody) => {
  return await api.post<PostJoinWithPetResponse>('/join-with-pet', body);
};
