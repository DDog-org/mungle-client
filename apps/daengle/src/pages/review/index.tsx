import { useState } from 'react';
import { AppBar, Layout, Text, RoundButton } from '@daengle/design-system';
import {
  wrapper,
  section,
  header,
  card,
  fieldGroup,
  starRatingContainer,
  tagButton,
  tagButtonActive,
  reviewInput,
  submitButton,
  container,
} from './index.styles';

export default function ReviewPage() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [rating, setRating] = useState<number>(0);
  const [reviewText, setReviewText] = useState<string>('');

  const tags = ['#위생적이에요', '#상담을 잘해줘요', '#맞춤 케어를 잘해줘요'];

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
  };

  const handleSubmit = () => {
    if (!rating || !reviewText) {
      alert('별점과 리뷰 내용을 입력해주세요.');
      return;
    }
    // TODO: API 연동 로직 추가
    alert('리뷰가 등록되었습니다!');
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
            <Text typo="body4">일정: 2024.11.17(일) 14:00</Text>
          </div>

          <div css={card}>
            <Text typo="body1">서비스에 만족하셨나요?</Text>
            <div css={starRatingContainer}>
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => handleRatingChange(star)}
                  aria-label={`별점 ${star}점`}
                >
                  {star <= rating ? '★' : '☆'}
                </button>
              ))}
            </div>
          </div>

          <div css={card}>
            <Text typo="body1">어떤 점이 좋았나요?</Text>
            <Text typo="body4" color="gray400">
              이 곳에 어울리는 키워드를 골라주세요
            </Text>
            <div css={fieldGroup}>
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  css={selectedTags.includes(tag) ? tagButtonActive : tagButton}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <div css={card}>
            <Text typo="body1">리뷰 작성</Text>
            <div css={reviewInput}>
              {/* <Input
              placeholder="리뷰를 작성해주세요"
              maxLength={400}
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
            /> */}
            </div>
          </div>
        </div>

        <div css={submitButton}>
          <RoundButton
            variant="primary"
            size="L"
            fullWidth
            onClick={handleSubmit}
            disabled={!rating || !reviewText}
          >
            리뷰 등록하기
          </RoundButton>
        </div>
      </div>
    </Layout>
  );
}
