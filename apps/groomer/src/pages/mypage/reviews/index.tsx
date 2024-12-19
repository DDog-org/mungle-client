import { Layout, AppBar, Text, theme, Tabs } from '@daengle/design-system';
import { ReviewCardList, ReviewSummary } from '@daengle/services/components';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { GROOMER_REVIEW_KEYWORDS, REPORT_KEYWORDS } from '~/constants';
import { ROUTES } from '~/constants/commons';
import { useIntersectionLoad } from '~/hooks/review';
import {
  GroomerReviewList,
  GroomerReviewReportList,
  PartnersReviewListType,
} from '~/interfaces/review';
import { useGetGroomerReviewListQuery, useGetGroomerReviewReportListQuery } from '~/queries/review';

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

function transformGroomingReviewList(data: GroomerReviewList): PartnersReviewListType {
  return {
    reviewId: data.groomingReviewId,
    userId: data.groomerId,
    reviewerName: data.reviewerName,
    reviewerImageUrl: data.reviewerImageUrl,
    revieweeName: data.revieweeName,
    createdAt: data.createdAt,
    starRating: data.starRating,
    content: data.content,
    imageUrlList: data.imageUrlList,
    keywordsList: data.groomingKeywordList
      .map((keyword) => GROOMER_REVIEW_KEYWORDS[keyword])
      .filter((keyword): keyword is string => !!keyword),
  };
}
function transformGroomingReviewReportList(data: GroomerReviewReportList): PartnersReviewListType {
  return {
    reviewId: data.groomingReviewId,
    userId: data.groomerId,
    reviewerName: data.reviewerName,
    reviewerImageUrl: data.reviewerImageUrl,
    revieweeName: data.revieweeName,
    createdAt: data.createdAt,
    starRating: data.starRating,
    content: data.content,
    imageUrlList: data.imageUrlList,
    reportType: REPORT_KEYWORDS[data.reportType] || data.reportType,
    reportContent: data.reportContent,
    keywordsList: data.groomingKeywordList
      .map((keyword) => GROOMER_REVIEW_KEYWORDS[keyword])
      .filter((keyword): keyword is string => !!keyword),
  };
}

export default function ReviewsPage() {
  const router = useRouter();

  const {
    data: receivedData,
    fetchNextPage: fetchNextReceivedPage,
    hasNextPage: hasNextReceivedPage,
    isFetchingNextPage: isFetchingNextReceivedPage,
  } = useGetGroomerReviewListQuery();

  const receivedReviews: PartnersReviewListType[] =
    receivedData?.pages.flatMap((page) => page.reviewList.map(transformGroomingReviewList)) || [];
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
  } = useGetGroomerReviewReportListQuery();

  const flaggedReviews: PartnersReviewListType[] =
    flaggedData?.pages.flatMap((page) => page.reviewList.map(transformGroomingReviewReportList)) ||
    [];
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
              onReport={(reviewId, userId) =>
                router.push({
                  pathname: ROUTES.MYPAGE_REVIEWS_REPORT(reviewId),
                  query: { groomerId: userId },
                })
              }
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
              onReport={(reviewId) => router.push(ROUTES.MYPAGE_REVIEWS_REPORT(reviewId))}
              flagged={true}
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
              onReport={(reviewId) => router.push(ROUTES.MYPAGE_REVIEWS_REPORT(reviewId))}
            />
            <div ref={loadMoreReceivedRef} css={bottom} />
          </div>
        );
    }
  };

  return (
    <Layout>
      <AppBar
        backgroundColor={theme.colors.background}
        onBackClick={() => {
          router.push(ROUTES.MYPAGE);
        }}
        onHomeClick={() => router.push(ROUTES.HOME)}
      />
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
