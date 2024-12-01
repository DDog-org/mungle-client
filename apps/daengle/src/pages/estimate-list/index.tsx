import { useState } from 'react';
import { useRouter } from 'next/router';
import {
  CardList,
  EmptyState,
  FilterTabs,
  OptionSelector,
  ProfileSelector,
  useDaengleEstimateListQuery,
} from '@daengle/services';
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
  const [filterType, setFilterType] = useState<'미용사' | '병원'>('미용사');
  const [selectedPetIndex, setSelectedPetIndex] = useState(0);
  const { data, isLoading, error } = useDaengleEstimateListQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error || !data) return <div>에러가 발생했습니다.</div>;

  const cardData = data.response;

  const selectedPet = cardData?.petInfos?.[selectedPetIndex];
  const estimateData =
    selectedPet &&
    (filterType === '미용사' ? selectedPet.groomingEstimates : selectedPet.careEstimates);

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
        <FilterTabs filterType={filterType} onFilterChange={setFilterType} />
        {cardData?.petInfos && cardData.petInfos.length > 0 ? (
          <div>
            <ProfileSelector
              petInfos={cardData.petInfos}
              selectedPetIndex={selectedPetIndex}
              onSelectPet={setSelectedPetIndex}
            />
            <OptionSelector />
          </div>
        ) : null}
        {estimateData && estimateData.length > 0 ? (
          <CardList estimateData={estimateData} />
        ) : (
          <EmptyState />
        )}
        <GNB menus={MENUS} activePath={PATHS.ESTIMATE} onNavigate={handleNavigate} />
      </div>
    </Layout>
  );
}
