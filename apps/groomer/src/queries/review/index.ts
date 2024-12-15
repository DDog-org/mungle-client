import { useInfiniteQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '../query-keys';
import { PAGE_SIZE } from '~/constants';
import { getGroomerReviewList, getGroomerReviewReportList } from '~/apis';

export const getGroomerReviewListQuery = () => {
  return useInfiniteQuery({
    queryKey: QUERY_KEYS.GET_GROOMING_REVIEW_LIST,
    initialPageParam: 1,
    queryFn: ({ pageParam = 0 }) => {
      return getGroomerReviewList({ page: pageParam, size: PAGE_SIZE });
    },
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.reviewList.length === PAGE_SIZE ? allPages.length + 1 : undefined;
    },
  });
};

export const getGroomerReviewReportListQuery = () => {
  return useInfiniteQuery({
    queryKey: QUERY_KEYS.GET_GROOMING_REVIEW_REPORT_LIST,
    initialPageParam: 1,
    queryFn: ({ pageParam = 0 }) => {
      return getGroomerReviewReportList({ page: pageParam, size: PAGE_SIZE });
    },
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.reviewList.length === PAGE_SIZE ? allPages.length + 1 : undefined;
    },
  });
};
