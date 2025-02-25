import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import { Layout, Tabs, Text, theme } from '@daengle/design-system';
import { GroomerList, VetList } from '~/components/reservations';
import { GNB } from '~/components/commons';
import { useEffect, useState } from 'react';
import { useGetUserValidateQuery } from '~/queries';
import { ROUTES } from '~/constants';

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

  const { data: isValidUser, isSuccess } = useGetUserValidateQuery();

  useEffect(() => {
    if (!isValidUser?.isValidateMember && isSuccess) {
      router.replace(ROUTES.LOGIN);
    }
  }, [isSuccess, isValidUser]);

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
      <section css={wrapper}>
        <Text tag="h1" typo="title1" color="black">
          예약
        </Text>

        <div css={content}>
          <Tabs
            tabs={TABS}
            renderContent={renderContent}
            activeTabId={activeTab}
            onTabClick={handleTabClick}
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

  padding: 38px 0 0;

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
