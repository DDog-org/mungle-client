import { useState } from 'react';
import { useRouter } from 'next/router';
import {
  CardList,
  EmptyState,
  FilterTabs,
  OptionSelector,
  ProfileSelector,
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

const petInfos = [
  {
    petId: 1,
    petName: '강아지A',
    petImage: 'https://via.placeholder.com/40',
    groomingEstimates: [
      {
        id: 2,
        name: '미용사A',
        daengleMeter: 10,
        image: 'https://placehold.co/400',
        shopName: '꼬꼬마 관리샵',
        reservedDate: '2024-11-25 11:33:22',
        tags: ['대형견', '노견'],
      },
      {
        id: 19,
        name: '미용사A',
        daengleMeter: 20,
        image: 'https://placehold.co/400',
        shopName: '뽀까샵',
        reservedDate: '2024-11-25 11:33:22',
      },
      {
        id: 22,
        name: '미용사A',
        daengleMeter: 30,
        image: 'https://placehold.co/400',
        shopName: '빠까뽀',
        reservedDate: '2024-11-25 11:33:22',
        tags: ['대형견', '노견'],
      },
    ],
    careEstimates: [
      // {
      //   id: 5,
      //   name: '수의사A',
      //   daengleMeter: 60,
      //   image: 'https://placehold.co/400',
      //   reservedDate: '2024-11-25 11:33:22',
      // },
    ],
  },
  {
    petId: 2,
    petName: '강아지B',
    petImage: 'https://via.placeholder.com/40',
    groomingEstimates: [
      //     {
      //       id: 87,
      //       name: '미용사A',
      //       daengleMeter: 87,
      //       image: 'https://placehold.co/400',
      //       shopName: null,
      //       reservedDate: '2024-11-25 11:33:22',
      //     },
    ],
    careEstimates: [
      {
        id: 6,
        name: '수의사A',
        daengleMeter: 50,
        image: 'https://placehold.co/400',
        reservedDate: '2024-11-25 11:33:22',
      },
    ],
  },
];

export default function EstimateList() {
  const router = useRouter();
  const [filterType, setFilterType] = useState<'미용사' | '병원'>('미용사');
  const [selectedPetIndex, setSelectedPetIndex] = useState(0);

  const selectedPet = petInfos[selectedPetIndex] ?? null;
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
        {petInfos.length > 0 ? (
          <ProfileSelector
            petInfos={petInfos}
            selectedPetIndex={selectedPetIndex}
            onSelectPet={setSelectedPetIndex}
          />
        ) : null}
        <OptionSelector />
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
