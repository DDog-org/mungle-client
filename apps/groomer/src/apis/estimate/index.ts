import { api } from '~/apis';
import {
  GetGroomerEstimateDesignationListResponse,
  GetGroomerEstimateDetailRequestParams,
  GetGroomerEstimateDetailResponse,
  GetGroomerEstimateGeneralListResponse,
  PostGroomerEstimateBody,
  PostGroomerEstimateResponse,
} from '~/models/estimate';

export const getGroomerEstimateGeneralList = async () => {
  return await api.get<GetGroomerEstimateGeneralListResponse>('/groomer/estimate/general/list');
};

export const getGroomerEstimateDesignationList = async () => {
  return await api.get<GetGroomerEstimateDesignationListResponse>(
    '/groomer/estimate/designation/list'
  );
};

export const getGroomerEstimateDetail = async (params: GetGroomerEstimateDetailRequestParams) => {
  return await api.get<GetGroomerEstimateDetailResponse>(
    `/groomer/estimate/${params.groomingEstimateId}/detail`
  );
};

export const postGroomerEstimate = async (body: PostGroomerEstimateBody) => {
  return await api.post<PostGroomerEstimateResponse>('/groomer/estimate', body);
};
