import {
  DeleteUserCareReviewRequestParams,
  DeleteUserCareReviewResponse,
  DeleteUserGroomingReviewRequestParams,
  DeleteUserGroomingReviewResponse,
  GetUserCareMyReviewListRequestParams,
  GetUserCareMyReviewListResponse,
  GetUserGroomerReviewListRequestParams,
  GetUserGroomerReviewListResponse,
  GetUserGroomingMyReviewListRequestParams,
  GetUserGroomingMyReviewListResponse,
  GetUserVetReviewListRequestParams,
  GetUserVetReviewListResponse,
  PostUserGroomingReviewRequestBody,
  PostUserGroomingReviewResponse,
  GetUserReservationReviewParams,
  GetUserReservationReviewResponse,
  GetUserGroomingReviewParams,
  GetUserGroomingReviewResponse,
  PatchUserGroomingReviewRequestParams,
  PatchUserGroomingReviewResponse,
} from '~/models';
import { api } from '../config';

export const getUserGroomingMyReviewList = async (
  params: GetUserGroomingMyReviewListRequestParams
) => {
  return await api.get<GetUserGroomingMyReviewListResponse>('/user/grooming/my-review/list', {
    params,
  });
};

export const getUserCareMyReviewList = async (params: GetUserCareMyReviewListRequestParams) => {
  return await api.get<GetUserCareMyReviewListResponse>('/user/care/my-review/list', { params });
};

export const deleteUserGroomingReview = async ({
  reviewId,
}: DeleteUserGroomingReviewRequestParams) => {
  return await api.delete<DeleteUserGroomingReviewResponse>(`/user/grooming/review/${reviewId}`);
};

export const deleteUserCareReview = async ({ reviewId }: DeleteUserCareReviewRequestParams) => {
  return await api.delete<DeleteUserCareReviewResponse>(`/user/care/review/${reviewId}`);
};

export const getUserGroomerReviewList = async ({
  groomerId,
  params,
}: GetUserGroomerReviewListRequestParams) => {
  return await api.get<GetUserGroomerReviewListResponse>(`/user/groomer/${groomerId}/review/list`, {
    params,
  });
};

export const getUserVetReviewList = async ({
  vetId,
  params,
}: GetUserVetReviewListRequestParams) => {
  return await api.get<GetUserVetReviewListResponse>(`/user/vet/${vetId}/review/list`, {
    params,
  });
};

export const getUserReservationReview = async (params: GetUserReservationReviewParams) => {
  return await api.get<GetUserReservationReviewResponse>(
    `/user/reservation/${params.reservationId}/review`
  );
};

export const postUserGroomingReview = async (body: PostUserGroomingReviewRequestBody) => {
  return await api.post<PostUserGroomingReviewResponse>('/user/grooming/review', body);
};

export const getUserGroomingReview = async (params: GetUserGroomingReviewParams) => {
  return await api.get<GetUserGroomingReviewResponse>(`/user/grooming/review/${params.reviewId}`);
};

export const patchUserGroomingReview = async (params: PatchUserGroomingReviewRequestParams) => {
  return await api.patch<PatchUserGroomingReviewResponse>(
    `/user/grooming/review/${params.reviewId}`,
    params.body
  );
};
