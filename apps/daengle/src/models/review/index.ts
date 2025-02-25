import { GROOMER_REVIEW_KEYWORDS, VET_REVIEW_KEYWORDS } from '~/constants/review';

export interface GetUserGroomingMyReviewListRequestParams {
  page: number;
  size: number;
}

export interface GetUserGroomingMyReviewListResponse {
  reviewCount: number;
  reviewList: GetUserGroomingMyReviewList[];
}

export type StarRating = 1 | 2 | 3 | 4 | 5;

export interface GetUserGroomingMyReviewList {
  groomingReviewId: number;
  groomerId: number;
  groomingKeywordList: string[];
  revieweeName: string;
  starRating: StarRating;
  content: string | null;
  imageUrlList: string[] | null;
}

export interface GetUserCareMyReviewListRequestParams {
  page: number;
  size: number;
}

export interface GetUserCareMyReviewListResponse {
  reviewCount: number;
  reviewList: GetUserCareMyReviewList[];
}

export interface GetUserCareMyReviewList {
  careReviewId: number;
  vetId: number;
  careKeywordList: string[];
  revieweeName: string;
  starRating: StarRating;
  content: string | null;
  imageUrlList: string[] | null;
}

export interface DeleteUserGroomingReviewRequestParams {
  reviewId: number;
}

export interface DeleteUserGroomingReviewResponse {
  reviewId: number;
  reviewerId: number;
  revieweeId: number;
}

export interface DeleteUserCareReviewRequestParams {
  reviewId: number;
}

export interface DeleteUserCareReviewResponse {
  reviewId: number;
  reviewerId: number;
  revieweeId: number;
}

export interface GetUserGroomerReviewListRequestParams {
  groomerId: number;
  params: {
    page: number;
    size: number;
  };
}

export interface GetUserGroomerReviewListResponse {
  reviewCount: number;
  reviewList: GetUserGroomerReviewList[];
}

export interface GetUserGroomerReviewList {
  groomingReviewId: number;
  groomerId: number;
  groomingKeywordList: (keyof typeof GROOMER_REVIEW_KEYWORDS)[];
  reviewerName: string;
  reviewerImageUrl: string | null;
  revieweeName: string;
  createdAt: string;
  starRating: StarRating;
  content: string | null;
  imageUrlList: string[];
}

export interface GetUserVetReviewListRequestParams {
  vetId: number;
  params: {
    page: number;
    size: number;
  };
}

export interface GetUserVetReviewListResponse {
  reviewCount: number;
  reviewList: GetUserVetReviewList[];
}

export interface GetUserVetReviewList {
  reviewerName: string;
  reviewerImageUrl: string | null;
  careReviewId: number;
  vetId: number;
  careKeywordList: (keyof typeof VET_REVIEW_KEYWORDS)[];
  revieweeName: string;
  starRating: StarRating;
  content: string | null;
  imageUrlList: string[] | null;
  createdAt: string;
}
export interface GetUserReservationReviewParams {
  reservationId: number;
}

export interface GetUserReservationReviewResponse {
  reservationId: number;
  recipientName: string;
  shopName?: string;
  schedule: string;
}

export interface PostUserGroomingReviewRequestBody {
  reservationId: number;
  starRating: number;
  groomingKeywordList: string[];
  content: string;
  imageUrlList: string[];
}

export interface PostUserGroomingReviewResponse {
  reviewId: number;
  reviewerId: number;
  revieweeId: number;
}

export interface GetUserGroomingReviewParams {
  reviewId: number;
}

export interface GetUserGroomingReviewResponse {
  groomingReviewId: number;
  reservationId: number;
  groomerId: number;
  groomingKeywordList: string[];
  revieweeName: string;
  shopName?: string;
  schedule: string;
  starRating: number;
  content: string;
  imageUrlList: string[];
}

export interface PatchUserGroomingReviewRequestParams {
  reviewId: number;
  body: PatchUserGroomingReviewRequestBody;
}

export interface PatchUserGroomingReviewRequestBody {
  reservationId: number;
  starRating: number;
  groomingKeywordList: string[];
  content: string;
  imageUrlList: string[];
}

export interface PatchUserGroomingReviewResponse {
  message: string;
}

export interface PostUserCareReviewRequestBody {
  reservationId: number;
  starRating: number;
  careKeywordList: string[];
  content: string;
  imageUrlList: string[];
}

export interface PostUserCareReviewResponse {
  reviewId: number;
  reviewerId: number;
  revieweeId: number;
}

export interface GetUserCareReviewParams {
  reviewId: number;
}

export interface GetUserCareReviewResponse {
  careReviewId: number;
  reservationId: number;
  vetId: number;
  careKeywordList: string[];
  shopName?: string;
  revieweeName: string;
  schedule: string;
  starRating: number;
  content: string;
  imageUrlList: string[];
}

export interface PatchUserCareReviewRequestParams {
  reviewId: number;
  body: PatchUserCareReviewRequestBody;
}

export interface PatchUserCareReviewRequestBody {
  reservationId: number;
  starRating: number;
  careKeywordList: string[];
  content: string;
  imageUrlList: string[];
}

export interface PatchUserCareReviewResponse {
  message: string;
}
