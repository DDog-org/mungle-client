import { FilledStar, EmptyStar } from '@daengle/design-system/icons';
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
          <FilledStar key={`filled ${index}`} width={14} height={13} />
        ) : (
          <EmptyStar key={`empty ${index}`} width={14} height={13} />
        )
      )}
    </div>
  );
}
