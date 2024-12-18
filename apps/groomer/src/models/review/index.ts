import { GroomerReviewList, GroomerReviewReportList } from '~/interfaces/review';

export interface GetGroomerReviewListRequestParams {
  page: number;
  size: number;
}

export interface GetGroomerReviewListResponse {
  reviewCount: number;
  reviewList: GroomerReviewList[];
}

export interface GetGroomerReviewReportListRequestParams {
  page: number;
  size: number;
}

export interface GetGroomerReviewReportListResponse {
  reviewCount: number;
  reviewList: GroomerReviewReportList[];
}

export interface GetGroomerReviewReportRequestParams {
  groomingReviewId: number;
}

export interface GetGroomerReviewReportResponse {
  reviewerNickName: string;
  reviewerImageUrl: string;
}

export interface PostGroomerReviewReportRequestBody {
  groomerId: number;
  reviewId: number;
  reportType: string;
  reportContent: string;
}

export interface PostGroomerReviewReportResponse {
  reviewId: number;
  reviewerId: number;
  revieweeId: number;
}
