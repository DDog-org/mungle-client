import { api } from '~/apis';
import { GetUserEstimateListResponse } from '~/models';

export const getUserEstimateList = async () => {
  return await api.get<GetUserEstimateListResponse>('/user/estimate/list');
};
