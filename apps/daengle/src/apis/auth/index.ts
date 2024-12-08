import axios from 'axios';
import { api } from '~/apis';
import {
  GetBreedListResponse,
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
