import { useQuery } from '@tanstack/react-query';
import {
  GetUserVetDetailRequestParams,
  GetUserVetDetailResponse,
  GetUserShopDetailRequestParams,
  GetUserShopDetailResponse,
} from '~/models/detail';
import { QUERY_KEYS } from '../query-keys';
import { getUserVetDetail, getUserShopDetail } from '~/apis/detail';

export const useGetUserVetDetailQuery = (params: GetUserVetDetailRequestParams) => {
  return useQuery<GetUserVetDetailResponse>({
    queryKey: QUERY_KEYS.GET_USER_VET_DETAIL,
    queryFn: () => {
      return getUserVetDetail(params);
    },
  });
};

export const useGetUserShopDetailQuery = (params: GetUserShopDetailRequestParams) => {
  return useQuery<GetUserShopDetailResponse>({
    queryKey: QUERY_KEYS.GET_USER_SHOP_DETAIL,
    queryFn: () => {
      return getUserShopDetail(params);
    },
  });
};
