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
    id: 1,
    reviewerName: '김가이',
    profileImage: '/test.jpg',
    rating: 1,
    images: ['/test.jpg', '/test.jpg', '/test.jpg', '/test.jpg', '/test.jpg', '/test.jpg'],
    tag: '#맞춤케어를 잘해줘요',
    content:
      '디자이너 최고 어쩌고 저쩌고 정말 마음에 들어요 앞으로 여기에 정착할게요~! 이제 이게 2줄이 넘어가면 알아서 말 줄임표가 생기지 않을까 하는 기대를 가지고 있습니다! 젠장 아직도 두 줄이 안 넘었네요',
  },
  {
    id: 2,
    reviewerName: '김가이',
    profileImage: '/test.jpg',
    rating: 2,
    images: ['/test.jpg', '/test.jpg', '/test.jpg', '/test.jpg', '/test.jpg', '/test.jpg'],
    tag: '#맞춤케어를 잘해줘요',
    content:
      '디자이너 최고 어쩌고 저쩌고 정말 마음에 들어요 앞으로 여기에 정착할게요~! 이제 이게 2줄이 넘어가면 알아서 말 줄임표가 생기지 않을까 하는 기대를 가지고 있습니다! 젠장 아직도 두 줄이 안 넘었네요',
  },
  {
    id: 3,
    reviewerName: '김가이',
    profileImage: '/test.jpg',
    rating: 3,
    images: ['/test.jpg', '/test.jpg', '/test.jpg', '/test.jpg', '/test.jpg', '/test.jpg'],
    tag: '#맞춤케어를 잘해줘요',
    content:
      '디자이너 최고 어쩌고 저쩌고 정말 마음에 들어요 앞으로 여기에 정착할게요~! 이제 이게 2줄이 넘어가면 알아서 말 줄임표가 생기지 않을까 하는 기대를 가지고 있습니다! 젠장 아직도 두 줄이 안 넘었네요',
  },
  {
    id: 4,
    reviewerName: '김가이',
    profileImage: '/test.jpg',
    rating: 5,
    images: ['/test.jpg', '/test.jpg', '/test.jpg', '/test.jpg', '/test.jpg', '/test.jpg'],
    tag: '#맞춤케어를 잘해줘요',
    content:
      '디자이너 최고 어쩌고 저쩌고 정말 마음에 들어요 앞으로 여기에 정착할게요~! 이제 이게 2줄이 넘어가면 알아서 말 줄임표가 생기지 않을까 하는 기대를 가지고 있습니다! 젠장 아직도 두 줄이 안 넘었네요',
  },
  {
    id: 5,
    reviewerName: '김가이',
    profileImage: '/test.jpg',
    rating: 4,
    images: ['/test.jpg', '/test.jpg', '/test.jpg', '/test.jpg', '/test.jpg', '/test.jpg'],
    tag: '#맞춤케어를 잘해줘요',
    content:
      '디자이너 최고 어쩌고 저쩌고 정말 마음에 들어요 앞으로 여기에 정착할게요~! 이제 이게 2줄이 넘어가면 알아서 말 줄임표가 생기지 않을까 하는 기대를 가지고 있습니다! 젠장 아직도 두 줄이 안 넘었네요',
  },
];

const flaggedReviews = [
  {
    id: 1,
    reviewerName: '김가이',
    profileImage: '/test.jpg',
    rating: 1,
    images: ['/test.jpg', '/test.jpg', '/test.jpg', '/test.jpg', '/test.jpg', '/test.jpg'],
    tag: '#맞춤케어를 잘해줘요',
    content:
      '디자이너 최고 어쩌고 저쩌고 정말 마음에 들어요 앞으로 여기에 정착할게요~! 이제 이게 2줄이 넘어가면 알아서 말 줄임표가 생기지 않을까 하는 기대를 가지고 있습니다! 젠장 아직도 두 줄이 안 넘었네요',
    reportType: '욕설',
    reportContent: '리뷰에서 욕설이 발견되었습니다.',
  },
  {
    id: 2,
    reviewerName: '김가이',
    profileImage: '/test.jpg',
    rating: 2,
    images: ['/test.jpg', '/test.jpg', '/test.jpg', '/test.jpg', '/test.jpg', '/test.jpg'],
    tag: '#맞춤케어를 잘해줘요',
    content:
      '디자이너 최고 어쩌고 저쩌고 정말 마음에 들어요 앞으로 여기에 정착할게요~! 이제 이게 2줄이 넘어가면 알아서 말 줄임표가 생기지 않을까 하는 기대를 가지고 있습니다! 젠장 아직도 두 줄이 안 넘었네요',
    reportType: '욕설',
    reportContent: '리뷰에서 욕설이 발견되었습니다.',
  },
];

export default function ReviewsPage() {
  const router = useRouter();

  const renderContent = (activeTabId: string) => {
    switch (activeTabId) {
      case 'list':
        return (
          <div>
            <ReviewSummary total={reviews.length} />
            <ReviewCardList
              reviews={reviews}
              onReport={() => router.push(ROUTES.MYPAGE_REVIEWS_REPORT)}
            />
          </div>
        );
      case 'report':
        return (
          <div>
            <ReviewSummary total={flaggedReviews.length} />
            <ReviewCardList
              reviews={flaggedReviews}
              flagged={true}
              onReport={() => router.push(ROUTES.MYPAGE_REVIEWS_REPORT)}
            />
          </div>
        );
      default:
        return (
          <div>
            <ReviewSummary total={reviews.length} />
            <ReviewCardList
              reviews={reviews}
              onReport={() => router.push(ROUTES.MYPAGE_REVIEWS_REPORT)}
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
