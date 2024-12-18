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
