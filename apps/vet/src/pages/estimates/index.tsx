import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import { Layout, Tabs, Text, theme } from '@daengle/design-system';
import { GNB } from '~/components/commons';
import { GeneralCardList, DesignationCardList } from '~/components/estimates';

const TABS = [
  { id: 'general', label: '일반 견적서' },
  { id: 'designation', label: '지정 견적서' },
];

export default function EstimateList() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(TABS[0]?.id);

  useEffect(() => {
    const queryTab = router.query.tab as string;
    if (queryTab && TABS.some((tab) => tab.id === queryTab)) {
      setActiveTab(queryTab);
    }
  }, [router.query.tab]);

  const handleTabClick = (tabId: string) => {
    router.push({ query: { tab: tabId } }, undefined, { shallow: true });
    setActiveTab(tabId);
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
        <h1 css={headerWrapper}>
          <Text typo="title1">견적</Text>
        </h1>

        <Tabs
          tabs={TABS}
          renderContent={renderContent}
          activeTabId={activeTab}
          onTabClick={handleTabClick}
        />
      </div>
      <GNB />
    </Layout>
  );
}

const wrapper = css`
  display: flex;
  flex-direction: column;
  flex: 1;

  background: ${theme.colors.background};
`;

const headerWrapper = css`
  padding: 38px 18px 25px;
`;
