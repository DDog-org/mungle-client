import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '../query-keys';
import { getUserSearchGroomer, getUserSearchVet } from '~/apis';
import { GetUserSearchRequestParams } from '~/models';
import { PAGE_SIZE } from '~/constants/search';

export const useGetUserSearchGroomerInfiniteQuery = (params: GetUserSearchRequestParams) => {
  return useInfiniteQuery({
    queryKey: [...QUERY_KEYS.GET_USER_SEARCH_GROOMER, params],
    initialPageParam: 0,
    queryFn: ({ pageParam = 0 }) => {
      return getUserSearchGroomer({ ...params, page: pageParam, size: PAGE_SIZE });
    },
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.result.length === PAGE_SIZE ? allPages.length + 1 : undefined;
    },
  });
};

export const useGetUserSearchVetInfiniteQuery = (params: GetUserSearchRequestParams) => {
  return useInfiniteQuery({
    queryKey: [...QUERY_KEYS.GET_USER_SEARCH_VET, params],
    initialPageParam: 0,
    queryFn: ({ pageParam = 0 }) => {
      return getUserSearchVet({ ...params, page: pageParam, size: PAGE_SIZE });
    },
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.result.length === PAGE_SIZE ? allPages.length + 1 : undefined;
    },
  });
};
