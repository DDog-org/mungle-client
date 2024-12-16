import { Layout, AppBar, Text, theme, Tabs } from '@daengle/design-system';
import { ReviewCardList, ReviewSummary } from '@daengle/services/components';

import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { ROUTES } from '~/constants/commons';

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

const reviews = [
  {
    reviewId: 12,
    userId: 1,
    keywordList: ['EXCELLENT_CONSULTATION', 'HYGIENIC', 'STYLE_IS_GREAT'],
    reviewerName: '테스트닉네임',
    reviewerImageUrl: '',
    revieweeName: '김미용사',
    createdAt: '2024-12-13T14:00:00',
    starRating: 5.0,
    content: '미용사분이 정말 친절하셨고, 스타일도 마음에 들어요 쉐!',
    imageUrlList: ['https://example.com/image1.jpg', 'https://example.com/image2.jpg'],
  },
  {
    reviewId: 13,
    userId: 2,
    keywordList: ['HYGIENIC', 'STYLE_IS_GREAT'],
    reviewerName: '테스트닉네임',
    reviewerImageUrl: '',
    revieweeName: '김미용사',
    createdAt: '2024-12-13T14:00:00',
    starRating: 5.0,
    content: '미용사분이 정말 친절하셨고, 스타일도 마음에 들어요 쉐!',
    imageUrlList: ['https://example.com/image1.jpg', 'https://example.com/image2.jpg'],
  },
  {
    reviewId: 14,
    userId: 3,
    keywordList: ['EXCELLENT_CONSULTATION', 'HYGIENIC'],
    reviewerName: '테스트닉네임',
    reviewerImageUrl: '',
    revieweeName: '김미용사',
    createdAt: '2024-12-13T14:00:00',
    starRating: 5.0,
    content: '미용사분이 정말 친절하셨고, 스타일도 마음에 들어요 쉐!',
    imageUrlList: ['https://example.com/image1.jpg', 'https://example.com/image2.jpg'],
  },
  {
    reviewId: 15,
    userId: 4,
    keywordList: ['EXCELLENT_CONSULTATION', 'STYLE_IS_GREAT'],
    reviewerName: '테스트닉네임',
    reviewerImageUrl: '',
    revieweeName: '김미용사',
    createdAt: '2024-12-13T14:00:00',
    starRating: 5.0,
    content: '미용사분이 정말 친절하셨고, 스타일도 마음에 들어요 쉐!',
    imageUrlList: ['https://example.com/image1.jpg', 'https://example.com/image2.jpg'],
  },
];

const flaggedReviews = [
  {
    reviewId: 1,
    userId: 1,
    keywordList: ['EXCELLENT_CONSULTATION', 'HYGIENIC', 'PROFESSIONAL'],
    reviewerName: '테스트닉네임',
    reviewerImageUrl: '',
    revieweeName: '김미용사',
    createdAt: '2024-12-14T21:25:56.973646',
    starRating: 5.0,
    content: '수의사분이 너무 전문적이세요 시123d',
    imageUrlList: ['https://example.com/image1.jpg', 'https://example.com/image2.jpg'],
    reportType: 'BAD_WORD',
    reportContent: '기분 나쁘잖아요',
  },
  {
    reviewId: 1,
    userId: 1,
    keywordList: ['EXCELLENT_CONSULTATION', 'HYGIENIC', 'PROFESSIONAL'],
    reviewerName: '테스트닉네임',
    reviewerImageUrl: '',
    revieweeName: '김미용사',
    createdAt: '2024-12-14T21:25:56.973646',
    starRating: 5.0,
    content: '수의사분이 너무 전문적이세요 시123d',
    imageUrlList: ['https://example.com/image1.jpg', 'https://example.com/image2.jpg'],
    reportType: 'BAD_WORD',
    reportContent: '기분 나쁘잖아요',
  },
];

export default function ReviewsPage() {
  const router = useRouter();
  const { tab = 'list' } = router.query;

  const handleTabChange = (activeTabId: string) => {
    router.push({ pathname: '/mypage/reviews', query: { tab: activeTabId } }, undefined, {
      shallow: true,
    });
  };
  console.log(reviews[0]);
  const renderContent = (activeTabId: string) => {
    switch (activeTabId) {
      case 'list':
        return (
          <div>
            <ReviewSummary total={reviews.length} />
            <ReviewCardList
              reviews={[...reviews]}
              flagged={false}
              onReport={() => router.push(ROUTES.MYPAGE)}
            />
          </div>
        );
      case 'report':
        return (
          <div>
            <ReviewSummary total={flaggedReviews.length} />
            <ReviewCardList
              reviews={[...flaggedReviews]}
              flagged={true}
              onReport={() => router.push(ROUTES.MYPAGE)}
            />
          </div>
        );
      default:
        return (
          <div>
            <ReviewSummary total={reviews.length} />
            <ReviewCardList
              reviews={[...reviews]}
              flagged={false}
              onReport={() => router.push(ROUTES.MYPAGE)}
            />
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
          <Tabs
            tabs={TABS}
            renderContent={renderContent}
            activeTabId={String(tab)}
            onChange={handleTabChange}
          />
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
