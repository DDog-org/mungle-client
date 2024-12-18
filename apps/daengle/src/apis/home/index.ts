import { guestApi } from '~/apis';
import {
  GetUserShopsParams,
  GetUserShopsResponse,
  GetUserVetsParams,
  GetUserVetsResponse,
} from '~/models';

export const getUserShops = async (params: GetUserShopsParams) => {
  return await guestApi.get<GetUserShopsResponse>('/user/shops', { params });
};

export const getUserVets = async (params: GetUserVetsParams) => {
  return await guestApi.get<GetUserVetsResponse>('/user/vets', { params });
};
