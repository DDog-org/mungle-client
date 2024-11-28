import { api } from '@services/api/api';
import { GetGroomerEstimateListResponse } from '@services/types/estimate-list';

export const getGroomerEstimateList = async () => {
  const response = await api.get<GetGroomerEstimateListResponse>('/groomer/estimate/list');
  return response.data.response;
};
