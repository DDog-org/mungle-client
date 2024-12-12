import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import {
  getPaymentCareHistoryList,
  getPaymentGroomingHistoryList,
  getPaymentHistory,
} from '~/apis';
import { PAGE_SIZE } from '~/constants/review';
import { QUERY_KEYS } from '../query-keys';

export const useGetPaymentGroomingHistoryListInfiniteQuery = () => {
  return useInfiniteQuery({
    queryKey: QUERY_KEYS.GET_PAYMENT_GROOMING_HISTORY_LIST,
    initialPageParam: 1,
    queryFn: ({ pageParam = 1 }) => {
      return getPaymentGroomingHistoryList({ page: pageParam, size: PAGE_SIZE });
    },
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.paymentHistoryList.length === PAGE_SIZE ? allPages.length + 1 : undefined;
    },
  });
};

export const useGetPaymentCareHistoryListInfiniteQuery = () => {
  return useInfiniteQuery({
    queryKey: QUERY_KEYS.GET_PAYMENT_CARE_HISTORY_LIST,
    initialPageParam: 1,
    queryFn: ({ pageParam = 1 }) => {
      return getPaymentCareHistoryList({ page: pageParam, size: PAGE_SIZE });
    },
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.paymentHistoryList.length === PAGE_SIZE ? allPages.length + 1 : undefined;
    },
  });
};

export const useGetPaymentHistoryQuery = (reservationId: number) => {
  return useQuery({
    queryKey: QUERY_KEYS.DELETE_USER_CARE_REVIEW,
    queryFn: () => getPaymentHistory({ reservationId }),
    enabled: !!reservationId,
  });
};
