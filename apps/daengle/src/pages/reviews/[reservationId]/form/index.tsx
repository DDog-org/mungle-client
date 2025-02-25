import { useState } from 'react';
import { AppBar, Layout, Text, RoundButton, useToast, useDialog } from '@daengle/design-system';
import { css } from '@emotion/react';
import { theme } from '@daengle/design-system';
import {
  useGetUserReservationReviewQuery,
  usePostCareReviewMutation,
  usePostGroomingReviewMutation,
} from '~/queries/review';
import { useRouter } from 'next/router';
import { useS3 } from '@daengle/services/hooks';
import {
  GetUserReservationReviewParams,
  PostUserCareReviewRequestBody,
  PostUserGroomingReviewRequestBody,
} from '~/models/review';
import { GROOMER_REVIEW_KEYWORDS, VET_REVIEW_KEYWORDS } from '~/constants/review';
import { ROUTES } from '~/constants/commons';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import { KeywordCard, PartnersCard, RatingCard, ReviewInputCard } from '~/components/reviews';

const getKeywordsByService = (service: string | undefined): string[] => {
  if (service === 'groomer') {
    return Object.values(GROOMER_REVIEW_KEYWORDS);
  } else if (service === 'vet') {
    return Object.values(VET_REVIEW_KEYWORDS);
  } else {
    return [];
  }
};

export default function ReviewPage() {
  const [rating, setRating] = useState<number>(0);
  const [reviewText, setReviewText] = useState<string>('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [selectedImages, setSelectedImages] = useState<File[]>([]);

  const { uploadToS3 } = useS3({ targetFolderPath: 'user/review-images' });
  const router = useRouter();

  const { service } = router.query;
  const reservationId = Number(router.query.reservationId);
  const keywords = getKeywordsByService(service as string);

  const params: GetUserReservationReviewParams = { reservationId: reservationId };
  const { data, isLoading, error } = useGetUserReservationReviewQuery(params);

  const partnersCardData = isLoading
    ? { partnerName: '로딩 중...', shopName: '로딩 중...', schedule: '로딩 중...' }
    : error
      ? { partnerName: '에러 발생', shopName: '에러 발생', schedule: '로딩 중...' }
      : {
          partnerName: data?.recipientName || '알 수 없음',
          shopName: data?.shopName || '',
          schedule: dayjs(data?.schedule).locale('ko').format('YYYY.MM.DD(ddd) • HH:mm'),
        };

  const { showToast } = useToast();
  const { open } = useDialog();

  const toggleExpand = () => setIsExpanded((prev) => !prev);

  const handleTagToggle = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const postGroomingReview = usePostGroomingReviewMutation();
  const postCareReview = usePostCareReviewMutation();

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
    const handleError = (error: any) => {
      const { code, message } = error;

      if (code === 4000) {
        open({
          type: 'confirm',
          title: '금칙어 작성',
          description: `"${message}" : 등록할 수 없는 단어입니다!`,
          primaryActionLabel: '다시 작성하기',
          onPrimaryAction: () => {
            router.back;
          },
        });
      } else {
        open({
          type: 'confirm',
          title: '오류',
          description: '잠시 후 다시 시도해 주세요',
          primaryActionLabel: '확인',
          onPrimaryAction: () => {
            router.push(ROUTES.MYPAGE_PAYMENTS);
          },
        });
      }
    };
    if (service === 'groomer') {
      const body: PostUserGroomingReviewRequestBody = {
        reservationId,
        starRating: rating,
        groomingKeywordList: selectedTags.map(
          (tag) =>
            Object.entries(GROOMER_REVIEW_KEYWORDS).find(([, value]) => value === tag)?.[0] || ''
        ),
        content: reviewText,
        imageUrlList: uploadedImageUrls,
      };

      postGroomingReview.mutate(body, {
        onSuccess: (response) => {
          showToast({ title: '리뷰가 성공적으로 등록되었습니다!' });
          router.push(ROUTES.GROOMERS_REVIEWS(response.revieweeId));
        },
        onError: handleError,
      });
    } else if (service === 'vet') {
      const body: PostUserCareReviewRequestBody = {
        reservationId,
        starRating: rating,
        careKeywordList: selectedTags.map(
          (tag) => Object.entries(VET_REVIEW_KEYWORDS).find(([, value]) => value === tag)?.[0] || ''
        ),
        content: reviewText,
        imageUrlList: uploadedImageUrls,
      };

      postCareReview.mutate(body, {
        onSuccess: (response) => {
          showToast({ title: '리뷰가 성공적으로 등록되었습니다!' });
          router.push(ROUTES.VETS_REVIEWS(response.revieweeId));
        },
        onError: handleError,
      });
    } else {
      alert('알 수 없는 서비스 타입입니다.');
    }
  };

  return (
    <Layout>
      <AppBar
        backgroundColor={theme.colors.background}
        onBackClick={router.back}
        onHomeClick={() => router.push(ROUTES.HOME)}
      />
      <div css={wrapper}>
        <div css={header}>
          <Text typo="title1">
            {service === 'vet' ? partnersCardData.partnerName : partnersCardData.shopName}
          </Text>
        </div>
        <div css={container}>
          <PartnersCard
            partnerName={partnersCardData.partnerName}
            shopName={partnersCardData.shopName}
            schedule={partnersCardData.schedule}
          />
          <RatingCard rating={rating} onRatingChange={setRating} />

          <KeywordCard
            tags={keywords}
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
