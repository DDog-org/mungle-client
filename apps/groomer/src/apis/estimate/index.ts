import { api } from '~/apis';
import { GetGroomerEstimateDetailResponse, GetGroomerEstimateListResponse } from '~/models';

export const getGroomerEstimateList = async () => {
  return await api.get<GetGroomerEstimateListResponse>('/estimate/list');
};

export const getGroomerEstimateDetail = async (groomingEstimateId: number) => {
  return await api.get<GetGroomerEstimateDetailResponse>(`/estimate/${groomingEstimateId}/detail`);
};
