import { useQuery } from '@tanstack/react-query';
import {
  GetUserVetDetailRequestParams,
  GetUserVetDetailResponse,
  GetUserShopDetailRequestParams,
  GetUserShopDetailResponse,
  GetUserGroomerDetailRequestParams,
  GetUserGroomerDetailResponse,
} from '~/models/detail';
import { QUERY_KEYS } from '../query-keys';
import { getUserVetDetail, getUserShopDetail, getUserGroomerDetail } from '~/apis/detail';

export const useGetUserVetDetailQuery = (params: GetUserVetDetailRequestParams) => {
  return useQuery<GetUserVetDetailResponse>({
    queryKey: [...QUERY_KEYS.GET_USER_VETS_DETAIL, params.vetId],
    queryFn: () => getUserVetDetail(params),
    enabled: !!params.vetId,
  });
};

export const useGetUserShopDetailQuery = (params: GetUserShopDetailRequestParams) => {
  return useQuery<GetUserShopDetailResponse>({
    queryKey: [...QUERY_KEYS.GET_USER_SHOP_DETAIL, params.shopId],
    queryFn: () => getUserShopDetail(params),
    enabled: !!params.shopId,
  });
};

export const useGetUserGroomerDetailQuery = (params: GetUserGroomerDetailRequestParams) => {
  return useQuery<GetUserGroomerDetailResponse>({
    queryKey: QUERY_KEYS.GET_USER_GROOMERS_DETAIL,
    queryFn: () => {
      return getUserGroomerDetail(params);
    },
  });
};
