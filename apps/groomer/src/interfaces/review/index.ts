export interface PartnersReviewListType {
  reviewId: number;
  userId: number;
  keywordsList: string[];
  reviewerName: string;
  reviewerImageUrl: string;
  revieweeName: string;
  createdAt: string;
  starRating: 1 | 2 | 3 | 4 | 5;
  content: string;
  imageUrlList: string[];
  reportType?: string;
  reportContent?: string;
}

export interface GroomerReviewList {
  groomingReviewId: number;
  groomerId: number;
  groomingKeywordList: string[];
  reviewerName: string;
  reviewerImageUrl: string;
  revieweeName: string;
  createdAt: string;
  starRating: 1 | 2 | 3 | 4 | 5;
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
  starRating: 1 | 2 | 3 | 4 | 5;
  content: string;
  imageUrlList: string[];
  reportType: string;
  reportContent: string;
}
