import axios from 'axios';
import { api } from '~/apis';
import {
  PostJoinRequestBody,
  PostJoinResponse,
  PostKakaoRequestBody,
  PostKakaoResponse,
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
  return await api.post<PostKakaoResponse>('/user/kakao', body);
};

export const postJoin = async (body: PostJoinRequestBody) => {
  return await api.post<PostJoinResponse>('/groomer/join', body);
};
