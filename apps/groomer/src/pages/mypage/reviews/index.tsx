import { Layout, AppBar, Text, theme, Tabs } from '@daengle/design-system';
import { ReviewCardList, ReviewSummary } from '@daengle/services/components';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { ROUTES } from '~/constants/commons';
import { useIntersectionLoad } from '~/hooks/review';
import { getGroomerReviewListQuery, getGroomerReviewReportListQuery } from '~/queries/review';

const TABS = [
  {
    id: 'list',
    label: '받은 리뷰',
  },
  {
    id: 'report',
    label: '신고한 리뷰',
  },
];

export default function ReviewsPage() {
  const router = useRouter();

  const {
    data: receivedData,
    fetchNextPage: fetchNextReceivedPage,
    hasNextPage: hasNextReceivedPage,
    isFetchingNextPage: isFetchingNextReceivedPage,
  } = getGroomerReviewListQuery();

  const receivedReviews = receivedData?.pages.flatMap((page) => page.reviewList) || [];
  const receivedReviewCount = receivedData?.pages[0]?.reviewCount || 0;

  const { loadMoreRef: loadMoreReceivedRef } = useIntersectionLoad({
    fetchNextPage: fetchNextReceivedPage,
    hasNextPage: hasNextReceivedPage,
    isFetchingNextPage: isFetchingNextReceivedPage,
  });

  const {
    data: flaggedData,
    fetchNextPage: fetchNextFlaggedPage,
    hasNextPage: hasNextFlaggedPage,
    isFetchingNextPage: isFetchingNextFlaggedPage,
  } = getGroomerReviewReportListQuery();

  const flaggedReviews = flaggedData?.pages.flatMap((page) => page.reviewList) || [];
  const flaggedReviewCount = flaggedData?.pages[0]?.reviewCount || 0;

  const { loadMoreRef: loadMoreFlaggedRef } = useIntersectionLoad({
    fetchNextPage: fetchNextFlaggedPage,
    hasNextPage: hasNextFlaggedPage,
    isFetchingNextPage: isFetchingNextFlaggedPage,
  });

  const renderContent = (activeTabId: string) => {
    switch (activeTabId) {
      case 'list':
        return (
          <div>
            <ReviewSummary total={receivedReviewCount} />
            <ReviewCardList
              reviews={receivedReviews}
              onReport={() => router.push(ROUTES.MYPAGE_REVIEWS_REPORT)}
            />
            <div ref={loadMoreReceivedRef} css={bottom} />
          </div>
        );
      case 'report':
        return (
          <div>
            <ReviewSummary total={flaggedReviewCount} />
            <ReviewCardList
              reviews={flaggedReviews}
              flagged={true}
              onReport={() => router.push(ROUTES.MYPAGE_REVIEWS_REPORT)}
            />
            <div ref={loadMoreFlaggedRef} css={bottom} />
          </div>
        );
      default:
        return (
          <div>
            <ReviewSummary total={receivedReviewCount} />
            <ReviewCardList
              reviews={receivedReviews}
              onReport={() => router.push(ROUTES.MYPAGE_REVIEWS_REPORT)}
            />
            <div ref={loadMoreReceivedRef} css={bottom} />
          </div>
        );
    }
  };

  return (
    <Layout>
      <AppBar backgroundColor={theme.colors.background} />
      <div css={wrapper}>
        <Text tag="h1" typo="title1" color="black">
          리뷰 관리
        </Text>
        <div css={content}>
          <Tabs tabs={TABS} renderContent={renderContent} />
        </div>
      </div>
    </Layout>
  );
}

const wrapper = css`
  display: flex;
  flex-direction: column;
  flex: 1;

  padding: calc(${theme.size.appBarHeight} - 18px) 0 0 0;

  background-color: ${theme.colors.background};

  h1 {
    margin: 0 18px;
  }
`;

const content = css`
  width: 100%;
  height: 100%;
  margin: 34px 0 0;
`;

const bottom = css`
  position: absolute;
  bottom: 0;

  width: 100%;
  height: 18px;
`;
