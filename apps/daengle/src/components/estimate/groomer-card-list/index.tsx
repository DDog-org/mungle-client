import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Empty, useDialog } from '@daengle/design-system';
import {
  useUserEstimateDesignationGroomingPetsQuery,
  useUserEstimateDesignationGroomingQuery,
  useUserEstimateGeneralGroomingPetsQuery,
  useUserEstimateGeneralGroomingQuery,
} from '~/queries';
import {
  GetUserEstimateDesignationGroomingList,
  GetUserEstimateGeneralGroomingList,
} from '~/models';
import { GROOMER_BADGES, ROUTES } from '~/constants';
import { useIntersectionLoad } from '~/hooks';
import { Loading } from '~/components/commons';
import { ProfileSelector, OptionSelector, CardList } from '~/components/estimate';
import { bottom, cardListWrapper, contentWrapper, wrapper } from './index.styles';

interface Props {
  isDesignation: boolean;
}

export function GroomerEstimateList({ isDesignation }: Props) {
  const router = useRouter();
  const { petId } = router.query;
  const { open } = useDialog();

  const [selectedPetId, setSelectedPetId] = useState<number | undefined>(
    petId ? Number(petId) : undefined
  );
  const [selectedEstimateId, setSelectedEstimateId] = useState<number | undefined>(0);

  const {
    data: petData,
    isLoading: petLoading,
    isError,
  } = isDesignation
    ? useUserEstimateDesignationGroomingPetsQuery()
    : useUserEstimateGeneralGroomingPetsQuery();

  if (isError) {
    open({
      title: '로그인 후 이용해 주세요',
      primaryActionLabel: '로그인 하기',
      onPrimaryAction: () => router.replace(ROUTES.LOGIN),
      secondaryActionLabel: '닫기',
    });
    router.back();
  }

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
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = isDesignation
    ? useUserEstimateDesignationGroomingQuery(selectedPetId)
    : useUserEstimateGeneralGroomingQuery(selectedPetId);

  const { loadMoreRef } = useIntersectionLoad({ fetchNextPage, hasNextPage, isFetchingNextPage });

  const flattenedEstimates = isDesignation
    ? estimates?.pages
        .flatMap((page) => page.estimates)
        .filter((estimate): estimate is GetUserEstimateDesignationGroomingList => !!estimate) || []
    : estimates?.pages
        .flatMap((page) => page.estimates)
        .filter((estimate): estimate is GetUserEstimateGeneralGroomingList => !!estimate) || [];

  return (
    <div css={wrapper}>
      {petLoading ? (
        <Loading title="견적서를 불러오고 있어요" />
      ) : petInfos.length === 0 ? (
        <Empty title="작성된 견적서가 없어요" />
      ) : (
        <>
          <ProfileSelector
            petInfos={petInfos}
            selectedPetId={selectedPetId ?? null}
            onSelectPet={(petId) => {
              setSelectedPetId(petId);
              router.push({ pathname: router.pathname, query: { ...router.query, petId } });
            }}
          />
          <OptionSelector estimateId={selectedEstimateId} />

          <div css={contentWrapper}>
            {estimateLoading ? (
              <Loading title="견적서를 불러오고 있어요" />
            ) : flattenedEstimates.length === 0 ? (
              <Empty title="견적서가 존재하지 않아요" />
            ) : (
              <div css={cardListWrapper}>
                {flattenedEstimates.map((estimate) => (
                  <CardList
                    mode={isDesignation ? 'designation' : 'general'}
                    estimateId={estimate.id}
                    partnerName={estimate.name}
                    daengleMeter={estimate.daengleMeter}
                    name={estimate.shopName}
                    reservedDate={estimate.reservedDate}
                    badges={estimate.badges.map((badge) => GROOMER_BADGES[badge])}
                    imageUrl={estimate.imageUrl}
                    onCardClick={() =>
                      router.push({
                        pathname: ROUTES.ESTIMATES_DETAIL(estimate.id),
                        query: { service: 'groomer', petId: selectedPetId },
                      })
                    }
                  />
                ))}
              </div>
            )}
          </div>

          <div ref={loadMoreRef} css={bottom} />
        </>
      )}
    </div>
  );
}
