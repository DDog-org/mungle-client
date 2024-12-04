import { api } from '~/apis';
import { PostJoinRequestBody, PostJoinResponse } from '~/models/auth';

export const postJoin = async (body: PostJoinRequestBody) => {
  return await api.post<PostJoinResponse>('/groomer/join', body);
};
