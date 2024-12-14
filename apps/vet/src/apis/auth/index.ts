import axios from 'axios';
import { api } from '~/apis';
import {
  GetVetModifyPageResponse,
  PatchVetInfoRequestBody,
  PatchVetInfoResponse,
  PostKakaoRequestBody,
  PostKakaoResponse,
  PostVetJoinRequestBody,
  PostVetJoinResponse,
} from '~/models/auth';

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
  return await api.post<PostKakaoResponse>('/vet/kakao', body);
};

export const postVetJoin = async (body: PostVetJoinRequestBody) => {
  return await api.post<PostVetJoinResponse>('/vet/join', body);
};

export const getVetModifyPage = async () => {
  return await api.get<GetVetModifyPageResponse>('/vet/modify-page');
};

export const patchVetInfo = async (body: PatchVetInfoRequestBody) => {
  return await api.patch<PatchVetInfoResponse>('/vet/info', body);
};
