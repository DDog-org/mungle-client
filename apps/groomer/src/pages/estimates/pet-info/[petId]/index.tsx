import { AppBar, Layout, RoundButton, Text } from '@daengle/design-system';
import { useRouter } from 'next/router';
import { useGetBreedListQuery, useGetGroomerPetInfoQuery } from '~/queries/reservation';

import { ROUTES } from '~/constants/commons';
import { css } from '@emotion/react';
import { PetProfileDetail } from '@daengle/services/components';
import { Loading } from '~/components/commons';

export default function GroomerPetProfileDetail() {
  const router = useRouter();
  const petId = Number(router.query.petId);

  const { data: breeds, isLoading: breedsLoading } = useGetBreedListQuery();
  const {
    data: petInfo,
    isLoading: petInfoLoading,
    isError,
  } = useGetGroomerPetInfoQuery({
    petId,
  });

  if (breedsLoading || petInfoLoading) {
    return <Loading title="반려견 정보를 불러오고 있어요" />;
  }

  if (isError || !petInfo || !breeds) {
    return <div>Error loading pet information</div>;
  }

  return (
    <Layout>
      <AppBar
        onBackClick={router.back}
        onHomeClick={() => router.push(ROUTES.HOME)}
        backgroundColor="white"
      />

      <div css={title}>
        <Text typo="title1">상세보기</Text>
      </div>
      <PetProfileDetail petInfo={petInfo} breeds={breeds} />
      <div css={button}>
        <RoundButton fullWidth service="partner" size="L" onClick={router.back}>
          견적서 확인
        </RoundButton>
      </div>
    </Layout>
  );
}

const title = css`
  padding: 24px 18px;
`;

const button = css`
  padding: 18px;
`;
