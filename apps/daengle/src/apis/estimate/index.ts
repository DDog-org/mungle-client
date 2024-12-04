import { api } from '~/apis';
import { GroomerDetailResponse, CareDetailResponse } from '~/models';

export const getGroomingEstimateDetail = async (groomingEstimateId: number) => {
  return await api.get<GroomerDetailResponse>(
    `/user/estimate/${groomingEstimateId}/grooming-detail`
  );
};

export const getCareEstimateDetail = async (careEstimateId: number) => {
  return await api.get<CareDetailResponse>(`/user/estimate/${careEstimateId}/care-detail`);
};
