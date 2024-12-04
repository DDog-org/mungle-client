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
  return await api.post<PostJoinWithoutPetResponse>('/user/join-without-pet', body);
};

export const postAvailableNickname = async (body: PostAvailableNicknameRequestBody) => {
  return await api.post<PostAvailableNicknameResponse>('/user/available-nickname', body);
};

export const getBreedList = async () => {
  return await api.get<GetBreedListResponse>('/user/breed-list');
};

export const postJoinWithPet = async (body: PostJoinWithPetRequestBody) => {
  return await api.post<PostJoinWithPetResponse>('/user/join-with-pet', body);
};
