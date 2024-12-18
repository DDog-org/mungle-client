import { guestApi } from '~/apis';
import { GetUserShopsResponse, GetUserVetsResponse } from '~/models/home';

export const getUserShops = async () => {
  return await guestApi.get<GetUserShopsResponse>('/user/shops');
};

export const getUserVets = async () => {
  return await guestApi.get<GetUserVetsResponse>('/user/vets');
};
