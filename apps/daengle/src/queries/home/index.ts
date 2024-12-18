import { useQuery } from '@tanstack/react-query';
import { getUserShops, getUserVets } from '~/apis';
import { GetUserShopsResponse, GetUserVetsResponse } from '~/models';
import { QUERY_KEYS } from '../query-keys';

export const useGetUserShopsQuery = () => {
  return useQuery<GetUserShopsResponse>({
    queryKey: QUERY_KEYS.GET_USER_SHOPS,
    queryFn: getUserShops,
  });
};

export const useGetUserVetsQuery = () => {
  return useQuery<GetUserVetsResponse>({
    queryKey: QUERY_KEYS.GET_USER_VETS,
    queryFn: getUserVets,
  });
};
