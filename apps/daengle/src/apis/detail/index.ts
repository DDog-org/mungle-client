import {
  GetUserVetDetailRequestParams,
  GetUserVetDetailResponse,
  GetUserShopDetailRequestParams,
  GetUserShopDetailResponse,
} from '~/models/detail';
import { api } from '~/apis';

export const getUserVetDetail = async ({ vetId }: GetUserVetDetailRequestParams) => {
  return await api.get<GetUserVetDetailResponse>(`/user/vet/${vetId}`);
};

export const getUserShopDetail = async ({ shopId }: GetUserShopDetailRequestParams) => {
  return await api.get<GetUserShopDetailResponse>(`/user/shop/${shopId}`);
};
