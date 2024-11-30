import { api } from '@services/api/api';
import {
  GetGroomerEstimateDetailResponse,
  GetGroomerEstimateListResponse,
} from '@services/types/estimate';

export const getGroomerEstimateList = async () => {
  const response = await api.get<GetGroomerEstimateListResponse>('/groomer/estimate/list');
  return response.data.response;
};

export const getGroomerEstimateDetail = async (groomingEstimateId: number) => {
  const response = await api.get<GetGroomerEstimateDetailResponse>(
    `/groomer/estimate/${groomingEstimateId}/detail`
  );
  return response.data;
};
