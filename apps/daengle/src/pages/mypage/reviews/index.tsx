import { AppBar, Layout, Tabs, Text, theme } from '@daengle/design-system';
import { css } from '@emotion/react';
import { CardList } from '~/components/mypage';

const TABS = [
  {
    id: 'groomer',
    label: '미용사',
    content: (
      <CardList
        cards={[
          {
            groomerName: '문소연',
            rate: 5,
            review: '너무 잘해 주셔서 감사합니다!',
            images: [
              'https://via.placeholder.com/150',
              'https://via.placeholder.com/150',
              'https://via.placeholder.com/150',
            ],
          },
          {
            groomerName: '김윤일',
            rate: 5,
            review: '너무 잘해 주셔서 감사합니다!',
            images: [
              'https://via.placeholder.com/150',
              'https://via.placeholder.com/150',
              'https://via.placeholder.com/150',
            ],
          },
        ]}
      />
    ),
  },
  {
    id: 'vet',
    label: '병원',
    content: (
      <CardList
        cards={[
          {
            groomerName: '문소연',
            rate: 5,
            review: '너무 잘해 주셔서 감사합니다!',
            images: [
              'https://via.placeholder.com/150',
              'https://via.placeholder.com/150',
              'https://via.placeholder.com/150',
            ],
          },
          {
            groomerName: '김윤일',
            rate: 5,
            review: '너무 잘해 주셔서 감사합니다!',
            images: [
              'https://via.placeholder.com/150',
              'https://via.placeholder.com/150',
              'https://via.placeholder.com/150',
            ],
          },
        ]}
      />
    ),
  },
];

export default function Reviews() {
  return (
    <Layout isAppBarExist={false}>
      <AppBar />
      <section css={wrapper}>
        <Text tag="h1" typo="title1" color="black">
          내가 쓴 리뷰
        </Text>

        <div css={content}>
          <Tabs tabs={TABS} />
        </div>
      </section>
    </Layout>
  );
}

const wrapper = css`
  display: flex;
  flex-direction: column;
  flex: 1;

  padding: calc(${theme.size.appBarHeight} + 18px) 0 0 0;

  background: ${theme.colors.background};

  h1 {
    margin: 0 18px;
  }
`;

const content = css`
  width: 100%;
  height: 100%;
  margin: 34px 0 0;
`;
