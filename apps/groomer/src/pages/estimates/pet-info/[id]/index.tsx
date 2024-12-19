import { useRouter } from 'next/router';
import {
  AppBar,
  ChipRadio,
  ChipToggleButton,
  Input,
  Layout,
  RoundButton,
  Select,
  Text,
  TextField,
  theme,
} from '@daengle/design-system';
import { css } from '@emotion/react';
import Image from 'next/image';
import { ROUTES } from '~/constants/commons';
import { useGetBreedListQuery, useGetGroomerPetInfoQuery } from '~/queries/reservation';
import {
  BIRTH_YEAR_OPTIONS,
  PET_DISLIKEPART,
  PET_EXPERIENCE,
  PET_GENDER,
  PET_IS_NEUTERED,
  PET_SIGNIFICANTTAG,
} from '~/constants/pet';
import { Breed } from '~/models/reservation';
import { info } from 'console';

export default function PetProfileDetail() {
  const router = useRouter();

  const { id } = router.query;
  const petId = Number(id);
  const { data: breeds } = useGetBreedListQuery();
  const {
    data: petInfo,
    isLoading,
    isError,
  } = useGetGroomerPetInfoQuery({
    petId,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !petInfo) {
    return <div>Error loading pet information</div>;
  }

  return (
    <Layout isAppBarExist={true}>
      <AppBar
        onBackClick={router.back}
        onHomeClick={() => router.push(ROUTES.HOME)}
        backgroundColor={theme.colors.white}
      />
      <div css={title}>
        <Text typo="title1">상세보기</Text>
      </div>
      <div css={profileWrapper}>
        <section css={section}>
          <Text tag="h2" typo="subtitle3">
            아이 프로필
          </Text>
          <div css={petProfile}>
            {petInfo.image ? (
              <Image
                src={petInfo.image}
                alt="반려견 프로필"
                width={86}
                height={86}
                css={profileImage}
              />
            ) : (
              <div css={defaultProfile}>No Image</div>
            )}
            <Text typo="body1" color="green200">
              {petInfo.name}
            </Text>
          </div>
        </section>
      </div>
      <div css={divider} />
      <section css={inputWrapper}>
        <div css={readOnlyLayer} />
        <Input label="이름" readOnly value={petInfo.name} />
        <section css={formBox}>
          <div css={infoCard}>
            <Text typo="subtitle3" color="black">
              탄생년도
            </Text>
            <Select options={BIRTH_YEAR_OPTIONS} placeholder="탄생년도" value={petInfo.birth} />
          </div>
          <div css={infoCard}>
            <Text typo="subtitle3">성별</Text>
            <section css={toggleButtonBox}>
              {PET_GENDER.map((gender) => (
                <ChipRadio
                  key={gender.value}
                  value={gender.value}
                  label={gender.label}
                  size="full"
                  isSelected={petInfo.gender === gender.value}
                />
              ))}
            </section>
          </div>
          <div css={infoCard}>
            <Text typo="subtitle3">중성화</Text>
            <section css={toggleButtonBox}>
              {PET_IS_NEUTERED.map((item) => (
                <ChipRadio
                  key={item.label}
                  value={item.value}
                  label={item.label}
                  size="full"
                  isSelected={String(petInfo.isNeutered) === item.value}
                />
              ))}
            </section>
          </div>
          <div css={infoCard}>
            <Text typo="subtitle3" color="black">
              품종
            </Text>
            <Select
              options={
                breeds?.map((breed: Breed) => ({ value: breed.breed, label: breed.breedName })) ??
                []
              }
              value={petInfo.breed}
            />
          </div>
          <div css={infoCard}>
            <Text typo="subtitle3">미용 경험</Text>
            <section css={toggleButtonBox}>
              {PET_EXPERIENCE.map((item) => (
                <ChipRadio
                  key={item.label}
                  value={item.value}
                  label={item.label}
                  size="full"
                  isSelected={String(petInfo.groomingExperience) === item.value}
                />
              ))}
            </section>
          </div>
          <div css={infoCard}>
            <Text typo="subtitle3">입질</Text>
            <section css={toggleButtonBox}>
              {PET_EXPERIENCE.map((item) => (
                <ChipRadio
                  key={item.label}
                  value={item.value}
                  label={item.label}
                  size="full"
                  isSelected={String(petInfo.isBite) === item.value}
                />
              ))}
            </section>
          </div>
          <div css={infoCard}>
            <Text typo="subtitle3">싫어하는 부위</Text>
            <section css={selectChipButtonBox}>
              {PET_DISLIKEPART.map((item) => {
                const selectedParts = petInfo?.dislikeParts ?? [];
                const isSelected = selectedParts.includes(item.value);

                return (
                  <ChipToggleButton key={item.value} size="fixed" isSelected={isSelected}>
                    {item.label}
                  </ChipToggleButton>
                );
              })}
            </section>
          </div>
          <div css={infoCard}>
            <Text typo="subtitle3">특이사항</Text>

            <section css={chipButtonBox}>
              {PET_SIGNIFICANTTAG.map((item) => {
                const selectedParts = petInfo?.significantTags ?? [];
                const isSelected = selectedParts.includes(item.value);
                return (
                  <ChipToggleButton key={item.value} size="full" isSelected={isSelected}>
                    {item.label}
                  </ChipToggleButton>
                );
              })}
            </section>
            <TextField
              readOnly
              value={petInfo.significant ? petInfo.significant : '별도 특이사항 없음'}
            />
          </div>
        </section>
      </section>
      <div css={button}>
        <RoundButton
          service="partner"
          size="L"
          fullWidth
          onClick={() => {
            router.back();
          }}
        >
          견적서로 돌아가기
        </RoundButton>
      </div>
    </Layout>
  );
}

const title = css`
  padding: 24px 18px;
`;

const profileWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const section = css`
  display: flex;
  flex-direction: column;
  padding: 16px 18px;
  gap: 15px;
`;

const petProfile = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const profileImage = css`
  width: 86px;
  height: 86px;
  border: 4px solid ${theme.colors.green200};
  border-radius: 50%;

  background-color: ${theme.colors.gray200};

  transition: border 0.2s ease;
`;

const readOnlyLayer = css`
  position: absolute;
  z-index: ${theme.zIndex.ctaButton - 1};

  width: 100%;
  height: 100%;

  background-color: transparent;

  cursor: default;
  pointer-events: all;
`;

const defaultProfile = css`
  width: 86px;
  height: 86px;
  border: 4px solid ${theme.colors.gray200};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${theme.colors.gray200};
`;

const divider = css`
  width: 100%;
  height: 7px;
  margin: 16px 0;
  background: ${theme.colors.gray100};
`;

const inputWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 32px;
  position: relative;

  padding: 0 18px 104px;
`;
const formBox = css`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
const infoCard = css`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const toggleButtonBox = css`
  display: flex;
  gap: 13px;
`;

const selectChipButtonBox = css`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

const chipButtonBox = css`
  display: flex;
  gap: 7px;
`;

const button = css`
  display: flex;
  padding: 18px;
`;
