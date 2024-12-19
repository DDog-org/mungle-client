import {
  GetUserVetDetailRequestParams,
  GetUserVetDetailResponse,
  GetUserShopDetailRequestParams,
  GetUserShopDetailResponse,
  GetUserGroomerDetailRequestParams,
  GetUserGroomerDetailResponse,
} from '~/models/detail';
import { api } from '~/apis';

export const getUserVetDetail = async ({ vetId }: GetUserVetDetailRequestParams) => {
  return await api.get<GetUserVetDetailResponse>(`/user/vet/${vetId}`);
};

export const getUserShopDetail = async ({ shopId }: GetUserShopDetailRequestParams) => {
  return await api.get<GetUserShopDetailResponse>(`/user/shop/${shopId}`);
};

export const getUserGroomerDetail = async ({ groomerId }: GetUserGroomerDetailRequestParams) => {
  return await api.get<GetUserGroomerDetailResponse>(`/user/groomer/${groomerId}`);
};
