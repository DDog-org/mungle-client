import { ReviewCard } from '../card';
import { wrapper } from './index.styles';

interface Props {
  reviews: {
    id: number;
    reviewerName: string;
    profileImage: string;
    rating: number;
    images: string[];
    tag: string;
    content: string;
    reportType?: string;
    reportContent?: string;
  }[];
  flagged?: boolean;
  onReport: () => void;
}

export function ReviewCardList({ reviews, flagged, onReport }: Props) {
  return (
    <div css={wrapper}>
      {reviews.map((review) => (
        <ReviewCard key={review.id} {...review} flagged={flagged} onReport={onReport} />
      ))}
    </div>
  );
}
