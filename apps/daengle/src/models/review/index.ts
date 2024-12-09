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
  groomingKeywordReviewList: string[];
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
  careKeywordReviewList: string[];
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
  reviewerName: string;
  reviewerImageUrl: string | null;
  groomingReviewId: number;
  groomerId: number;
  groomingKeywordReviewList: (keyof typeof GROOMER_REVIEW_KEYWORDS)[];
  revieweeName: string;
  starRating: StarRating;
  content: string | null;
  imageUrlList: string[] | null;
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
  careKeywordReviewList: (keyof typeof VET_REVIEW_KEYWORDS)[];
  revieweeName: string;
  starRating: StarRating;
  content: string | null;
  imageUrlList: string[] | null;
}
export interface PostUserGroomingReviewRequestBody {
  reservationId: number;
  starRating: number;
  groomingKeywordReviewList: string[];
  content: string;
  imageUrlList: string[];
}

export interface PostUserGroomingReviewResponse {
  reviewId: number;
  reviewerId: number;
  revieweeId: number;
}
