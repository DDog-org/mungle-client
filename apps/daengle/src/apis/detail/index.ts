import { api, guestApi } from '~/apis';
import {
  GetUserVetDetailRequestParams,
  GetUserVetDetailResponse,
  GetUserShopDetailRequestParams,
  GetUserShopDetailResponse,
  GetUserGroomerDetailRequestParams,
  GetUserGroomerDetailResponse,
} from '~/models';

export const getUserVetDetail = async ({ vetId }: GetUserVetDetailRequestParams) => {
  return await guestApi.get<GetUserVetDetailResponse>(`/user/vet/${vetId}`);
};

export const getUserShopDetail = async ({ shopId }: GetUserShopDetailRequestParams) => {
  return await guestApi.get<GetUserShopDetailResponse>(`/user/shop/${shopId}`);
};

export const getUserGroomerDetail = async ({ groomerId }: GetUserGroomerDetailRequestParams) => {
  return await api.get<GetUserGroomerDetailResponse>(`/user/groomer/${groomerId}`);
};
