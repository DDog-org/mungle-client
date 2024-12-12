import { useState } from 'react';
import { AppBar, Layout, Text, RoundButton } from '@daengle/design-system';
import { css } from '@emotion/react';
import { theme } from '@daengle/design-system';
import { KeywordCard, PartnersCard, RatingCard, ReviewInputCard } from '~/components/review';
import { useGetUserReservationReviewQuery, usePostGroomingReviewMutation } from '~/queries/review';
import { useRouter } from 'next/router';
import { useS3 } from '@daengle/services/hooks';
import { GetUserReservationReviewParams } from '~/models/review';
import { GROOMER_REVIEW_KEYWORDS, KEYWORDS } from '~/constants/review';

export default function ReviewPage() {
  const [rating, setRating] = useState<number>(0);
  const [reviewText, setReviewText] = useState<string>('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [selectedImages, setSelectedImages] = useState<File[]>([]);

  const { uploadToS3 } = useS3({ targetFolderPath: 'user/review-images' });
  const router = useRouter();

  const { id } = router.query;
  const reservationId = Number(id) || 1;

  const params: GetUserReservationReviewParams = { reservationId: reservationId };
  const { data, isLoading, error } = useGetUserReservationReviewQuery(params);

  const partnersCardData = isLoading
    ? { designerName: '로딩 중...', shopName: '로딩 중...', schedule: { date: '', time: '' } }
    : error
      ? { designerName: '에러 발생', shopName: '에러 발생', schedule: { date: '', time: '' } }
      : {
          designerName: data?.recipientName || '알 수 없음',
          shopName: data?.shopName || '알 수 없음',
          schedule: {
            date: new Date(data?.schedule || '').toLocaleDateString('ko-KR', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            }),
            time: new Date(data?.schedule || '').toLocaleTimeString('ko-KR', {
              hour: '2-digit',
              minute: '2-digit',
            }),
          },
        };

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
      reservationId: 1, // TODO: 예약 ID를 동적으로 설정
      starRating: rating,
      groomingKeywordList: selectedTags.map(
        (tag) =>
          Object.entries(GROOMER_REVIEW_KEYWORDS).find(([, value]) => value === tag)?.[0] || ''
      ),
      content: reviewText,
      imageUrlList: uploadedImageUrls,
    };

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
          <Text typo="title1">{partnersCardData.shopName}</Text>
        </div>
        <div css={container}>
          <PartnersCard
            designerName={partnersCardData.designerName}
            shopName={partnersCardData.shopName}
            schedule={partnersCardData.schedule}
          />
          <RatingCard rating={rating} onRatingChange={setRating} />

          <KeywordCard
            tags={KEYWORDS}
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
