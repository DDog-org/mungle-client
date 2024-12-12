import { useInfiniteQuery, useMutation } from '@tanstack/react-query';
import { PAGE_SIZE } from '~/constants/review';
import {
  deleteUserCareReview,
  deleteUserGroomingReview,
  getUserCareMyReviewList,
  getUserGroomerReviewList,
  getUserGroomingMyReviewList,
  getUserVetReviewList,
} from '~/apis/review';
import { DeleteUserCareReviewRequestParams, DeleteUserGroomingReviewRequestParams } from '~/models';
import { QUERY_KEYS } from '../query-keys';

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

export const getUserGroomerReviewListInfiniteQuery = (groomerId: number) => {
  return useInfiniteQuery({
    queryKey: QUERY_KEYS.GET_USER_GROOMER_REVIEW_LIST,
    initialPageParam: 1,
    queryFn: ({ pageParam = 1 }) => {
      return getUserGroomerReviewList({ groomerId, params: { page: pageParam, size: PAGE_SIZE } });
    },
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.reviewList.length === PAGE_SIZE ? allPages.length + 1 : undefined;
    },
    enabled: !!groomerId,
  });
};

export const getUserVetReviewListInfiniteQuery = (vetId: number) => {
  return useInfiniteQuery({
    queryKey: QUERY_KEYS.GET_USER_VET_REVIEW_LIST,
    initialPageParam: 1,
    queryFn: ({ pageParam = 1 }) => {
      return getUserVetReviewList({ vetId, params: { page: pageParam, size: PAGE_SIZE } });
    },
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.reviewList.length === PAGE_SIZE ? allPages.length + 1 : undefined;
    },
    enabled: !!vetId,
  });
};
