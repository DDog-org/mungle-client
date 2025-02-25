import { useEffect, useRef, useState } from 'react';
import { css } from '@emotion/react';
import { Layout, Tabs, Text, theme } from '@daengle/design-system';
import { GNB } from '~/components/commons';
import { GroomerChatList, VetChatList } from '~/components/chats';
import { useRouter } from 'next/router';
import { ROUTES } from '~/constants';
import { useGetUserValidateQuery } from '~/queries';

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

export default function Chats() {
  const router = useRouter();
  const { service } = router.query;

  const { data: isValidUser, isSuccess } = useGetUserValidateQuery();

  useEffect(() => {
    if (!isValidUser?.isValidateMember && isSuccess) {
      router.replace(ROUTES.LOGIN);
    }
  }, [isSuccess, isValidUser]);

  const [activeTab, setActiveTab] = useState(service ?? TABS[0]?.id);

  const scrollRef = useRef<HTMLDivElement>(null);

  const renderContent = (activeTabId: string) => {
    switch (activeTabId) {
      case 'groomer':
        return <GroomerChatList />;
      case 'vet':
        return <VetChatList />;
      default:
        return <GroomerChatList />;
    }
  };

  useEffect(() => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollTo(0, scrollRef.current.scrollHeight);
  }, []);

  useEffect(() => {
    const queryTab = router.query.service as string;
    if (queryTab && TABS.some((tab) => tab.id === queryTab)) {
      setActiveTab(queryTab);
    }
  }, [router.query.service]);

  const handleTabClick = (tabId: string) => {
    router.replace({ query: { service: tabId } }, undefined, { shallow: true });
    setActiveTab(tabId);
  };

  return (
    <Layout isAppBarExist={false}>
      <GNB />
      <section css={wrapper}>
        <div css={titleWrapper}>
          <Text tag="h1" typo="title1" color="black">
            채팅
          </Text>
        </div>

        <div css={chatsWrapper}>
          <Tabs
            tabs={TABS}
            renderContent={renderContent}
            activeTabId={activeTab as string}
            onTabClick={handleTabClick}
          />
        </div>
      </section>
    </Layout>
  );
}

const wrapper = css`
  overflow: hidden;

  width: 100%;
  height: 100%;
  padding: 38px 0 ${theme.size.gnbHeight};
`;

const titleWrapper = css`
  width: 100%;
  padding: 0 18px;
`;

const chatsWrapper = css`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  width: 100%;
  height: 100%;
  margin: 34px 0 0;
  padding: 0 0 ${theme.size.gnbHeight};
`;
