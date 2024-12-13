import { Layout, Tabs, Text, theme } from '@daengle/design-system';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { GeneralCardList } from '~/components/estimate/general-card-list';
import { DesignationCardList } from '~/components/estimate/designation-card-list';
import { GNB } from '~/components/commons/gnb';

const TABS = [
  {
    id: 'general',
    label: '일반 견적서',
  },
  {
    id: 'designation',
    label: '지정 견적서',
  },
];

export default function EstimateList(): JSX.Element {
  const router = useRouter();
  const { tab = 'general' } = router.query;

  const handleTabChange = (tabId: string) => {
    router.push({ pathname: '/estimates', query: { tab: tabId } }, undefined, { shallow: true });
  };

  const renderContent = (activeTabId: string) => {
    switch (activeTabId) {
      case 'general':
        return <GeneralCardList />;
      case 'designation':
        return <DesignationCardList />;
      default:
        return <GeneralCardList />;
    }
  };

  return (
    <Layout isAppBarExist={false}>
      <div css={wrapper}>
        <header css={headerContainer}>
          <Text typo="title1">견적</Text>
        </header>
        <Tabs
          tabs={TABS}
          renderContent={renderContent}
          activeTabId={String(tab)}
          onChange={handleTabChange}
          isPadding={false}
        />
      </div>
      <GNB />
    </Layout>
  );
}

const wrapper = css`
  height: 100vh;
  padding-bottom: 104px;

  background-color: ${theme.colors.background};
`;

const headerContainer = css`
  margin-top: 20px;
  padding: 18px;
`;
import { useRouter } from 'next/router';
import { AppBar, Layout } from '@daengle/design-system';
import { ROUTES } from '~/constants/commons';
import { GNB } from '~/components/commons';

export default function Estimates() {
  const router = useRouter();

  return (
    <Layout>
      <AppBar onBackClick={router.back} onHomeClick={() => router.push(ROUTES.HOME)} />

      <GNB />
    </Layout>
  );
}
