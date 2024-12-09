import { Text } from '@daengle/design-system';
import { InputImageSection } from '@daengle/design-system/icons';
import {
  wrapper,
  reviewImage,
  reviewInput,
  textarea,
  textCount,
  textContainer,
} from './index.styles';

export function ReviewInputCard({
  reviewText,
  setReviewText,
}: {
  reviewText: string;
  setReviewText: (text: string) => void;
}) {
  return (
    <div css={wrapper}>
      <Text typo="subtitle1">리뷰 작성</Text>
      <div css={reviewImage}>
        <InputImageSection width={70} height={70} />
      </div>
      <div css={reviewInput}>
        <textarea
          css={textarea}
          placeholder="리뷰를 작성해주세요"
          maxLength={400}
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
        />
        <div css={textContainer}>
          <span css={textCount(reviewText.length > 0)}>{reviewText.length}&nbsp;</span>
          <span css={textCount(false)}> / 400 </span>
        </div>
      </div>
    </div>
  );
}
