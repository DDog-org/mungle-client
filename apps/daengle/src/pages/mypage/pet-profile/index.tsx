import {
  AppBar,
  ChipRadio,
  ChipToggleButton,
  CTAButton,
  Input,
  Layout,
  Select,
  Text,
  theme,
} from '@daengle/design-system';
import { css } from '@emotion/react';
import {
  BIRTH_YEAR_OPTIONS,
  PET_DISLIKE_PARTS,
  PET_GENDER,
  PET_IS_NEUTERED,
  PET_SIGNIFICANT_TAGS,
  PET_WEIGHT,
} from '~/constants';
import { useGetBreedListQuery, useGetUserPetInfoQuery } from '~/queries';
import { useEffect, useState } from 'react';
import { PetProfile } from '~/models/auth';
import router from 'next/router';
import { ROUTES } from '~/constants/commons';
import { ProfileSelector } from '~/components/estimate';

export default function PetProfileDetail() {
  const [petInfos, setPetInfos] = useState<PetProfile[] | null>(null);
  const [selectedPetId, setSelectedPetId] = useState<number>(0);
  const { data: breeds } = useGetBreedListQuery();
  const { data: getUserPetInfo, isLoading, error } = useGetUserPetInfoQuery();

  const selectedPet = petInfos?.find((pet) => pet.id === selectedPetId);

  const handlePetSelect = (petId: number) => {
    setSelectedPetId(petId);
  };

  const handleGoToEdit = () => {
    router.push(ROUTES.MYPAGE_PET_PROFILE_EDIT);
  };
  useEffect(() => {
    if (getUserPetInfo && getUserPetInfo.petDetails) {
      setPetInfos(getUserPetInfo.petDetails);
      setSelectedPetId(getUserPetInfo.petDetails[0]?.id || 0);
    }
  }, [getUserPetInfo]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!getUserPetInfo) {
    return <div>No pet information available</div>;
  }

  if (error) {
    return <div>Error loading pet information</div>;
  }

  return (
    <Layout isAppBarExist={true}>
      <AppBar
        onBackClick={router.back}
        onHomeClick={() => router.push(ROUTES.HOME)}
        backgroundColor={theme.colors.white}
      />
      <div css={wrapper}>
        <div css={titleBox}>
          <Text typo="title1">상세보기</Text>
        </div>
        <div css={petProfileWrapper}>
          <section css={section}>
            <Text tag="h2" typo="subtitle3" color="black">
              내 아이
            </Text>
            <div css={petList}>
              {petInfos && petInfos?.length > 0 && (
                <ProfileSelector
                  petInfos={petInfos.map((item) => ({
                    petId: item.id,
                    name: item.name,
                    imageUrl: item.image,
                  }))}
                  selectedPetId={selectedPetId}
                  onSelectPet={handlePetSelect}
                />
              )}
            </div>
          </section>
        </div>
      </div>
      <div css={line} />
      <section css={inputWrapper}>
        <div css={readOnlyLayer} />
        <Input label="이름" readOnly value={selectedPet?.name} />
        <section css={formBox}>
          <Text typo="subtitle3" color="black">
            탄생년도
          </Text>
          <Select options={BIRTH_YEAR_OPTIONS} placeholder="탄생년도" value={selectedPet?.birth} />
        </section>
        <section css={formBox}>
          <Text typo="subtitle3">성별</Text>
          <section css={toggleButtonBox}>
            {PET_GENDER.map((gender) => (
              <ChipRadio
                key={gender.value}
                value={gender.value}
                label={gender.label}
                size="full"
                isSelected={selectedPet?.gender === gender.value}
              />
            ))}
          </section>
        </section>
        <section css={formBox}>
          <Text typo="subtitle3">중성화</Text>
          <section css={toggleButtonBox}>
            {PET_IS_NEUTERED.map((item) => (
              <ChipRadio
                key={item.label}
                value={item.value}
                label={item.label}
                size="full"
                isSelected={String(selectedPet?.isNeutered) === item.value}
              />
            ))}
          </section>
        </section>
        <section css={formBox}>
          <Text typo="subtitle3" color="black">
            품종
          </Text>
          <Select
            options={breeds?.map((breed) => ({ value: breed.breed, label: breed.breedName })) ?? []}
            placeholder="품종"
            value={selectedPet?.breed}
          />
        </section>
        <section css={formBox}>
          <Text typo="subtitle3">몸무게</Text>
          <section css={chipToggleButtonBox}>
            {PET_WEIGHT.map((item) => (
              <div css={weightWrapper} key={item.label}>
                <ChipRadio
                  key={item.label}
                  value={item.value}
                  label={item.label}
                  size="full"
                  isSelected={selectedPet?.weight === item.value}
                />
                <Text typo="body12" color="gray200">
                  {item.description}
                </Text>
              </div>
            ))}
          </section>
        </section>
        <section css={formBox}>
          <Text typo="subtitle3">미용 경험</Text>
          <section css={toggleButtonBox}>
            {PET_IS_NEUTERED.map((item) => (
              <ChipRadio
                key={item.label}
                value={item.value}
                label={item.label}
                size="full"
                isSelected={String(selectedPet?.groomingExperience) === item.value}
              />
            ))}
          </section>
        </section>
        <section css={formBox}>
          <Text typo="subtitle3">입질</Text>
          <section css={toggleButtonBox}>
            {PET_IS_NEUTERED.map((item) => (
              <ChipRadio
                key={item.label}
                value={item.value}
                label={item.label}
                size="full"
                isSelected={String(selectedPet?.isBite) === item.value}
              />
            ))}
          </section>
        </section>
        <section css={formBox}>
          <Text typo="subtitle3">싫어하는 부위</Text>
          <section css={selectChipButtonBox}>
            {PET_DISLIKE_PARTS.map((item) => {
              const selectedParts = selectedPet?.dislikeParts;
              const isSelected = selectedParts?.includes(item.value);

              return (
                <ChipToggleButton key={item.value} size="fixed" isSelected={isSelected}>
                  {item.label}
                </ChipToggleButton>
              );
            })}
          </section>
        </section>
        <section css={formBox}>
          <section css={detailformBox}>
            <Text typo="subtitle3">특이사항</Text>
            <section css={chipButtonBox}>
              {PET_SIGNIFICANT_TAGS.map((item) => (
                <ChipToggleButton
                  key={item.value}
                  size="full"
                  isSelected={selectedPet?.significantTags.some(
                    (tag: { tag: string }) => tag.tag === item.value
                  )}
                >
                  {item.label}
                </ChipToggleButton>
              ))}
            </section>
            <textarea
              css={detailInput}
              placeholder="특이사항이 있다면 입력해주세요"
              readOnly
              value={selectedPet?.significant}
            />
          </section>
        </section>
        <CTAButton onClick={handleGoToEdit}>반려견 프로필 수정</CTAButton>
      </section>
    </Layout>
  );
}
const wrapper = css`
  position: relative;

  padding: 18px 18px 0;
`;
// pet profile css
const section = css`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const petList = css`
  display: flex;
  gap: 14px;
