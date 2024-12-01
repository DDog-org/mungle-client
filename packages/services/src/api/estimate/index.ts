import { api } from '@services/api/api';
import { GroomerDetailResponse, CareDetailResponse } from '@services/types/estimate';

export const getGroomingEstimateDetail = async (groomingEstimateId: number) => {
  const response = await api.get<GroomerDetailResponse>(
    `/daengle/estimate/${groomingEstimateId}/grooming-detail`
  );
  return response.data.response;
};

export const getCareEstimateDetail = async (careEstimateId: number) => {
  const response = await api.get<CareDetailResponse>(
    `/daengle/estimate/${careEstimateId}/care-detail`
  );
  return response.data.response;
};
