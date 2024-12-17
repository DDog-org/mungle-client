import { CareReviewList, CareReviewReportList } from '~/interfaces';

export interface GetVetReviewListRequestParams {
  page: number;
  size: number;
}

export interface GetVetReviewListResponse {
  reviewCount: number;
  reviewList: CareReviewList[];
}

export interface GetVetReviewReportListRequestParams {
  page: number;
  size: number;
}

export interface GetVetReviewReportListResponse {
  reviewCount: number;
  reviewList: CareReviewReportList[];
}

export interface GetVetReviewReportRequestParams {
  careReviewId: number;
}

export interface GetVetReviewReportResponse {
  reviewerNickName: string;
  reviewerImageUrl: string;
}

export interface PostVetReviewReportRequestBody {
  vetId: number;
  reviewId: number;
  reportType: string;
  reportContent: string;
}

export interface PostVetReviewReportResponse {
  reviewId: number;
  reviewerId: number;
  revieweeId: number;
}
