import { useEffect, useRef } from 'react';
import { css } from '@emotion/react';
import { Layout, Tabs, Text, theme } from '@daengle/design-system';
import { GNB } from '~/components/commons';
import { GroomerChatList, VetChatList } from '~/components/chats';

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

  return (
    <Layout isAppBarExist={false}>
      <GNB />
      <section css={wrapper}>
        <Text tag="h1" typo="title1" color="black">
          채팅
        </Text>

        <div css={chatsWrapper}>
          <Tabs tabs={TABS} renderContent={renderContent} />
        </div>
      </section>
    </Layout>
  );
}

const wrapper = css`
  overflow: hidden;

  width: 100%;
  height: 100%;
  padding: 38px 18px ${theme.size.gnbHeight};
`;

const chatsWrapper = css`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  width: 100%;
  height: 100%;
  margin: 22px 0 0;
  padding: 0 0 ${theme.size.gnbHeight};
`;
