import { useState } from 'react';
import Image from 'next/image';
import { CapsuleButton, Rating, Text } from '@daengle/design-system';
import { ButtonTextButtonArrow, ReviewFold, ReviewUnfold } from '@daengle/design-system/icons';
import {
  buttonWrapper,
  clampText,
  groomerInfo,
  groomerText,
  imageWrapper,
  tag,
  tagWrapper,
  top,
  wrapper,
} from './index.styles';

interface Props {
  reviewId: number;
  revieweeId: number;
  keywordReviewList: string[];
  revieweeName: string;
  starRating: 1 | 2 | 3 | 4 | 5;
  content: string | null;
  imageUrlList: string[] | null;
  onRevieweeNameClick: () => void;
  onDelete: () => void;
  onEdit: () => void;
}

export function Card({
  keywordReviewList,
  revieweeName,
  starRating,
  content,
  imageUrlList,
  onRevieweeNameClick,
  onDelete,
  onEdit,
}: Props) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <div css={wrapper}>
      <div css={top}>
        <div css={groomerInfo}>
          <div css={groomerText} onClick={onRevieweeNameClick}>
            <Text typo="subtitle2" color="black">
              {revieweeName}
            </Text>
            <ButtonTextButtonArrow width="6px" />
          </div>

          <Rating rate={starRating} />
        </div>
        <div css={buttonWrapper}>
          <CapsuleButton onClick={onEdit}>수정하기</CapsuleButton>
          <CapsuleButton onClick={onDelete}>삭제하기</CapsuleButton>
        </div>
      </div>

      <div css={imageWrapper}>
        {imageUrlList?.map((url) => <Image src={url} alt="리뷰 이미지" width={101} height={101} />)}
      </div>

      <div css={tagWrapper}>
        <div css={tag}>
          {keywordReviewList?.map((tag) => (
            <Text typo="body2" color="blue200">
              {tag}
            </Text>
          ))}
        </div>
      </div>

      {content && (
        <>
          <Text tag="p" typo="body11" color="black" css={!isExpanded && clampText}>
            {content}
          </Text>

          <button onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? <ReviewFold width="6px" /> : <ReviewUnfold width="6px" />}
          </button>
        </>
      )}
    </div>
  );
}
