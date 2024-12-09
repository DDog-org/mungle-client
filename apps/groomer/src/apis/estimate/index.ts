import { api } from '~/apis';
import {
  GetGroomerEstimateDetailParams,
  GetGroomerEstimateDetailResponse,
  GetGroomerEstimateListResponse,
} from '~/models/estimate';

export const getGroomerEstimateList = async () => {
  return await api.get<GetGroomerEstimateListResponse>('/groomer/estimate/list');
};

export const getGroomerEstimateDetail = async (params: GetGroomerEstimateDetailParams) => {
  return await api.get<GetGroomerEstimateDetailResponse>(`/groomer/estimate/${params.id}/detail`);
};
