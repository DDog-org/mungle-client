import { api } from '~/apis';
import { GetUserEstimateListResponse } from '~/models';

import {
  PostUserEstimateGroomerUserInfoRequestBody,
  PostUserEstimateGroomerUserInfoResponse,
  PostUserEstimateGroomingRequestBody,
  PostUserEstimateGroomingResponse,
  PostUserEstimateCareRequestBody,
  PostUserEstimateCareResponse,
  PostUserEstimateVetUserInfoRequestBody,
  PostUserEstimateVetUserInfoResponse,
  GroomerDetailResponse,
  CareDetailResponse,
  GetEstimateGroomingDetailParams,
  GetEstimateCareDetailParams,
} from '~/interfaces/estimate';

export const getUserEstimateList = async () => {
  return await api.get<GetUserEstimateListResponse>('/user/estimate/list');
};

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

export const postUserEstimateVetUserInfo = async (body: PostUserEstimateVetUserInfoRequestBody) => {
  return await api.post<PostUserEstimateVetUserInfoResponse>('/user/estimate/vet-user-info', body);
};

export const postUserEstimateCare = async (body: PostUserEstimateCareRequestBody) => {
  return await api.post<PostUserEstimateCareResponse>('/user/estimate/care', body);
};

export const getEstimateGroomingDetail = async (params: GetEstimateGroomingDetailParams) => {
  return await api.get<GroomerDetailResponse>(
    `/user/estimate/${params.groomingEstimateId}/grooming-detail`
  );
};

export const getEstimateCareDetail = async (params: GetEstimateCareDetailParams) => {
  return await api.get<CareDetailResponse>(`/user/estimate/${params.careEstimateId}/care-detail`);
};
