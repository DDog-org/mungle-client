export interface PartnersReviewListType {
  reviewId: number;
  userId: number;
  keywordsList: string[];
  reviewerName: string;
  reviewerImageUrl: string;
  revieweeName: string;
  createdAt: string;
  starRating: number;
  content: string;
  imageUrlList: string[];
  reportType?: string;
  reportContent?: string;
}

export interface CareReviewList {
  careReviewId: number;
  vetId: number;
  carekeywordList: string[];
  reviewerName: string;
  reviewerImageUrl: string;
  revieweeName: string;
  createdAt: string;
  starRating: number;
  content: string;
  imageUrlList: string[];
}

export interface CareReviewReportList {
  careReviewId: number;
  vetId: number;
  careKeywordList: string[];
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
