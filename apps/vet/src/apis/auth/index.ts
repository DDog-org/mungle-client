import { api } from '~/apis';
import { PostVetJoinRequestBody, PostVetJoinResponse } from '~/models/auth';

export const postVetJoin = async (body: PostVetJoinRequestBody) => {
  return await api.post<PostVetJoinResponse>('/vet/join', body);
};
