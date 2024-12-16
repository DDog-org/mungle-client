import { Layout, Tabs, Text, theme } from '@daengle/design-system';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { GNB } from '~/components/commons/gnb';
import { DesignationCardList, GeneralCardList } from '~/components/estimate';

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
        <Tabs tabs={TABS} renderContent={renderContent} />
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
