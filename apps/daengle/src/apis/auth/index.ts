import axios from 'axios';
import { api } from '~/apis';
import {
  GetBreedListResponse,
  GetUserPetInfoResponse,
  PostAvailableNicknameRequestBody,
  PostAvailableNicknameResponse,
  PostJoinWithoutPetRequestBody,
  PostJoinWithoutPetResponse,
  PostJoinWithPetRequestBody,
  PostJoinWithPetResponse,
  PostKakaoRequestBody,
  PostKakaoResponse,
  PatchUserInfoRequestBody,
  PatchUserInfoResponse,
  GetUserInfoResponse,
  PostUserPetRequestBody,
  PostUserPetResponse,
  PatchUserPetInfoRequestBody,
  PatchUserPetInfoResponse,
  DeleteUserPetResponse,
  DeleteUserPetRequestData,
  GetUserValidateResponse,
} from '~/models';

export const postOauthToken = async (code: string) => {
  return await axios.post('https://kauth.kakao.com/oauth/token', null, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    params: {
      grant_type: 'authorization_code',
      client_id: process.env.NEXT_PUBLIC_REST_API_KEY,
      redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_URI,
      code: code,
    },
  });
};

export const postKakao = async (body: PostKakaoRequestBody) => {
  return await api.post<PostKakaoResponse>('/user/kakao', body);
};

export const postJoinWithoutPet = async (body: PostJoinWithoutPetRequestBody) => {
  return await api.post<PostJoinWithoutPetResponse>('/user/join-without-pet', body);
};

export const postAvailableNickname = async (body: PostAvailableNicknameRequestBody) => {
  return await api.post<PostAvailableNicknameResponse>('/user/available-nickname', body);
};

export const getBreedList = async () => {
  return await api.get<GetBreedListResponse>('/user/breed/list');
};

export const postJoinWithPet = async (body: PostJoinWithPetRequestBody) => {
  return await api.post<PostJoinWithPetResponse>('/user/join-with-pet', body);
};

export const getUserInfo = async () => {
  return await api.get<GetUserInfoResponse>('/user/info');
};

export const patchUserInfo = async (body: PatchUserInfoRequestBody) => {
  return await api.patch<PatchUserInfoResponse>('/user/info', body);
};

export const getUserPetInfo = async () => {
  return await api.get<GetUserPetInfoResponse>('/user/pet-info');
};

export const postUserPet = async (body: PostUserPetRequestBody) => {
  return await api.post<PostUserPetResponse>('/user/pet', body);
};

export const patchUserPetInfo = async (body: PatchUserPetInfoRequestBody) => {
  return await api.patch<PatchUserPetInfoResponse>('/user/pet-info', body);
};

export const deleteUserPet = async (data: DeleteUserPetRequestData) => {
  return await api.delete<DeleteUserPetResponse>('/user/pet', { data });
};

export const getUserValidate = async () => {
  return await api.get<GetUserValidateResponse>('/user/validate');
};
