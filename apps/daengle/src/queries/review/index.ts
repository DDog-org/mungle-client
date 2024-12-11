import { useInfiniteQuery, useMutation } from '@tanstack/react-query';
import {
  deleteUserCareReview,
  deleteUserGroomingReview,
  getUserCareMyReviewList,
  getUserGroomingMyReviewList,
} from '~/apis/review';
import { PAGE_SIZE } from '~/constants/review';
import { QUERY_KEYS } from '../query-keys';
import {
  DeleteUserCareReviewRequestParams,
  DeleteUserGroomingReviewRequestParams,
} from '~/models/review';

export const getUserGroomingMyReviewListInfiniteQuery = () => {
  return useInfiniteQuery({
    queryKey: QUERY_KEYS.GET_USER_GROOMING_MY_REVIEW_LIST,
    initialPageParam: 1,
    queryFn: ({ pageParam = 1 }) => {
      return getUserGroomingMyReviewList({ page: pageParam, size: PAGE_SIZE });
    },
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.reviewList.length === PAGE_SIZE ? allPages.length + 1 : undefined;
    },
  });
};

export const getUserCareMyReviewListInfiniteQuery = () => {
  return useInfiniteQuery({
    queryKey: QUERY_KEYS.GET_USER_CARE_MY_REVIEW_LIST,
    initialPageParam: 1,
    queryFn: ({ pageParam = 1 }) => {
      return getUserCareMyReviewList({ page: pageParam, size: PAGE_SIZE });
    },
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.reviewList.length === PAGE_SIZE ? allPages.length + 1 : undefined;
    },
  });
};

export const deleteUserGroomingReviewMutation = () => {
  return useMutation({
    mutationKey: QUERY_KEYS.DELETE_USER_CARE_REVIEW,
    mutationFn: async (params: DeleteUserGroomingReviewRequestParams) =>
      deleteUserGroomingReview(params),
  });
};

export const deleteUserCareReviewMutation = () => {
  return useMutation({
    mutationKey: QUERY_KEYS.DELETE_USER_CARE_REVIEW,
    mutationFn: async (params: DeleteUserCareReviewRequestParams) => deleteUserCareReview(params),
  });
};
