import { useState } from 'react';
import { AppBar, Layout, Text, RoundButton, ChipToggleButton } from '@daengle/design-system';
import { ReviewStars } from '@daengle/services/components';
import {
  wrapper,
  section,
  header,
  stars,
  card,
  schedule,
  date,
  keyword,
  unroll,
  reviewImage,
  reviewInput,
  textarea,
  textCount,
  submitButton,
  container,
} from './index.styles';
import {
  InputImageSection,
  SelectUnfoldActive,
  SelectUnfoldInactive,
} from '@daengle/design-system/icons';

const TAGS = [
  '#위생적이에요',
  '#상담을 잘해줘요',
  '#맞춤 케어를 잘해줘요',
  '#노견을 잘 다뤄요',
  '#섬세한 손길을 가졌어요',
  '#원하는 스타일로 잘해줘요',
];

export default function ReviewPage() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [rating, setRating] = useState<number>(0);
  const [reviewText, setReviewText] = useState<string>('');
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleSubmit = () => {
    if (!rating || !reviewText) {
      alert('별점과 리뷰 내용을 입력해주세요.');
      return;
    }
    // TODO: API 연동 로직 추가
    alert('리뷰가 등록되었습니다!');
  };
  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <Layout>
      <AppBar isDefaultBackground={false} />
      <div css={wrapper}>
        <div css={header}>
          <Text typo="title1">꼬꼬마 관리샵</Text>
        </div>
        <div css={container}>
          <div css={card}>
            <Text typo="subtitle1">문소연 디자이너</Text>
            <Text typo="body9" color="gray400">
              꼬꼬마 관리샵
            </Text>
            <div css={schedule}>
              <Text typo="body4" color="gray400">
                일정
              </Text>
              <div css={date}>
                <Text typo="body4">2024.11.17(일)</Text>
                <Text typo="body4">14:00</Text>
              </div>
            </div>
          </div>

          <div css={card}>
            <Text typo="subtitle1">서비스에 만족하셨나요?</Text>
            <Text typo="body11" color="gray500">
              별점을 채워주세요
            </Text>
            <div css={stars}>
              <ReviewStars rating={rating} onRatingChange={setRating} />
            </div>
          </div>

          <div css={card}>
            <Text typo="subtitle1">어떤 점이 좋았나요?</Text>
            <Text typo="body11" color="gray500">
              이 곳에 어울리는 키워드를 골라주세요
            </Text>
            <div css={keyword}>
              {TAGS.map((tag, index) => {
                if (!isExpanded && index >= 3) return null;
                return (
                  <ChipToggleButton
                    key={tag}
                    size="full"
                    isSelected={selectedTags.includes(tag)}
                    onClick={() => toggleTag(tag)}
                    textColor="gray500"
                  >
                    {tag}
                  </ChipToggleButton>
                );
              })}
              <div css={unroll} onClick={toggleExpand}>
                {isExpanded ? (
                  <SelectUnfoldActive width={12} height={6} />
                ) : (
                  <SelectUnfoldInactive width={12} height={6} />
                )}
              </div>
            </div>
          </div>

          <div css={card}>
            <Text typo="subtitle1">리뷰 작성</Text>
            <div css={reviewImage}>
              <InputImageSection width={70} height={70} />
            </div>
            <div css={reviewInput}>
              <textarea
                css={textarea}
                placeholder="리뷰를 작성해주세요"
                maxLength={400}
                onChange={(e) => setReviewText(e.target.value)}
              />
              <div css={textCount}>{reviewText.length} / 400</div>
            </div>
          </div>
        </div>

        <div css={submitButton}>
          <RoundButton
            service="daengle"
            size="L"
            fullWidth
            onClick={handleSubmit}
            disabled={!rating || !reviewText || selectedTags.length === 0}
          >
            리뷰 등록하기
          </RoundButton>
        </div>
      </div>
    </Layout>
  );
}