`;
const petProfile = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  cursor: pointer;
`;
const profileImage = ({ isSelected }: { isSelected: boolean }) => css`
  width: 86px;
  height: 86px;
  border: 4px solid ${isSelected ? theme.colors.blue200 : theme.colors.gray200};
  border-radius: 50px;

  background-color: ${theme.colors.gray200};

  transition: border 0.2s ease;
`;
const petName = css`
  transition: 0.2s ease;
`;
const readOnlyLayer = css`
  position: absolute;
  z-index: ${theme.zIndex.ctaButton - 1};

  width: 100%;
  height: 100%;

  background-color: transparent;

  cursor: not-allowed;
  pointer-events: all;
`;
const titleBox = css`
  margin: 0 0 40px;
`;
const petProfileWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const line = css`
  width: 100%;
  height: 7px;
  margin: 32px 0;
  border: 3.5px solid ${theme.colors.gray100};
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
  gap: 15px;
`;
const toggleButtonBox = css`
  display: flex;
  gap: 13px;
`;
const chipToggleButtonBox = css`
  display: flex;
  gap: 10px;
`;
const selectChipButtonBox = css`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;
const detailformBox = css`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const chipButtonBox = css`
  display: flex;
  gap: 7px;
`;
const detailInput = css`
  height: 136px;
  padding: 14px;
  border-radius: 10px;

  background-color: ${theme.colors.gray100};

  ::placeholder {
    color: ${theme.colors.gray200};
  }
`;
const weightWrapper = css`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  gap: 3px;

  text-align: center;
`;
