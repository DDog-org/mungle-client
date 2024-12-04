import { Text, TextButton } from '@daengle/design-system';
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
import { ButtonDownArrow, ButtonTextButtonArrow } from '@daengle/design-system/icons';
import { useState } from 'react';

interface Props {
  reviewerName: string;
  profileImage: string;
  rating: number;
  images: string[];
  tag: string;
  content: string;
  flagged?: boolean;
  reportType?: string;
  reportContent?: string;
}

export function ReviewCard({
  reviewerName,
  profileImage,
  rating,
  images,
  tag,
  content,
  flagged = false,
  reportType,
  reportContent,
}: Props) {
  const [isUnrolled, setIsUnrolled] = useState(false);

  const handleUnrollClick = () => {
    setIsUnrolled((prev) => !prev);
  };
  return (
    <div css={wrapper}>
      <div css={reviewerInfo}>
        <div css={userInfo}>
          <img src={profileImage} alt={`${reviewerName} 프로필`} css={userImage} />
          <Text typo="subtitle2">{reviewerName}</Text>
          <ReviewStars rating={rating} />
        </div>
        {!flagged && <TextButton css={reportButton}>신고하기</TextButton>}
      </div>
      <div css={reviewImages}>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`리뷰 이미지 ${index + 1}`} />
        ))}
      </div>
      <div css={tagsContainer}>
        <Text typo="body2" color="green200" css={tags}>
          {tag}
        </Text>
      </div>
      <div css={contentContainer}>
        <Text typo="body11" css={[contentStyle(flagged), isUnrolled && contentUnrolled]}>
          {content}
        </Text>
        {flagged && <ButtonTextButtonArrow width={'6px'} />}
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
        <div css={unroll} onClick={handleUnrollClick}>
          <ButtonDownArrow />
        </div>
      )}
    </div>
  );
}
