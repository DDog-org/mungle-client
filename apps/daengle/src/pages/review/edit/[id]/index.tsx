import { useState, useEffect } from 'react';
import { AppBar, Layout, Text, RoundButton } from '@daengle/design-system';
import { css } from '@emotion/react';
import { theme } from '@daengle/design-system';
import { KeywordCard, PartnersCard, RatingCard, ReviewInputCard } from '~/components/review';
import {
  useGetUserGroomingReviewQuery,
  usePatchUserGroomingReviewMutation,
} from '~/queries/review';
import { useRouter } from 'next/router';
import { useS3 } from '@daengle/services/hooks';
import { GetUserGroomingReviewParams, PatchUserGroomingReviewRequestBody } from '~/models/review';
import { QUERY_KEYS } from '~/queries/query-keys';
import { queryClient } from '@daengle/services/providers';
import { GROOMER_REVIEW_KEYWORDS, TAGS } from '~/constants/review';

export default function ReviewEditPage() {
  const [rating, setRating] = useState<number>(0);
  const [reviewText, setReviewText] = useState<string>('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [selectedImages, setSelectedImages] = useState<File[]>([]);

  const router = useRouter();
  const { id } = router.query;
  const reviewId = Number(id);

  const params: GetUserGroomingReviewParams = { reviewId: reviewId };

  const { data, isLoading, error } = useGetUserGroomingReviewQuery(params);

  const { mutate: patchReview } = usePatchUserGroomingReviewMutation();
  const { uploadToS3 } = useS3({ targetFolderPath: 'user/review-images' });

  const reservationId = 3; // 임시 예약 ID

  useEffect(() => {
    if (data) {
      const convertUrlsToFiles = async () => {
        const filePromises = data.imageUrlList.map(async (url) => {
          const response = await fetch(url);
          const blob = await response.blob();
          const filename = url.split('/').pop() || 'uploaded-image';
          return new File([blob], filename, { type: blob.type });
        });

        const files = await Promise.all(filePromises);
        setSelectedImages(files);
      };
      console.log('이거에요', selectedImages);

      convertUrlsToFiles();
      setRating(data.starRating);
      setReviewText(data.content);
      setSelectedTags(
        data.groomingKeywordReviewList.map((keyword) => GROOMER_REVIEW_KEYWORDS[keyword] || keyword)
      );
    }
  }, [data]);
  console.log('Raw keywords:', data?.groomingKeywordReviewList);
  console.log(
    'Mapped keywords:',
    data?.groomingKeywordReviewList.map((keyword) => GROOMER_REVIEW_KEYWORDS[keyword] || keyword)
  );

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

    let uploadedImageUrls: string[] = [];

    if (selectedImages.length > 0) {
      const newImageUrls = await uploadToS3(selectedImages);
      if (!newImageUrls) {
        alert('이미지 업로드에 실패했습니다.');
        return;
      }
      uploadedImageUrls = newImageUrls;
    }

    const body: PatchUserGroomingReviewRequestBody = {
      reservationId,
      starRating: rating,
      groomingKeywordReviewList: selectedTags.map(
        (tag) =>
          Object.entries(GROOMER_REVIEW_KEYWORDS).find(([, value]) => value === tag)?.[0] || ''
      ),
      content: reviewText,
      imageUrlList: uploadedImageUrls,
    };

    patchReview(
      { reviewId, body },
      {
        onSuccess: () => {
          queryClient.refetchQueries({ queryKey: QUERY_KEYS.GET_USER_GROOMING_REVIEW });

          alert('리뷰가 성공적으로 수정되었습니다!');
          router.push('/reviews');
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
                designerName={data?.revieweeName || '알 수 없음'}
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
