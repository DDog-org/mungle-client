import { api } from '~/apis';
import { UserEstimateGroomingDetailData, UserEstimateCareDetailData } from '~/interfaces/estimate';

import {
  GetUserEstimateListResponse,
  PostUserEstimateGroomerUserInfoRequestBody,
  PostUserEstimateGroomerUserInfoResponse,
  PostUserEstimateGroomingRequestBody,
  PostUserEstimateGroomingResponse,
  PostUserEstimateCareRequestBody,
  PostUserEstimateCareResponse,
  PostUserEstimateVetUserInfoRequestBody,
  PostUserEstimateVetUserInfoResponse,
  UserEstimateCareDetailRequestParams,
  UserEstimateGroomingDetailRequestParams,
} from '~/models/estimate';

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

export const getUserEstimateGroomingDetail = async (
  params: UserEstimateGroomingDetailRequestParams
) => {
  return await api.get<UserEstimateGroomingDetailData>(
    `/user/estimate/${params.groomingEstimateId}/grooming-detail`
  );
};

export const getUserEstimateCareDetail = async (params: UserEstimateCareDetailRequestParams) => {
  return await api.get<UserEstimateCareDetailData>(
    `/user/estimate/${params.careEstimateId}/care-detail`
  );
};
