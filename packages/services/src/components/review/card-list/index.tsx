import ReviewCard from '../card';
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
}

export default function ReviewCardList({ reviews, flagged }: Props) {
  return (
    <div css={wrapper}>
      {reviews.map((review) => (
        <ReviewCard key={review.id} {...review} flagged={flagged} />
      ))}
    </div>
  );
}
