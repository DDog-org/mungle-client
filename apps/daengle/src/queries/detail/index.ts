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

export const useGetUserGroomerDetailQuery = (params: GetUserGroomerDetailRequestParams) => {
  return useQuery<GetUserGroomerDetailResponse>({
    queryKey: QUERY_KEYS.GET_USER_GROOMER_DETAIL,
    queryFn: () => {
      return getUserGroomerDetail(params);
    },
  });
};
