import { useMemo } from 'react';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { AppBar, Empty, Layout, Text, theme } from '@daengle/design-system';
import { Card } from '~/components/reviews';
import { GROOMER_REVIEW_KEYWORDS } from '~/constants/review';
import { useIntersectionLoad } from '~/hooks';
import { getUserGroomerReviewListInfiniteQuery } from '~/queries';
import { ROUTES } from '~/constants/commons';

export default function GroomerReviews() {
  const router = useRouter();
  const { groomerId } = router.query;

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    getUserGroomerReviewListInfiniteQuery(Number(groomerId));

  const reviewCount = useMemo(() => data?.pages[0]?.reviewCount, [data]);

  const { loadMoreRef } = useIntersectionLoad({ fetchNextPage, hasNextPage, isFetchingNextPage });

  return (
    <Layout isAppBarExist={false}>
      <AppBar onBackClick={router.back} onHomeClick={() => router.push(ROUTES.HOME)} />

      <section css={wrapper}>
        <Text tag="h1" typo="title1" color="black">
          {`받은 리뷰 ${reviewCount ?? 0}개`}
        </Text>

        <div css={content}>
          {data?.pages.map((page) =>
            page.reviewCount > 0 ? (
              page.reviewList.map(
                ({
                  groomingReviewId,
                  reviewerName,
                  reviewerImageUrl,
                  groomingKeywordList,
                  starRating,
                  content,
                  imageUrlList,
                  createdAt,
                }) => (
                  <Card
                    key={groomingReviewId}
                    createdAt={createdAt}
                    reviewId={groomingReviewId}
                    reviewerImageUrl={reviewerImageUrl}
                    reviewerName={reviewerName}
                    keywordReviewList={groomingKeywordList
                      .map((keyword) => GROOMER_REVIEW_KEYWORDS[keyword])
                      .filter((keyword): keyword is string => !!keyword)}
                    starRating={starRating}
                    content={content}
                    imageUrlList={imageUrlList}
                  />
                )
              )
            ) : (
              <Empty title="아직 받은 리뷰가 없어요" />
            )
          )}
        </div>

        <div ref={loadMoreRef} css={bottom} />
      </section>
    </Layout>
  );
}

const wrapper = css`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: hidden;

  padding: calc(${theme.size.appBarHeight} + 18px) 0 0 0;

  background: ${theme.colors.background};

  h1 {
    margin: 0 18px;
  }
`;

const content = css`
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow-y: auto;

  width: 100%;
  height: 100%;
  margin: 34px 0 0;
  padding: 18px;
  border-top: 1px solid ${theme.colors.gray200};
`;

export const bottom = css`
  position: absolute;
  bottom: 0;

  width: 100%;
  height: 18px;
`;
