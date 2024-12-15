import { Empty } from '@daengle/design-system';
import { ReviewCard } from '../card';
import { wrapper, empty } from './index.styles';

interface Props {
  reviews: {
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
  }[];
  flagged?: boolean;
  onReport: () => void;
}

export function ReviewCardList({ reviews, flagged, onReport }: Props) {
  if (reviews.length === 0) {
    return (
      <div css={empty}>
        <Empty title="받은 리뷰가 없습니다" />
      </div>
    );
  }
  return (
    <div css={wrapper}>
      {reviews.map((review) => (
        <ReviewCard
          key={review.groomingReviewId}
          {...review}
          flagged={flagged}
          onReport={onReport}
        />
      ))}
    </div>
  );
}
