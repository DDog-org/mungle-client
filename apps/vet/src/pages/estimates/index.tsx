import { useState } from 'react';
import { Card } from '@daengle/services/components';
import { GNB, Layout, Tabs, Text, theme } from '@daengle/design-system';
import {
  GnbChattingActive,
  GnbChattingInactive,
  GnbHomeActive,
  GnbHomeInactive,
  GnbMyActive,
  GnbMyInactive,
  GnbReservationActive,
  GnbReservationInactive,
  GnbEstimateActive,
  GnbEstimateInactive,
} from '@daengle/design-system/icons';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { GeneralCardList } from '~/components/estimate/general-card-list';
import { DesignationCardList } from '~/components/estimate/designation-card-list';

export const PATHS = {
  ESTIMATE: '/estimate',
  RESERVATION: '/reservation',
  HOME: '/',
  CHATTING: '/chatting',
  MYPAGE: '/mypage',
} as const;

export const MENUS = [
  {
    name: '견적',
    icon: {
      active: <GnbEstimateActive width="32px" height="32px" />,
      inactive: <GnbEstimateInactive width="32px" height="32px" />,
    },
    path: PATHS.ESTIMATE,
  },
  {
    name: '예약',
    icon: {
      active: <GnbReservationActive width="32px" height="32px" />,
      inactive: <GnbReservationInactive width="32px" height="32px" />,
    },
    path: PATHS.RESERVATION,
  },
  {
    name: '홈',
    icon: {
      active: <GnbHomeActive width="32px" height="32px" />,
      inactive: <GnbHomeInactive width="32px" height="32px" />,
    },
    path: PATHS.HOME,
  },
  {
    name: '채팅',
    icon: {
      active: <GnbChattingActive width="32px" height="32px" />,
      inactive: <GnbChattingInactive width="32px" height="32px" />,
    },
    path: PATHS.CHATTING,
  },
  {
    name: '마이',
    icon: {
      active: <GnbMyActive width="32px" height="32px" />,
      inactive: <GnbMyInactive width="32px" height="32px" />,
    },
    path: PATHS.MYPAGE,
  },
];

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
  const [, setActivePath] = useState<string>(PATHS.ESTIMATE);
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
        <Tabs tabs={TABS} renderContent={renderContent} isPadding={false} />
      </div>
      <GNB menus={MENUS} activePath={PATHS.ESTIMATE} onNavigate={(path) => setActivePath(path)} />
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
