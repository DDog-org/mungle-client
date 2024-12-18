import { CapsuleButton, Text, TextButton } from '@daengle/design-system';
import {
  wrapper,
  userImage,
  userInfo,
  reviewerInfo,
  reviewImages,
  reportButton,
  tags,
  tagsContainer,
  contentContainer,
  contentStyle,
  contentUnrolled,
  unroll,
  report,
  tagsWrapper,
  tagWrapper,
} from './index.styles';
import { ReviewStars } from '../star';
import {
  ButtonTextButtonArrow,
  ReviewFold,
  ReviewUnfold,
  SelectUnfoldInactive,
} from '@daengle/design-system/icons';
import { useState } from 'react';
import { PartnersReviewListType } from '../../../interface';

interface Props<T extends PartnersReviewListType> {
  review: T;
  flagged?: boolean;
  reportType?: string;
  reportContent?: string;
  onReport: (event: React.MouseEvent<HTMLButtonElement>, reviewId: number, userId: number) => void;
}

export function ReviewCard<T extends PartnersReviewListType>({
  review,
  flagged = false,
  onReport,
}: Props<T>) {
  const {
    reviewerImageUrl,
    reviewerName,
    starRating,
    imageUrlList,
    keywordsList,
    content,
    reportType,
    reportContent,
  } = review;
  const [isUnrolled, setIsUnrolled] = useState(false);

  function handleCheckAllContent() {
    setIsUnrolled(!isUnrolled);
  }

  return (
    <div css={wrapper}>
      <div css={reviewerInfo}>
        <div css={userInfo}>
          <img src={reviewerImageUrl} alt={`${reviewerName} 프로필`} css={userImage} />
          <Text typo="subtitle2">{reviewerName}</Text>
          <ReviewStars rating={starRating} />
        </div>
        {!flagged && (
          <CapsuleButton onClick={(event) => onReport(event, review.reviewId, review.userId)}>
            신고하기
          </CapsuleButton>
        )}
      </div>
      <div css={reviewImages}>
        {imageUrlList.map((image, index) => (
          <img key={index} src={image} alt={`리뷰 이미지 ${index + 1}`} />
        ))}
      </div>
      <div css={tagsWrapper}>
        {keywordsList.length > 0 &&
          keywordsList.map((tag) => (
            <div css={tagWrapper}>
              <Text typo="body12" color="blue200">
                {`#${tag}`}
              </Text>
            </div>
          ))}
      </div>
      <div css={contentContainer}>
        <Text
          typo="body11"
          css={[contentStyle(flagged, isUnrolled), isUnrolled && contentUnrolled]}
        >
          {content}
        </Text>
        {!isUnrolled && flagged && (
          <ButtonTextButtonArrow width={6} onClick={handleCheckAllContent} />
        )}
      </div>
      {flagged && (
        <>
          <Text typo="subtitle1" css={report}>
            신고 유형
          </Text>
          <Text typo="body11" color="gray500">
            {reportType}
          </Text>
          <Text typo="subtitle1" css={report}>
            신고 내용
          </Text>
          <Text typo="body11" color="gray500">
            {reportContent}
          </Text>
        </>
      )}
      {!flagged && (
        <button css={unroll} onClick={() => setIsUnrolled(!isUnrolled)}>
          {isUnrolled ? (
            <ReviewFold width={12} height={6} />
          ) : (
            <ReviewUnfold width={12} height={6} />
          )}
        </button>
      )}
    </div>
  );
}
