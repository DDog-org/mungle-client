import { useState } from 'react';
import { AppBar, Layout, Text, RoundButton } from '@daengle/design-system';
import { css } from '@emotion/react';
import { theme } from '@daengle/design-system';
import { KeywordCard, PartnersCard, RatingCard, ReviewInputCard } from '~/components/review';
import { usePostGroomingReviewMutation } from '~/queries/review';
import { useRouter } from 'next/router';
import { useS3 } from '@daengle/services/hooks';

const TAGS = [
  '#위생적이에요',
  '#상담을 잘해줘요',
  '#맞춤 케어를 잘해줘요',
  '#원하는 스타일로 잘해줘요',
];

export default function ReviewPage() {
  const [rating, setRating] = useState<number>(0);
  const [reviewText, setReviewText] = useState<string>('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [selectedImages, setSelectedImages] = useState<File[]>([]);

  const { uploadToS3 } = useS3({ targetFolderPath: 'user/review-images' });
  const router = useRouter();

  const toggleExpand = () => setIsExpanded((prev) => !prev);

  const handleTagToggle = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const mutation = usePostGroomingReviewMutation();

  const handleSubmit = async () => {
    if (!rating || !reviewText) {
      alert('별점과 리뷰 내용을 입력해주세요.');
      return;
    }

    let uploadedImageUrls: string[] = [];

    if (selectedImages.length > 0) {
      uploadedImageUrls = (await uploadToS3(selectedImages)) || [];

      if (!uploadedImageUrls) {
        alert('이미지 업로드에 실패했습니다.');
        return;
      }
    }

    const body = {
      reservationId: 3, // TODO: 예약 ID를 동적으로 설정
      starRating: rating,
      groomingKeywordReviewList: selectedTags.map((tag) => {
        switch (tag) {
          case '#위생적이에요':
            return 'HYGIENIC';
          case '#상담을 잘해줘요':
            return 'EXCELLENT_CONSULTATION';
          case '#맞춤 케어를 잘해줘요':
            return 'CUSTOMIZED_CARE';
          case '#원하는 스타일로 잘해줘요':
            return 'STYLE_IS_GREAT';
          default:
            return '';
        }
      }),
      content: reviewText,
      imageUrlList: uploadedImageUrls,
    };
    console.log('body', body);
    mutation.mutate(body, {
      onSuccess: () => {
        alert('리뷰가 성공적으로 등록되었습니다!');
        router.push('/reviews');
      },
      onError: () => {
        alert('리뷰 등록에 실패했습니다.');
      },
    });
  };

  return (
    <Layout>
      <AppBar />
      <div css={wrapper}>
        <div css={header}>
          <Text typo="title1">꼬꼬마 관리샵</Text>
        </div>
        <div css={container}>
          <PartnersCard
            designerName="문소연 디자이너"
            shopName="꼬꼬마 관리샵"
            schedule={{ date: '2024.11.17(일)', time: '14:00' }}
          />

          <RatingCard rating={rating} onRatingChange={setRating} />

          <KeywordCard
            tags={TAGS}
            selectedTags={selectedTags}
            onTagToggle={handleTagToggle}
            isExpanded={isExpanded}
            toggleExpand={toggleExpand}
          />

          <ReviewInputCard
            reviewText={reviewText}
            setReviewText={setReviewText}
            selectedImages={selectedImages}
            setSelectedImages={setSelectedImages}
          />
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

const wrapper = css`
  display: flex;
  flex-direction: column;

  background-color: ${theme.colors.background};
`;

const header = css`
  margin-bottom: 6px;
  padding: 18px;
`;

const container = css`
  display: flex;
  flex-direction: column;
  gap: 12px;

  padding: 0 18px;
`;

const submitButton = css`
  margin-top: 14px;
  padding: 18px;
`;
