import { useInfiniteQuery } from '@tanstack/react-query';
import { getUserShops, getUserVets } from '~/apis';
import { PAGE_SIZE } from '~/constants';
import { QUERY_KEYS } from '../query-keys';

export const useGetUserShopsInfiniteQuery = ({ address }: { address?: string }) => {
  return useInfiniteQuery({
    queryKey: [...QUERY_KEYS.GET_USER_SHOPS, address],
    initialPageParam: 0,
    queryFn: ({ pageParam = 0 }) => {
      return getUserShops({
        page: pageParam,
        size: PAGE_SIZE,
        address: address ?? '서울 강남구 역삼동',
      });
    },
    getNextPageParam: (lastPage) => {
      const { currentPage, totalPages } = lastPage;
      return currentPage + 1 < totalPages ? currentPage + 1 : undefined;
    },
  });
};

export const useGetUserVetsInfiniteQuery = ({ address }: { address?: string }) => {
  return useInfiniteQuery({
    queryKey: [...QUERY_KEYS.GET_USER_VETS, address],
    initialPageParam: 0,
    queryFn: ({ pageParam = 0 }) => {
      return getUserVets({ page: pageParam, size: PAGE_SIZE, address });
    },
    getNextPageParam: (lastPage) => {
      const { currentPage, totalPages } = lastPage;
      return currentPage + 1 < totalPages ? currentPage + 1 : undefined;
    },
  });
};
