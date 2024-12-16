import { CapsuleButton, Rating, Text, TextButton } from '@daengle/design-system';
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
} from './index.styles';
import { ReviewStars } from '../star';
import {
  ButtonTextButtonArrow,
  ReviewFold,
  ReviewUnfold,
  SelectUnfoldInactive,
} from '@daengle/design-system/icons';
import { useState } from 'react';

interface Props {
  reviewId: number;
  userId: number;
  keywordList: string[];
  reviewerName: string;
  reviewerImageUrl: string;
  revieweeName: string;
  createdAt: string;
  starRating: number;
  content: string;
  imageUrlList: string[];

  flagged?: boolean;
  reportType?: string;
  reportContent?: string;
  onReport: () => void;
}

export function ReviewCard({
  reviewerImageUrl,
  reviewerName,
  starRating,
  imageUrlList,
  keywordList,
  content,
  flagged = false,
  reportType,
  reportContent,
  onReport,
}: Props) {
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
          <Rating rate={Math.floor(starRating) as 1 | 2 | 3 | 4 | 5} size="S" />
        </div>
        {!flagged && <CapsuleButton onClick={onReport}>신고하기</CapsuleButton>}
      </div>
      <div css={reviewImages}>
        {imageUrlList.map((image, index) => (
          <img key={index} src={image} alt={`리뷰 이미지 ${index + 1}`} />
        ))}
      </div>
      <div css={tagsContainer}>
        <Text typo="body2" color="green200" css={tags}>
          {keywordList.map((keyword, index) => (
            <span key={index}>#{keyword}</span>
          ))}
        </Text>
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
