import { css } from '@emotion/react';
import { AppBar, Layout, Tabs, Text, theme } from '@daengle/design-system';
import { GroomerList, VetList } from '~/components/mypage';
import { ROUTES } from '~/constants/commons';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

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

export default function Payments() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<string>('groomer');

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

  return (
    <Layout isAppBarExist={false}>
      <AppBar onBackClick={router.back} onHomeClick={() => router.push(ROUTES.HOME)} />
      <section css={wrapper}>
        <Text tag="h1" typo="title1" color="black">
          결제 내역
        </Text>

        <div css={content}>
          <Tabs
            tabs={TABS}
            renderContent={renderContent}
            activeTabId={activeTab}
            onTabClick={handleTabClick}
          />
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
