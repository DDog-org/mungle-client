import { useInfiniteQuery, useMutation, useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '../query-keys';
import { PAGE_SIZE } from '~/constants';
import {
  getGroomerReviewList,
  getGroomerReviewReport,
  getGroomerReviewReportList,
  postGroomerReviewReport,
} from '~/apis';
import {
  GetGroomerReviewReportRequestParams,
  GetGroomerReviewReportResponse,
  PostGroomerReviewReportRequestBody,
} from '~/models';

export const useGetGroomerReviewListQuery = () => {
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

export const useGetGroomerReviewReportListQuery = () => {
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

export const useGetGroomerReviewReportQuery = (params: GetGroomerReviewReportRequestParams) => {
  return useQuery<GetGroomerReviewReportResponse>({
    queryKey: QUERY_KEYS.GET_GROOMER_REVIEW_REPORT,
    queryFn: () => {
      return getGroomerReviewReport(params);
    },
  });
};

export const usePostVetReviewReportMutation = () => {
  return useMutation({
    mutationKey: [QUERY_KEYS.POST_GROOMER_REVIEW_REPORT],
    mutationFn: (body: PostGroomerReviewReportRequestBody) => {
      return postGroomerReviewReport(body);
    },
  });
};
