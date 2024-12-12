import { useState } from 'react';
import { useRouter } from 'next/router';
import { Layout, Tabs, Text, TextButton, theme } from '@daengle/design-system';
import { SelectUnfoldInactive } from '@daengle/design-system/icons';
import { css } from '@emotion/react';

import { GNB } from '~/components/commons';
import {
  useUserEstimateGeneralGroomingPetsQuery,
  useUserEstimateGeneralGroomingQuery,
} from '~/queries';
import { EmptyState } from '@daengle/services/components';
import { CardList, ProfileSelector } from '~/components/estimate';
import { GetUserEstimateGeneralGroomingResponse } from '~/models';

// CardList 컴포넌트 (mode/category/petId에 따른 리스트 렌더링)
// function CardList({
//   mode,
//   category,
//   petId,
//   onCardClick,
// }: {
//   mode: 'general' | 'designation';
//   category: 'groomer' | 'vet';
//   petId: number | undefined;
//   onCardClick: (itemId: number) => void;
// }) {
//   // 실제 데이터 호출
//   const { data, isLoading, error } = useUserEstimateGeneralGroomingPetsQuery();

//   if (isLoading) return <div>로딩 중...</div>;
//   if (error || !data) return <div>데이터 불러오기 실패</div>;

//   const { petInfos } = data;
//   if (!petInfos || petInfos.length === 0) {
//     return <EmptyState isEmptyEstimates={true} hasOptions={true} />;
//   }

//   return (
//     <div>
//       {petInfos.map((item) => (
//         <div key={item.petId} onClick={() => onCardClick(item.petId)}>
//           {item.name}
//         </div>
//       ))}
//     </div>
//   );
// }

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

export default function EstimateList() {
  const router = useRouter();
  const [activeTabId, setActiveTabId] = useState<'groomer' | 'vet'>('groomer');
  const [isDesignation, setIsDesignation] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPetIndex, setSelectedPetIndex] = useState(0);

  const mode = isDesignation ? 'designation' : 'general';
  const category = activeTabId;

  const {
    data: petData,
    isLoading: petLoading,
    error: petError,
  } = useUserEstimateGeneralGroomingPetsQuery();
  const petInfos = petData?.petInfos || [];
  const selectedPet = petInfos[selectedPetIndex] || null;

  const {
    data: estimatesData,
    isLoading: estimatesLoading,
    error: estimatesError,
    fetchNextPage,
  } = useUserEstimateGeneralGroomingQuery(
    selectedPet?.petId! // petId가 있을 경우에만 호출, 없으면 undefined일 때 호출 안 할 수 있도록 조건부로 처리
  );

  const flattenedEstimates =
    estimatesData?.pages.flatMap((page: GetUserEstimateGeneralGroomingResponse) =>
      page.estimates?.map((est) => ({
        id: est.id,
        image: est.imageUrl,
        name: est.name,
        daengleMeter: est.daengleMeter,
        shopName: est.shopName,
        reservedDate: est.reservedDate,
        tags: est.keywords,
      }))
    ) || [];

  const handleModal = () => setIsModalOpen(!isModalOpen);
  const handleTogglePage = (value: boolean) => {
    setIsDesignation(value);
    setIsModalOpen(false);
  };
  const handleCardClick = (itemId: number) => {
    router.push(`/estimate/${itemId}?type=${category}`);
  };

  return (
    <Layout isAppBarExist={false}>
      <div css={wrapper}>
        <div css={headerContainer} onClick={handleModal}>
          <Text typo="title1">{isDesignation ? '바로 예약' : '견적'}</Text>
          <SelectUnfoldInactive width="14px" height="8px" />
        </div>
        {isModalOpen && (
          <>
            <div css={modalOverlay} onClick={handleModal}></div>
            <div css={modalContent}>
              <TextButton onClick={() => handleTogglePage(false)}>
                <Text typo="subtitle1" css={modalItem(!isDesignation)}>
                  견적
                </Text>
              </TextButton>
              <div css={line}></div>
              <TextButton onClick={() => handleTogglePage(true)}>
                <Text typo="subtitle1" css={modalItem(isDesignation)}>
                  바로 예약
                </Text>
              </TextButton>
            </div>
          </>
        )}

        <Tabs
          tabs={TABS}
          renderContent={(id) => (
            <CardList
              mode={mode}
              category={id === 'groomer' ? 'groomer' : 'vet'}
              estimateData={flattenedEstimates}
              onCardClick={handleCardClick}
            />
          )}
        />

        {petLoading ? (
          <div>로딩 중...</div>
        ) : petError ? (
          <div>펫 정보를 불러오는데 실패했습니다.</div>
        ) : petInfos.length === 0 ? (
          <EmptyState isEmptyEstimates={true} hasOptions={false} />
        ) : selectedPet ? (
          <>
            <ProfileSelector
              petInfos={petInfos}
              selectedPetIndex={selectedPetIndex}
              onSelectPet={setSelectedPetIndex}
            />
            {/* <CardList
              mode={mode}
              category={category}
              petId={selectedPet.petId}
              onCardClick={handleCardClick}
            /> */}
          </>
        ) : (
          <div>선택한 펫 정보가 없습니다.</div>
        )}

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
  padding: 18px 34px;

  cursor: pointer;
`;

const line = css`
  width: 100%;
  height: 1px;

  background: ${theme.colors.gray100};
`;

const modalItem = (isActive: boolean) => css`
  width: 100%;
  border: none;

  color: ${isActive ? theme.colors.blue200 : theme.colors.gray400};
  text-align: center;

  cursor: pointer;

  :hover {
    color: ${theme.colors.blue200};
  }
`;

const modalOverlay = css`
  position: fixed;
  inset: 0;

  z-index: 100;

  background: ${theme.colors.grayOpacity300};
`;

const modalContent = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 19px;
  position: fixed;
  bottom: 0;
  z-index: 101;

  width: 100%;
  max-width: ${theme.size.maxWidth};
  padding: 21px 18px;
  border-radius: 20px 20px 0 0;

  background: white;

  @keyframes slide-up {
    from {
      transform: translateY(100%);
    }

    to {
      transform: translateY(0);
    }
  }
  animation: slide-up 0.3s ease-in-out;
`;
