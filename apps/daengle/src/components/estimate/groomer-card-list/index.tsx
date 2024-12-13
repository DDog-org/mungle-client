import { EmptyState } from '@daengle/services/components';
import { useState } from 'react';
import {
  useUserEstimateDesignationGroomingPetsQuery,
  useUserEstimateDesignationGroomingQuery,
  useUserEstimateGeneralGroomingPetsQuery,
  useUserEstimateGeneralGroomingQuery,
} from '~/queries';
import { ProfileSelector } from '../pet-profile';
import { CardList } from '../card-list';
import {
  GetUserEstimateDesignationGroomingList,
  GetUserEstimateGeneralGroomingList,
} from '~/models';
import { useIntersectionLoad } from '~/hooks';
import { bottom } from './index.styles';
import { useRouter } from 'next/router';
import { ROUTES } from '~/constants/commons';

interface Props {
  isDesignation: boolean;
}

export function GroomerEstimateList({ isDesignation }: Props) {
  const router = useRouter();
  const [selectedPetIndex, setSelectedPetIndex] = useState(0);
  const {
    data: petData,
    isLoading: petLoading,
    error: petError,
  } = isDesignation
    ? useUserEstimateDesignationGroomingPetsQuery()
    : useUserEstimateGeneralGroomingPetsQuery();

  const petInfos = petData?.pets || [];
  const selectedPet = petInfos[selectedPetIndex] || null;

  const {
    data: estimates,
    isLoading: estimateLoading,
    error: estimateError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = isDesignation
    ? useUserEstimateDesignationGroomingQuery(selectedPet?.petId || 0)
    : useUserEstimateGeneralGroomingQuery(selectedPet?.petId || 0);

  const { loadMoreRef } = useIntersectionLoad({ fetchNextPage, hasNextPage, isFetchingNextPage });

  const flattenedEstimates = isDesignation
    ? estimates?.pages
        .flatMap((page) => page.estimates)
        .filter((estimate): estimate is GetUserEstimateDesignationGroomingList => !!estimate) || []
    : estimates?.pages
        .flatMap((page) => page.estimates)
        .filter((estimate): estimate is GetUserEstimateGeneralGroomingList => !!estimate) || [];

  return (
    <>
      {petLoading ? (
        <div>로딩 중...</div>
      ) : petError ? (
        <div>펫 정보를 불러오는데 실패했습니다.</div>
      ) : petInfos.length === 0 ? (
        <EmptyState
          isEmptyEstimates={false}
          hasOptions={false}
          onClick={() => router.push(ROUTES.ESTIMATE_GROOMING)}
        />
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
              mode={isDesignation ? 'designation' : 'general'}
              category="groomer"
              estimateData={flattenedEstimates}
              onCardClick={(id: number) =>
                router.push({
                  pathname: ROUTES.ESTIMATE_DETAIL(selectedPet.estimateId),
                  query: { type: 'grooming', petId: selectedPet?.petId },
                })
              }
            />
          )}
          <div ref={loadMoreRef} css={bottom} />
        </>
      ) : (
        <div>선택한 펫 정보가 없습니다.</div>
      )}
    </>
  );
}
