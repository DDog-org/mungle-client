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
