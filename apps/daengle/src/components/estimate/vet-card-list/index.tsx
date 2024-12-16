import { EmptyState } from '@daengle/services/components';
import { useEffect, useState } from 'react';

import { ProfileSelector } from '../pet-profile';
import { CardList } from '../card-list';
import {
  useUserEstimateDesignationCarePetsQuery,
  useUserEstimateDesignationCareQuery,
  useUserEstimateGeneralCarePetsQuery,
  useUserEstimateGeneralCareQuery,
} from '~/queries';
import { GetUserEstimateDesignationCareList, GetUserEstimateGeneralCareList } from '~/models';
import { useIntersectionLoad } from '~/hooks';
import { bottom } from './index.styles';
import { useRouter } from 'next/router';
import { ROUTES } from '~/constants/commons';
import { OptionSelector } from '../option';

interface Props {
  isDesignation: boolean;
}

export function VetEstimateList({ isDesignation }: Props) {
  const router = useRouter();
  const { petId } = router.query;
  const [selectedPetId, setSelectedPetId] = useState<number | undefined>(
    petId ? Number(petId) : undefined
  );
  const [selectedEstimateId, setSelectedEstimateId] = useState<number | undefined>(0);
  const {
    data: petData,
    isLoading: petLoading,
    error: petError,
  } = isDesignation
    ? useUserEstimateDesignationCarePetsQuery()
    : useUserEstimateGeneralCarePetsQuery();

  const petInfos = petData?.pets || [];

  useEffect(() => {
    if (!selectedPetId && petInfos.length > 0) {
      const firstPetId = petInfos[0]?.petId;
      setSelectedPetId(firstPetId);
      router.replace({ pathname: router.pathname, query: { ...router.query, petId: firstPetId } });
    }
  }, [petInfos, selectedPetId, router]);

  useEffect(() => {
    if (selectedPetId) {
      const selectedPet = petInfos.find((pet) => pet.petId === selectedPetId);
      setSelectedEstimateId(selectedPet?.estimateId);
    }
  }, [selectedPetId, petInfos]);

  const {
    data: estimates,
    isLoading: estimateLoading,
    error: estimateError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = isDesignation
    ? useUserEstimateDesignationCareQuery(selectedPetId)
    : useUserEstimateGeneralCareQuery(selectedPetId);

  const { loadMoreRef } = useIntersectionLoad({ fetchNextPage, hasNextPage, isFetchingNextPage });

  const flattenedEstimates = isDesignation
    ? estimates?.pages
        .flatMap((page) => page.estimates)
        .filter((estimate): estimate is GetUserEstimateDesignationCareList => !!estimate) || []
    : estimates?.pages
        .flatMap((page) => page.estimates)
        .filter((estimate): estimate is GetUserEstimateGeneralCareList => !!estimate) || [];

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
          onClick={
            isDesignation
              ? () => router.push(ROUTES.SEARCH)
              : () => router.push(ROUTES.ESTIMATE_VET)
          }
        />
      ) : (
        <>
          <ProfileSelector
            petInfos={petInfos}
            selectedPetId={selectedPetId}
            onSelectPet={(petId) => {
              setSelectedPetId(petId);
              router.push({ pathname: router.pathname, query: { ...router.query, petId } });
            }}
          />
          <OptionSelector estimateId={selectedEstimateId} />
          {estimateLoading ? (
            <div>견적 데이터를 불러오는 중...</div>
          ) : estimateError ? (
            <div>견적 데이터를 불러오는데 실패했습니다.</div>
          ) : flattenedEstimates.length === 0 ? (
            <EmptyState isEmptyEstimates={true} hasOptions={true} />
          ) : (
            <CardList
              mode={isDesignation ? 'designation' : 'general'}
              category="vet"
              estimateData={flattenedEstimates}
              onCardClick={(id: number) =>
                router.push({
                  pathname: ROUTES.ESTIMATE_DETAIL(id),
                  query: { service: 'vet', petId: selectedPetId },
                })
              }
            />
          )}
          <div ref={loadMoreRef} css={bottom} />
        </>
      )}
    </>
  );
}
