import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
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
import {
  BIRTH_YEAR_OPTIONS,
  PET_DISLIKE_PARTS,
  PET_GENDER,
  PET_IS_NEUTERED,
  PET_SIGNIFICANT_TAGS,
  PET_WEIGHT,
} from '~/constants';
import { ROUTES } from '~/constants/commons';
import { useGetBreedListQuery, useGetUserPetInfoQuery } from '~/queries';
import { DefaultImage } from '@daengle/design-system/icons';

export default function PetProfileDetail() {
  const router = useRouter();
  const [selectedPetId, setSelectedPetId] = useState<number>(Number(router.query.petId));

  const { data: breeds } = useGetBreedListQuery();
  const { data: getUserPetInfo } = useGetUserPetInfoQuery();

  const selectedPetInfo = getUserPetInfo?.petDetails?.filter(
    (pet) => pet.id === selectedPetId
  )?.[0];

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
              {getUserPetInfo?.petDetails.map((pet) => (
                <div key={pet.id} css={petProfile} onClick={() => setSelectedPetId(pet.id)}>
                  {pet.image ? (
                    <Image
                      src={pet.image}
                      alt="반려견 프로필"
                      width={86}
                      height={86}
                      css={profileImage({ isSelected: selectedPetId === pet.id })}
                    />
                  ) : (
                    <DefaultImage css={profileImage({ isSelected: selectedPetId === pet.id })} />
                  )}
                  <Text typo="body1" color={selectedPetId === pet.id ? 'blue200' : 'gray400'}>
                    {pet.name}
                  </Text>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      <div css={line} />

      <section css={inputWrapper}>
        <div css={readOnlyLayer} />
        <Input label="이름" readOnly value={selectedPetInfo?.name} />

        <section css={formBox}>
          <Text typo="subtitle3" color="black">
            탄생년도
          </Text>
          <Select
            options={BIRTH_YEAR_OPTIONS}
            placeholder="탄생년도"
            value={selectedPetInfo?.birth}
          />
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
                isSelected={selectedPetInfo?.gender === gender.value}
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
                isSelected={String(selectedPetInfo?.isNeutered) === item.value}
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
            value={selectedPetInfo?.breed}
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
                  isSelected={selectedPetInfo?.weight === item.value}
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
                isSelected={String(selectedPetInfo?.groomingExperience) === item.value}
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
                isSelected={String(selectedPetInfo?.isBite) === item.value}
              />
            ))}
          </section>
        </section>
        <section css={formBox}>
          <Text typo="subtitle3">싫어하는 부위</Text>
          <section css={selectChipButtonBox}>
            {PET_DISLIKE_PARTS.map((item) => {
              const selectedParts = selectedPetInfo?.dislikeParts;
              const isSelected = selectedParts?.map((part) => part.part).includes(item.value);

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
                  isSelected={selectedPetInfo?.significantTags.some(
                    (tag: { tag: string }) => tag.tag === item.value
                  )}
                >
                  {item.label}
                </ChipToggleButton>
              ))}
            </section>

            {selectedPetInfo?.significant && (
              <textarea
                css={detailInput}
                placeholder="특이사항이 있다면 입력해 주세요"
                readOnly
                value={selectedPetInfo?.significant}
              />
            )}
          </section>
        </section>

        <CTAButton onClick={() => router.push(ROUTES.MYPAGE_PET_PROFILE_EDIT)}>
          반려견 프로필 수정
        </CTAButton>
      </section>
    </Layout>
  );
}

const wrapper = css`
  position: relative;

  padding: 18px 18px 0;
`;

const petList = css`
  display: flex;
  gap: 14px;
  overflow-x: scroll;
`;

const section = css`
  display: flex;
  flex-direction: column;
  gap: 15px;
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

const readOnlyLayer = css`
  position: absolute;
  top: 0;
  left: 0;
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
