import { AppBar, Layout, Tabs, theme } from '@daengle/design-system';
import { useRouter } from 'next/router';
import { ROUTES } from '~/constants/commons';
import SearchBar from '~/components/search/search-bar';
import { css } from '@emotion/react';
import { GroomerList } from '~/components/search/groomer-list';
import { VetList } from '~/components/search/vet-list';

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

export default function Search() {
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
  return (
    <Layout isAppBarExist={true}>
      <AppBar
        searchBar={<SearchBar />}
        onBackClick={router.back}
        onHomeClick={() => router.push(ROUTES.HOME)}
      />
      <div css={wrapper}>
        <section css={content}>
          <Tabs tabs={TABS} renderContent={renderContent} />
        </section>
      </div>
    </Layout>
  );
}

const wrapper = css`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;

  width: 100%;
`;
const content = css`
  display: flex;
  flex-direction: column;
  flex: 1;

  width: 100%;
  padding: 18px 0;
  border-radius: 30px 30px 0 0;

  background-color: ${theme.colors.white};
`;
