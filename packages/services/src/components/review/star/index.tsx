import { FilledStar, EmptyStar } from '@daengle/design-system/icons';
import { wrapper } from './index.styles';

interface Props {
  rating: number;
}

export default function ReviewStars({ rating }: Props) {
  const totalStars = 5;

  return (
    <div css={wrapper}>
      {Array.from({ length: totalStars }, (_, index) =>
        index < rating ? (
          <FilledStar key={index} width={16} height={16} />
        ) : (
          <EmptyStar key={index} width={16} height={16} />
        )
      )}
    </div>
  );
}
