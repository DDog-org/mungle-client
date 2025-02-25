import axios from 'axios';
import { api, guestApi } from '~/apis';
import {
  GetVetModifyPageResponse,
  GetVetValidateResponse,
  GetVetProfileResponse,
  PostKakaoRequestBody,
  PostKakaoResponse,
  PostVetJoinRequestBody,
  PostVetJoinResponse,
  PatchVetProfileRequestBody,
  PatchVetProfileResponse,
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
  return await guestApi.post<PostKakaoResponse>('/vet/kakao', body);
};

export const postVetJoin = async (body: PostVetJoinRequestBody) => {
  return await guestApi.post<PostVetJoinResponse>('/vet/join', body);
};

export const getVetModifyPage = async () => {
  return await api.get<GetVetModifyPageResponse>('/vet/modify-page');
};

export const patchVetProfile = async (body: PatchVetProfileRequestBody) => {
  return await api.patch<PatchVetProfileResponse>('/vet/profile', body);
};

export const getVetValidate = async () => {
  return await api.get<GetVetValidateResponse>('/vet/validate');
};

export const getVetProfile = async () => {
  return await api.get<GetVetProfileResponse>('/vet/profile');
};
