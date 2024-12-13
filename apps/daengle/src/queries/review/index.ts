import { useInfiniteQuery, useMutation, useQuery } from '@tanstack/react-query';
import { PAGE_SIZE } from '~/constants/review';
import {
  deleteUserCareReview,
  deleteUserGroomingReview,
  getUserCareMyReviewList,
  getUserGroomerReviewList,
  getUserGroomingMyReviewList,
  getUserVetReviewList,
  getUserGroomingReview,
  getUserReservationReview,
  patchUserGroomingReview,
  postUserGroomingReview,
  postUserCareReview,
  getUserCareReview,
  patchUserCareReview,
} from '~/apis/review';
import {
  DeleteUserCareReviewRequestParams,
  DeleteUserGroomingReviewRequestParams,
  GetUserReservationReviewParams,
  GetUserReservationReviewResponse,
  GetUserGroomingReviewParams,
  PatchUserGroomingReviewRequestParams,
  PostUserGroomingReviewRequestBody,
  GetUserGroomingReviewResponse,
  PostUserCareReviewRequestBody,
  GetUserCareReviewParams,
  GetUserCareReviewResponse,
  PatchUserCareReviewRequestParams,
} from '~/models';
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

export const useGetUserReservationReviewQuery = (params: GetUserReservationReviewParams) => {
  return useQuery<GetUserReservationReviewResponse>({
    queryKey: [QUERY_KEYS.GET_USER_RESERVATION_REVIEW, params],
    queryFn: async () => {
      try {
        return await getUserReservationReview(params);
      } catch (error) {
        throw new Error(String(error));
      }
    },
    enabled: !!params,
  });
};

export const usePostGroomingReviewMutation = () => {
  return useMutation({
    mutationKey: QUERY_KEYS.POST_GROOMING_REVIEW,
    mutationFn: async (body: PostUserGroomingReviewRequestBody) => {
      try {
        return await postUserGroomingReview(body);
      } catch (error) {
        throw new Error(String(error));
      }
    },
  });
};

export const useGetUserGroomingReviewQuery = (params: GetUserGroomingReviewParams) => {
  return useQuery<GetUserGroomingReviewResponse>({
    queryKey: [QUERY_KEYS.GET_USER_GROOMING_REVIEW, params],
    queryFn: async () => {
      try {
        return await getUserGroomingReview(params);
      } catch (error) {
        throw new Error(String(error));
      }
    },
    enabled: !!params,
  });
};

export const usePatchUserGroomingReviewMutation = () => {
  return useMutation({
    mutationKey: QUERY_KEYS.PATCH_GROOMING_REVIEW,
    mutationFn: async (params: PatchUserGroomingReviewRequestParams) => {
      try {
        return await patchUserGroomingReview(params);
      } catch (error) {
        throw new Error(String(error));
      }
    },
  });
};

export const usePostCareReviewMutation = () => {
  return useMutation({
    mutationKey: QUERY_KEYS.POST_CARE_REVIEW,
    mutationFn: async (body: PostUserCareReviewRequestBody) => {
      try {
        return await postUserCareReview(body);
      } catch (error) {
        throw new Error(String(error));
      }
    },
  });
};

export const useGetUserCareReviewQuery = (params: GetUserCareReviewParams) => {
  return useQuery<GetUserCareReviewResponse>({
    queryKey: [QUERY_KEYS.GET_USER_CARE_REVIEW, params],
    queryFn: async () => {
      try {
        return await getUserCareReview(params);
      } catch (error) {
        throw new Error(String(error));
      }
    },
    enabled: !!params,
  });
};

export const usePatchUserCareReviewMutation = () => {
  return useMutation({
    mutationKey: QUERY_KEYS.PATCH_CARE_REVIEW,
    mutationFn: async (params: PatchUserCareReviewRequestParams) => {
      try {
        return await patchUserCareReview(params);
      } catch (error) {
        throw new Error(String(error));
      }
    },
  });
};
