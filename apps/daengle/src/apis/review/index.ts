import {
  DeleteUserCareReviewRequestParams,
  DeleteUserCareReviewResponse,
  DeleteUserGroomingReviewRequestParams,
  DeleteUserGroomingReviewResponse,
  GetUserCareMyReviewListRequestParams,
  GetUserCareMyReviewListResponse,
  GetUserGroomingMyReviewListRequestParams,
  GetUserGroomingMyReviewListResponse,
} from '~/models/review';
import { api } from '../config';

export const getUserGroomingMyReviewList = async (
  params: GetUserGroomingMyReviewListRequestParams
) => {
  return await api.get<GetUserGroomingMyReviewListResponse>(
    '/user/grooming/my-review/list',
    params
  );
};

export const getUserCareMyReviewList = async (params: GetUserCareMyReviewListRequestParams) => {
  return await api.get<GetUserCareMyReviewListResponse>('/user/care/my-review/list', params);
};

export const deleteUserGroomingReview = async (params: DeleteUserGroomingReviewRequestParams) => {
  return await api.delete<DeleteUserGroomingReviewResponse>(
    `/user/grooming/review/${params.reviewId}`
  );
};

export const deleteUserCareReview = async (params: DeleteUserCareReviewRequestParams) => {
  return await api.delete<DeleteUserCareReviewResponse>(`/user/care/review/${params.reviewId}`);
};
