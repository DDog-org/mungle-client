import { api } from '~/apis';
import {
  PostUserEstimateGroomerUserInfoRequestBody,
  PostUserEstimateGroomerUserInfoResponse,
  PostUserEstimateGroomingRequestBody,
  PostUserEstimateGroomingResponse,
} from '~/models/estimate';

export const postUserEstimateGroomerUserInfo = async (
  body: PostUserEstimateGroomerUserInfoRequestBody
) => {
  return await api.post<PostUserEstimateGroomerUserInfoResponse>(
    '/user/estimate/groomer-user-info',
    body
  );
};

export const postUserEstimateGrooming = async (body: PostUserEstimateGroomingRequestBody) => {
  return await api.post<PostUserEstimateGroomingResponse>('/user/estimate/grooming', body);
};
