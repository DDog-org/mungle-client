import { useState, useEffect } from 'react';
import { AppBar, Layout, Text, RoundButton } from '@daengle/design-system';
import { css } from '@emotion/react';
import { theme } from '@daengle/design-system';
import { KeywordCard, PartnersCard, RatingCard, ReviewInputCard } from '~/components/review';
import {
  useGetUserReviewGroomingQuery,
  usePatchUserGroomingReviewMutation,
} from '~/queries/review';
import { useRouter } from 'next/router';
import { useS3 } from '@daengle/services/hooks';
import { PatchUserGroomingReviewRequestBody } from '~/models/review';

const TAGS = [
  '#위생적이에요',
  '#상담을 잘해줘요',
  '#맞춤 케어를 잘해줘요',
  '#원하는 스타일로 잘해줘요',
];

export default function ReviewEditPage() {
  const [rating, setRating] = useState<number>(0);
  const [reviewText, setReviewText] = useState<string>('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [existingImageUrls, setExistingImageUrls] = useState<string[]>([]);

  const { uploadToS3 } = useS3({ targetFolderPath: 'user/review-images' });
  const router = useRouter();

  const { id } = router.query;
  const reviewId = Number(id);

  const { data, isLoading, error } = useGetUserReviewGroomingQuery({ reviewId });

  const mutation = usePatchUserGroomingReviewMutation();
  const reservationId = 3; //임시 예약 Id

  useEffect(() => {
    if (data) {
      setRating(data.starRating);
      setReviewText(data.content);
      setSelectedTags(data.groomingKeywordReviewList);
      setExistingImageUrls(data.imageUrlList);
    }
  }, [data]);

  const toggleExpand = () => setIsExpanded((prev) => !prev);

  const handleTagToggle = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleSubmit = async () => {
    if (!rating || !reviewText) {
      alert('별점과 리뷰 내용을 입력해주세요.');
      return;
    }

    let uploadedImageUrls: string[] = existingImageUrls;

    if (selectedImages.length > 0) {
      const newImageUrls = await uploadToS3(selectedImages);
      if (!newImageUrls) {
        alert('이미지 업로드에 실패했습니다.');
        return;
      }
      uploadedImageUrls = [...existingImageUrls, ...newImageUrls];
    }

    const body: PatchUserGroomingReviewRequestBody = {
      reservationId, // 수정할 리뷰 ID
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
    mutation.mutate(
      { reviewId, body }, // reviewId와 body를 함께 전달
      {
        onSuccess: () => {
          alert('리뷰가 성공적으로 수정되었습니다!');
          router.push('/reviews'); // 리뷰 목록 페이지로 이동
        },
        onError: () => {
          alert('리뷰 수정에 실패했습니다.');
        },
      }
    );
  };

  return (
    <Layout>
      <AppBar isDefaultBackground={false} />
      <div css={wrapper}>
        <div css={header}>
          <Text typo="title1">{data?.shopName || '알 수 없음'}</Text>
        </div>
        <div css={container}>
          {isLoading ? (
            <Text typo="body11">로딩 중...</Text>
          ) : error ? (
            <Text typo="body11">리뷰 데이터를 불러오는 데 실패했습니다.</Text>
          ) : (
            <>
              <PartnersCard
                designerName={data?.reservationName || '알 수 없음'}
                shopName={data?.shopName || '알 수 없음'}
                schedule={{
                  date: new Date().toLocaleDateString('ko-KR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  }),
                  time: new Date().toLocaleTimeString('ko-KR', {
                    hour: '2-digit',
                    minute: '2-digit',
                  }),
                }}
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
            </>
          )}
        </div>

        <div css={submitButton}>
          <RoundButton
            service="daengle"
            size="L"
            fullWidth
            onClick={handleSubmit}
            disabled={!rating || !reviewText || selectedTags.length === 0}
          >
            리뷰 수정하기
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
