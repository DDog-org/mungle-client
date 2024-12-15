import { ReviewStarFilled, ReviewStarUnfilled } from '@daengle/design-system/icons';
import { wrapper } from './index.styles';

interface Props {
  rating: number;
  onRatingChange?: (newRating: number) => void;
}

const totalStars = 5;

// TODO: 리뷰 리스트 별로 쓸 수 있게 디자인 시스템에 넣기!!
export function ReviewStars({ rating, onRatingChange }: Props) {
  const handleStarClick = (index: number) => {
    if (onRatingChange) onRatingChange(index + 1);
  };

  return (
    <div css={wrapper}>
      {Array.from({ length: totalStars }, (_, index) => {
        const isFilled = index < rating;
        return (
          <div key={index} onClick={() => handleStarClick(index)}>
            {isFilled ? (
              <ReviewStarFilled width={25} height={26} />
            ) : (
              <ReviewStarUnfilled width={25} height={26} />
            )}
          </div>
        );
      })}
    </div>
  );
}
