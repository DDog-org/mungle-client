import { useState } from 'react';
import { useRouter } from 'next/router';
import { EmptyState, Tab } from '@daengle/services/components';
import { GNB, Layout, Text } from '@daengle/design-system';
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
import { wrapper, headerContainer } from './index.styles';
import { useDaengleEstimateListQuery } from '~/queries';
import { CardList, OptionSelector, ProfileSelector } from '~/components/estimate';

export const PATHS = {
  ESTIMATE: '/estimate-list',
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

export default function EstimateList() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<string>('미용사');
  const [selectedPetIndex, setSelectedPetIndex] = useState(0);
  const { data, isLoading, error } = useDaengleEstimateListQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error || !data) return <div>에러가 발생했습니다.</div>;

  const cardData = data || [];

  const selectedPet = cardData?.petInfos?.[selectedPetIndex];
  const estimateData = selectedPet
    ? activeTab === '미용사'
      ? selectedPet.groomingEstimates?.map((item) => ({
          ...item,
          id: item.groomingEstimateId,
        }))
      : selectedPet.careEstimates?.map((item) => ({
          ...item,
          id: item.careEstimateId,
        }))
    : [];

  const petInfos = cardData?.petInfos || [];
  const hasOptions = !!(cardData?.petInfos && cardData.petInfos.length > 0);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const handleNavigate = (path: string) => {
    // 임시 경로
    router.push(path);
  };

  return (
    <Layout isAppBarExist={false}>
      <div css={wrapper}>
        <div css={headerContainer}>
          <Text typo="title1">견적</Text>
        </div>
        <Tab items={['미용사', '병원']} activeItem={activeTab} onChange={handleTabChange} />
        {hasOptions && (
          <div>
            <ProfileSelector
              petInfos={petInfos}
              selectedPetIndex={selectedPetIndex}
              onSelectPet={setSelectedPetIndex}
            />
            <OptionSelector />
          </div>
        )}
        {estimateData && estimateData.length > 0 ? (
          <CardList estimateData={estimateData} />
        ) : (
          <EmptyState hasOptions={hasOptions} />
        )}
        <GNB menus={MENUS} activePath={PATHS.ESTIMATE} onNavigate={handleNavigate} />
      </div>
    </Layout>
  );
}
