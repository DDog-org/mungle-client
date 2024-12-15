import { useQuery } from '@tanstack/react-query';
import { GetUserShopsResponse, GetUserVetsResponse } from '~/models/main';
import { QUERY_KEYS } from '../query-keys';
import { getUserShops, getUserVets } from '~/apis/main';

export const useGetUserShopsQuery = () => {
  return useQuery<GetUserShopsResponse>({
    queryKey: QUERY_KEYS.GET_USER_SHOPS,
    queryFn: async () => {
      const response = await getUserShops();
      return response;
    },
  });
};

export const useGetUserVetsQuery = () => {
  return useQuery<GetUserVetsResponse>({
    queryKey: QUERY_KEYS.GET_USER_VETS,
    queryFn: async () => {
      const response = await getUserVets();
      return response;
    },
  });
};
