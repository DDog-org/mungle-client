import { api } from '~/apis';
import { GetDaengleEstimateListResponse } from '~/models';

export const getDaengleEstimateList = async () => {
  return await api.get<GetDaengleEstimateListResponse>('/estimate/list');
};
