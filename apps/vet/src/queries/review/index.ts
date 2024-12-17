import { useInfiniteQuery, useMutation, useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '../query-keys';
import { PAGE_SIZE } from '~/constants';
import {
  getVetReviewList,
  getVetReviewReport,
  getVetReviewReportList,
  postVetReviewReport,
} from '~/apis/review';
import {
  GetVetReviewReportRequestParams,
  GetVetReviewReportResponse,
  PostVetReviewReportRequestBody,
  PostVetReviewReportResponse,
} from '~/models';

export const useGetVetReviewListQuery = () => {
  return useInfiniteQuery({
    queryKey: QUERY_KEYS.GET_VET_REVIEW_LIST,
    initialPageParam: 1,
    queryFn: ({ pageParam = 0 }) => {
      return getVetReviewList({ page: pageParam, size: PAGE_SIZE });
    },
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.reviewList.length === PAGE_SIZE ? allPages.length + 1 : undefined;
    },
  });
};

export const useGetVetReviewReportListQuery = () => {
  return useInfiniteQuery({
    queryKey: QUERY_KEYS.GET_VET_REVIEW_REPORT_LIST,
    initialPageParam: 1,
    queryFn: ({ pageParam = 0 }) => {
      return getVetReviewReportList({ page: pageParam, size: PAGE_SIZE });
    },
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.reviewList.length === PAGE_SIZE ? allPages.length + 1 : undefined;
    },
  });
};

export const useGetVetReviewReportQuery = (params: GetVetReviewReportRequestParams) => {
  return useQuery<GetVetReviewReportResponse>({
    queryKey: QUERY_KEYS.GET_VET_REVIEW_REPORT,
    queryFn: () => {
      return getVetReviewReport(params);
    },
  });
};

export const usePostVetReviewReportMutation = () => {
  return useMutation({
    mutationKey: [QUERY_KEYS.POST_VET_REVIEW_REPORT],
    mutationFn: (body: PostVetReviewReportRequestBody) => {
      return postVetReviewReport(body);
    },
  });
};
