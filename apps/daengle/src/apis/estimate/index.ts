import { api } from '~/apis';
import {
  PostUserEstimateGroomerUserInfoRequestBody,
  PostUserEstimateGroomerUserInfoResponse,
  PostUserEstimateGroomingRequestBody,
  PostUserEstimateGroomingResponse,
  postCareBody,
  postCareResponse,
  postVetUserInfoBody,
  postVetUserInfoResponse,
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

export const postVetUserInfo = async (body: postVetUserInfoBody) => {
  return await api.post<postVetUserInfoResponse>('/user/estimate/vet-user-info', body);
};

export const postCare = async (body: postCareBody) => {
  return await api.post<postCareResponse>('/user/estimate/care', body);
};
