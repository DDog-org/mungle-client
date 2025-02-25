import { Layout, Tabs, Text, theme } from '@daengle/design-system';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { GNB } from '~/components/commons/gnb';
import { DesignationCardList, GeneralCardList } from '~/components/estimate';

const TABS = [
  { id: 'general', label: '일반 견적서' },
  { id: 'designation', label: '지정 견적서' },
];

export default function EstimateList() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(TABS[0]?.id);

  useEffect(() => {
    const queryTab = router.query.service as string;
    if (queryTab && TABS.some((tab) => tab.id === queryTab)) {
      setActiveTab(queryTab);
    }
  }, [router.query.tab]);

  const handleTabClick = (tabId: string) => {
    router.replace({ query: { service: tabId } }, undefined, { shallow: true });
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
        <header css={headerContainer}>
          <Text typo="title1">견적</Text>
        </header>

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
  height: 100vh;
  padding-bottom: 104px;

  background-color: ${theme.colors.background};
`;

const headerContainer = css`
  margin-top: 20px;
  padding: 18px;
`;
