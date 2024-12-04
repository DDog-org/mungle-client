import { useState } from 'react';
import { Layout, AppBar, Text } from '@daengle/design-system';
import { ReviewCardList, ReviewSummary, Tab } from '@daengle/services/review';
import { wrapper, header } from './index.styles';

export default function ReviewPage() {
  const [activeTab, setActiveTab] = useState<string>('받은 리뷰');
  const reviews = [
    {
      id: 1,
      reviewerName: '김가이',
      profileImage: 'https://placehold.co/400',
      rating: 1,
      images: [
        'https://placehold.co/400',
        'https://placehold.co/400',
        'https://placehold.co/400',
        'https://placehold.co/400',
        'https://placehold.co/400',
        'https://placehold.co/400',
      ],
      tag: '#맞춤케어를 잘해줘요',
      content:
        '디자이너 최고 어쩌고 저쩌고 정말 마음에 들어요 앞으로 여기에 정착할게요~! 이제 이게 2줄이 넘어가면 알아서 말 줄임표가 생기지 않을까 하는 기대를 가지고 있습니다! 젠장 아직도 두 줄이 안 넘었네요',
    },
    {
      id: 2,
      reviewerName: '김가이',
      profileImage: 'https://placehold.co/400',
      rating: 2,
      images: [
        'https://placehold.co/400',
        'https://placehold.co/400',
        'https://placehold.co/400',
        'https://placehold.co/400',
        'https://placehold.co/400',
        'https://placehold.co/400',
      ],
      tag: '#맞춤케어를 잘해줘요',
      content:
        '디자이너 최고 어쩌고 저쩌고 정말 마음에 들어요 앞으로 여기에 정착할게요~! 이제 이게 2줄이 넘어가면 알아서 말 줄임표가 생기지 않을까 하는 기대를 가지고 있습니다! 젠장 아직도 두 줄이 안 넘었네요',
    },
    {
      id: 3,
      reviewerName: '김가이',
      profileImage: 'https://placehold.co/400',
      rating: 3,
      images: [
        'https://placehold.co/400',
        'https://placehold.co/400',
        'https://placehold.co/400',
        'https://placehold.co/400',
        'https://placehold.co/400',
        'https://placehold.co/400',
      ],
      tag: '#맞춤케어를 잘해줘요',
      content:
        '디자이너 최고 어쩌고 저쩌고 정말 마음에 들어요 앞으로 여기에 정착할게요~! 이제 이게 2줄이 넘어가면 알아서 말 줄임표가 생기지 않을까 하는 기대를 가지고 있습니다! 젠장 아직도 두 줄이 안 넘었네요',
    },
    {
      id: 4,
      reviewerName: '김가이',
      profileImage: 'https://placehold.co/400',
      rating: 5,
      images: [
        'https://placehold.co/400',
        'https://placehold.co/400',
        'https://placehold.co/400',
        'https://placehold.co/400',
        'https://placehold.co/400',
        'https://placehold.co/400',
      ],
      tag: '#맞춤케어를 잘해줘요',
      content:
        '디자이너 최고 어쩌고 저쩌고 정말 마음에 들어요 앞으로 여기에 정착할게요~! 이제 이게 2줄이 넘어가면 알아서 말 줄임표가 생기지 않을까 하는 기대를 가지고 있습니다! 젠장 아직도 두 줄이 안 넘었네요',
    },
    {
      id: 5,
      reviewerName: '김가이',
      profileImage: 'https://placehold.co/400',
      rating: 4,
      images: [
        'https://placehold.co/400',
        'https://placehold.co/400',
        'https://placehold.co/400',
        'https://placehold.co/400',
        'https://placehold.co/400',
        'https://placehold.co/400',
      ],
      tag: '#맞춤케어를 잘해줘요',
      content:
        '디자이너 최고 어쩌고 저쩌고 정말 마음에 들어요 앞으로 여기에 정착할게요~! 이제 이게 2줄이 넘어가면 알아서 말 줄임표가 생기지 않을까 하는 기대를 가지고 있습니다! 젠장 아직도 두 줄이 안 넘었네요',
    },
  ];

  const flaggedReviews = [
    {
      id: 1,
      reviewerName: '김가이',
      profileImage: 'https://placehold.co/400',
      rating: 1,
      images: [
        'https://placehold.co/400',
        'https://placehold.co/400',
        'https://placehold.co/400',
        'https://placehold.co/400',
        'https://placehold.co/400',
        'https://placehold.co/400',
      ],
      tag: '#맞춤케어를 잘해줘요',
      content:
        '디자이너 최고 어쩌고 저쩌고 정말 마음에 들어요 앞으로 여기에 정착할게요~! 이제 이게 2줄이 넘어가면 알아서 말 줄임표가 생기지 않을까 하는 기대를 가지고 있습니다! 젠장 아직도 두 줄이 안 넘었네요',
      reportType: '욕설',
      reportContent: '리뷰에서 욕설이 발견되었습니다.',
    },
    {
      id: 2,
      reviewerName: '김가이',
      profileImage: 'https://placehold.co/400',
      rating: 2,
      images: [
        'https://placehold.co/400',
        'https://placehold.co/400',
        'https://placehold.co/400',
        'https://placehold.co/400',
        'https://placehold.co/400',
        'https://placehold.co/400',
      ],
      tag: '#맞춤케어를 잘해줘요',
      content:
        '디자이너 최고 어쩌고 저쩌고 정말 마음에 들어요 앞으로 여기에 정착할게요~! 이제 이게 2줄이 넘어가면 알아서 말 줄임표가 생기지 않을까 하는 기대를 가지고 있습니다! 젠장 아직도 두 줄이 안 넘었네요',
      reportType: '욕설',
      reportContent: '리뷰에서 욕설이 발견되었습니다.',
    },
  ];
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <Layout>
      <AppBar isDefaultBackground={false} />
      <div css={wrapper}>
        <div css={header}>
          <Text typo="title1">리뷰 관리</Text>
        </div>
        <Tab
          items={['받은 리뷰', '신고한 리뷰']}
          activeItem={activeTab}
          onChange={handleTabChange}
        />
        {activeTab === '받은 리뷰' ? (
          <>
            <ReviewSummary total={reviews.length} />
            <ReviewCardList reviews={reviews} />
          </>
        ) : (
          <>
            <ReviewSummary total={flaggedReviews.length} />
            <ReviewCardList reviews={flaggedReviews} flagged={true} />
          </>
        )}
      </div>
    </Layout>
  );
}
