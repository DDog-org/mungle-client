import { api } from '~/apis';
import { GetUserShopsResponse, GetUserVetsResponse } from '~/models/main';

export const getUserShops = async () => {
  return await api.get<GetUserShopsResponse>('/user/shops');
};

export const getUserVets = async () => {
  return await api.get<GetUserVetsResponse>('/user/vets');
};
