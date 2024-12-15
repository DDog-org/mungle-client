export interface GroomerReviewList {
  groomingReviewId: number;
  groomerId: number;
  groomingKeywordList: string[];
  reviewerName: string;
  reviewerImageUrl: string;
  revieweeName: string;
  createdAt: string;
  starRating: number;
  content: string;
  imageUrlList: string[];
}

export interface GroomerReviewReportList {
  groomingReviewId: number;
  groomerId: number;
  groomingKeywordList: string[];
  reviewerName: string;
  reviewerImageUrl: string;
  revieweeName: string;
  createdAt: string;
  starRating: number;
  content: string;
  imageUrlList: string[];
  reportType: string;
  reportContent: string;
}
