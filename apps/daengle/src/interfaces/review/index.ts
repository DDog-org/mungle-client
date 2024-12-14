export type GroomingKeywordType =
  | 'EXCELLENT_CONSULTATION'
  | 'HYGIENIC'
  | 'STYLE_IS_GREAT'
  | 'CUSTOMIZED_CARE';

export interface UserReviewFormType {
  reservationId: number;
  starRating: number;
  groomingKeywordReviewList: GroomingKeywordType[];
  content: string;
  imageUrlList: string[];
}
