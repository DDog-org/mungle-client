import axios from 'axios';
import { api, guestApi } from '~/apis';
import {
  GetGroomerModifyPageResponse,
  PatchGroomerInfoRequestBody,
  PatchGroomerInfoResponse,
  GetGroomerInfoResponse,
  PostJoinRequestBody,
  PostJoinResponse,
  PostKakaoRequestBody,
  PostKakaoResponse,
  GetGroomerWithdrawInfoResponse,
  DeleteGroomerResponse,
  GetGroomerValidateResponse,
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
  return await guestApi.post<PostKakaoResponse>('/groomer/kakao', body);
};

export const postJoin = async (body: PostJoinRequestBody) => {
  return await guestApi.post<PostJoinResponse>('/groomer/join', body);
};

export const getGroomerModifyPage = async () => {
  return await api.get<GetGroomerModifyPageResponse>('/groomer/modify-page');
};

export const patchGroomerInfo = async (body: PatchGroomerInfoRequestBody) => {
  return await api.patch<PatchGroomerInfoResponse>('/groomer/info', body);
};

export const getGroomerInfo = async () => {
  return await api.get<GetGroomerInfoResponse>('/groomer/info');
};

export const getGroomerWithdrawInfo = async () => {
  return await api.get<GetGroomerWithdrawInfoResponse>('/groomer/withdraw-info');
};

export const deleteGroomer = async () => {
  return await api.delete<DeleteGroomerResponse>('/groomer');
};

export const getGroomerValidate = async () => {
  return await api.get<GetGroomerValidateResponse>('/groomer/validate');
};
