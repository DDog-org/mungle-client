import { css } from '@emotion/react';
import { Layout, Tabs, Text, theme } from '@daengle/design-system';
import { GroomerList, VetList } from '~/components/reservations';
import { GNB } from '~/components/commons';
import { useRouter } from 'next/router';

const TABS = [
  {
    id: 'groomer',
    label: '미용사',
  },
  {
    id: 'vet',
    label: '병원',
  },
];

export default function Reservations() {
  const router = useRouter();
  const renderContent = (activeTabId: string) => {
    switch (activeTabId) {
      case 'groomer':
        return <GroomerList />;
      case 'vet':
        return <VetList />;
      default:
        return <GroomerList />;
    }
  };

  const { tab = 'groomer' } = router.query;

  const handleTabChange = (activeTabId: string) => {
    router.push({ pathname: '/reservations', query: { tab: activeTabId } }, undefined, {
      shallow: true,
    });
  };

  return (
    <Layout isAppBarExist={false}>
      <section css={wrapper}>
        <Text tag="h1" typo="title1" color="black">
          예약
        </Text>

        <div css={content}>
          <Tabs
            tabs={TABS}
            renderContent={renderContent}
            activeTabId={String(tab)}
            onChange={handleTabChange}
          />
        </div>
        <GNB />
      </section>
    </Layout>
  );
}

const wrapper = css`
  display: flex;
  flex-direction: column;
  flex: 1;

  padding: calc(${theme.size.appBarHeight} - 18px) 0 0 0;

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
