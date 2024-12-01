import { api } from '@daengle/services';
import { GetDaengleEstimateListResponse } from '~/models';

export const getDaengleEstimateList = async () => {
  const response = await api.get<GetDaengleEstimateListResponse>('/daengle/estimate/list');
  return response.data;
};
