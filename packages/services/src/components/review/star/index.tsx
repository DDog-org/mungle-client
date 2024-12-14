import { ReviewStarFilled, ReviewStarUnfilled } from '@daengle/design-system/icons';
import { wrapper } from './index.styles';

interface Props {
  rating: number;
}

const totalStars = 5;

export function ReviewStars({ rating }: Props) {
  return (
    <div css={wrapper}>
      {Array.from({ length: totalStars }, (_, index) =>
        index < rating ? (
          <ReviewStarFilled key={`filled ${index}`} width={14} height={13} />
        ) : (
          <ReviewStarUnfilled key={`empty ${index}`} width={14} height={13} />
        )
      )}
    </div>
  );
}
