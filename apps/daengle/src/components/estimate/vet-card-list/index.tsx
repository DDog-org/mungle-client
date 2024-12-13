import { EmptyState } from '@daengle/services/components';
import { useState } from 'react';

import { ProfileSelector } from '../pet-profile';
import { CardList } from '../card-list';
import { useUserEstimateGeneralCarePetsQuery, useUserEstimateGeneralCareQuery } from '~/queries';
import { GetUserEstimateGeneralCareList } from '~/models';

export function VetEstimateList() {
  const [selectedPetIndex, setSelectedPetIndex] = useState(0);
  const {
    data: petData,
    isLoading: petLoading,
    error: petError,
  } = useUserEstimateGeneralCarePetsQuery();

  const petInfos = petData?.pets || [];
  const selectedPet = petInfos[selectedPetIndex] || null;

  const {
    data: estimates,
    isLoading: estimateLoading,
    error: estimateError,
    fetchNextPage,
    hasNextPage,
  } = useUserEstimateGeneralCareQuery(selectedPet?.petId || 0);

  const flattenedEstimates: GetUserEstimateGeneralCareList[] =
    estimates?.pages
      .flatMap((page) => page.estimates)
      .filter((estimate): estimate is GetUserEstimateGeneralCareList => !!estimate) || [];

  console.log('변환된 데이터', flattenedEstimates);

  return (
    <>
      {petLoading ? (
        <div>로딩 중...</div>
      ) : petError ? (
        <div>펫 정보를 불러오는데 실패했습니다.</div>
      ) : petInfos.length === 0 ? (
        <EmptyState isEmptyEstimates={false} hasOptions={false} />
      ) : selectedPet ? (
        <>
          <ProfileSelector
            petInfos={petInfos}
            selectedPetIndex={selectedPetIndex}
            onSelectPet={setSelectedPetIndex}
          />
          {estimateLoading ? (
            <div>견적 데이터를 불러오는 중...</div>
          ) : estimateError ? (
            <div>견적 데이터를 불러오는데 실패했습니다.</div>
          ) : flattenedEstimates.length === 0 ? (
            <EmptyState isEmptyEstimates={true} hasOptions={true} />
          ) : (
            <CardList
              mode="general"
              category="vet"
              estimateData={flattenedEstimates}
              onCardClick={(petId: number) => console.log(`Card clicked: ${petId}`)}
            />
          )}
          {hasNextPage && <button onClick={() => fetchNextPage()}>더 보기</button>}
        </>
      ) : (
        <div>선택한 펫 정보가 없습니다.</div>
      )}
    </>
  );
}
