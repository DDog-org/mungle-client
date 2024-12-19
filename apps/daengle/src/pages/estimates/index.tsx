import { useEffect, useState } from 'react';
import { ActionSheet, Layout, Tabs, Text } from '@daengle/design-system';
import { BlackUnfoldArrow } from '@daengle/design-system/icons';
import { theme } from '@daengle/design-system';
import { css } from '@emotion/react';
import { GNB } from '~/components/commons';
import { GroomerEstimateList } from '~/components/estimate/groomer-card-list';
import { VetEstimateList } from '~/components/estimate/vet-card-list';
import { useRouter } from 'next/router';
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

const ACTION_SHEET_MENUS = [
  { id: 'general', label: '견적', to: ROUTES.ESTIMATES },
  { id: 'designation', label: '바로 예약', to: ROUTES.ESTIMATES },
];

export default function EstimateList() {
  const router = useRouter();

  const { isDesignation: isDesignationQuery } = router.query;
  const isDesignation = isDesignationQuery === 'true';

  const [isActionSheetOpen, setIsActionSheetOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string>('groomer');

  const renderContent = (activeTabId: string) => {
    switch (activeTabId) {
      case 'groomer':
        return <GroomerEstimateList isDesignation={isDesignation} />;

      case 'vet':
        return <VetEstimateList isDesignation={isDesignation} />;
      default:
        return <GroomerEstimateList isDesignation={isDesignation} />;
    }
  };

  const handleModal = () => {
    setIsActionSheetOpen((prev) => !prev);
  };

  useEffect(() => {
    const queryTab = router.query.service as string;
    if (queryTab && TABS.some((tab) => tab.id === queryTab)) {
      setActiveTab(queryTab);
    }
  }, [router.query.serviceb]);

  const handleTabClick = (tabId: string) => {
    router.push({ query: { service: tabId } }, undefined, { shallow: true });
    setActiveTab(tabId);
  };

  return (
    <Layout isAppBarExist={false}>
      <div css={wrapper}>
        <div css={headerContainer} onClick={handleModal}>
          <Text typo="title1">{isDesignation ? '바로 예약' : '견적'}</Text>
          <BlackUnfoldArrow width={14} height={8} />
        </div>

        {isActionSheetOpen && (
          <ActionSheet
            onClose={() => setIsActionSheetOpen(false)}
            menus={ACTION_SHEET_MENUS.map((menu) => ({
              ...menu,
              onClick: () => {
                router.push({
                  pathname: menu.to,
                  query: {
                    service: router.query.service,
                    isDesignation: menu.id === 'designation',
                  },
                });
                setIsActionSheetOpen(false);
              },
              isSelected: isDesignation ? menu.id === 'designation' : menu.id === 'general',
            }))}
          />
        )}
        <Tabs
          tabs={TABS}
          renderContent={renderContent}
          activeTabId={activeTab}
          onTabClick={handleTabClick}
        />
        <GNB />
      </div>
    </Layout>
  );
}

const wrapper = css`
  min-height: 100%;
  padding-bottom: 104px;

  background-color: ${theme.colors.background};
`;

const headerContainer = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;

  margin-top: 4px;
  padding: 34px 18px;

  cursor: pointer;
`;
