import { api } from '~/apis';
import {
  PostEstimateGroomerUserInfoBody,
  PostEstimateGroomerUserInfoResponse,
  PostEstimateGroomingBody,
  PostEstimateGroomingResponse,
} from '~/models/estimate';

export const postEstimateGroomerUserInfo = async (body: PostEstimateGroomerUserInfoBody) => {
  return await api.post<PostEstimateGroomerUserInfoResponse>(
    '/user/estimate/groomer-user-info',
    body
  );
};

export const postEstimateGrooming = async (body: PostEstimateGroomingBody) => {
  return await api.post<PostEstimateGroomingResponse>('/user/estimate/grooming', body);
};
