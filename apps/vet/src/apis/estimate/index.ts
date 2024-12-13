import {
  GetVetEstimateDesignationListResponse,
  GetVetEstimateDetailRequestParams,
  GetVetEstimateDetailResponse,
  GetVetEstimateGeneralListResponse,
  PostVetEstimateBody,
  PostVetEstimateResponse,
} from '~/models/estimate';
import { api } from '../config';

export const getVetEstimateGeneralList = async () => {
  return await api.get<GetVetEstimateGeneralListResponse>('/vet/estimate/general/list');
};

export const getVetEstimateDesignationList = async () => {
  return await api.get<GetVetEstimateDesignationListResponse>('/vet/estimate/designation/list');
};

export const getVetEstimateDetail = async (params: GetVetEstimateDetailRequestParams) => {
  return await api.get<GetVetEstimateDetailResponse>(
    `/vet/estimate/${params.careEstimateId}/detail`
  );
};

export const postVetEstimate = async (body: PostVetEstimateBody) => {
  return await api.post<PostVetEstimateResponse>('/vet/estimate', body);
};
