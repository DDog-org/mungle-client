import axios from 'axios';
import { api, guestApi } from '~/apis';
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
  GetUserMypageResponse,
  GetUserWithdrawInfoResponse,
  DeleteUserInfoResponse,
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
  return await guestApi.post<PostKakaoResponse>('/user/kakao', body);
};

export const postJoinWithoutPet = async (body: PostJoinWithoutPetRequestBody) => {
  return await guestApi.post<PostJoinWithoutPetResponse>('/user/join-without-pet', body);
};

export const postAvailableNickname = async (body: PostAvailableNicknameRequestBody) => {
  return await guestApi.post<PostAvailableNicknameResponse>('/user/available-nickname', body);
};

export const getBreedList = async () => {
  return await guestApi.get<GetBreedListResponse>('/user/breed/list');
};

export const postJoinWithPet = async (body: PostJoinWithPetRequestBody) => {
  return await guestApi.post<PostJoinWithPetResponse>('/user/join-with-pet', body);
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
  return await guestApi.get<GetUserValidateResponse>('/user/validate');
};

export const getUserMypage = async () => {
  return await api.get<GetUserMypageResponse>('/user/mypage');
};

export const getUserWithdrawInfo = async () => {
  return await api.get<GetUserWithdrawInfoResponse>('/user/withdraw-info');
};

export const deleteUserInfo = async () => {
  return await api.delete<DeleteUserInfoResponse>('/user/info');
};
