import { api } from '@services/api/api';
import { GetDaengleEstimateListResponse } from '@services/types/estimate';

export const getDaengleEstimateList = async () => {
  const response = await api.get<GetDaengleEstimateListResponse>('/daengle/estimate/list');
  return response.data;
};
