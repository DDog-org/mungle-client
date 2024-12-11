export interface GetUserGroomingMyReviewListRequestParams {
  page: number;
  size: number;
}

export interface GetUserGroomingMyReviewListResponse {
  reviewCount: number;
  reviewList: GetUserGroomingMyReviewList[];
}

export interface GetUserGroomingMyReviewList {
  groomingReviewId: number;
  groomerId: number;
  groomingKeywordReviewList: string[];
  revieweeName: string;
  starRating: 1 | 2 | 3 | 4 | 5;
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
  starRating: 1 | 2 | 3 | 4 | 5;
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
