import {
  AppBar,
  ChipRadio,
  ChipToggleButton,
  CTAButton,
  Input,
  Layout,
  Select,
  Text,
} from '@daengle/design-system';
import {
  titleBox,
  petProfileWrapper,
  line,
  inputWrapper,
  formBox,
  toggleButtonBox,
  chipToggleButtonBox,
  selectChipButtonBox,
  detailformBox,
  chipButtonBox,
  detailInput,
  weightWrapper,
  readOnlyLayer,
  wrapper,
  section,
  petList,
  petProfile,
  profileImage,
  petName,
} from './index.styles';
import Image from 'next/image';
import {
  BIRTH_YEAR_OPTIONS,
  PET_DISLIKEPART,
  PET_GENDER,
  PET_IS_NEUTERED,
  PET_SIGNIFICANTTAG,
  PET_WEIGHT,
} from '~/constants/mypage';
import { useGetBreedListQuery, useGetUserPetInfoQuery } from '~/queries';
import { useEffect, useState } from 'react';
import { DefaultImage } from '@daengle/design-system/icons';
import { PetInfos } from '~/models/auth';
import router from 'next/router';
import { ROUTES } from '~/constants/commons';

export default function PetProfileDetail() {
  const [petInfos, setPetInfos] = useState<PetInfos[] | null>(null);
  const [selectedPetId, setSelectedPetId] = useState<number>(0);
  const { data: breeds } = useGetBreedListQuery();
  const { data: getUserPetInfo, isLoading, error } = useGetUserPetInfoQuery();

  const selectedPet = petInfos?.find((pet) => pet.id === selectedPetId);

  const handlePetSelect = (petId: number) => {
    setSelectedPetId(petId);
  };

  const handleGoToEdit = () => {
    router.push(ROUTES.MAYPAGE_PET_PROFILE_EDIT);
  };
  useEffect(() => {
    if (getUserPetInfo && getUserPetInfo.petDetails) {
      setPetInfos(getUserPetInfo.petDetails);
      setSelectedPetId(getUserPetInfo.petDetails[0]?.id || 0); // 기본값으로 첫 번째 반려견 선택
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
      <AppBar onBackClick={router.back} />
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
              {petInfos && petInfos.length > 0 ? (
                <div css={petList}>
                  {petInfos.map((pet) => (
                    <div key={pet.id} css={petProfile} onClick={() => handlePetSelect(pet.id)}>
                      {pet.image ? (
                        <Image
                          src={pet.image}
                          alt="반려견 프로필"
                          width={86}
                          height={86}
                          css={profileImage({ isSelected: selectedPetId === pet.id })}
                        />
                      ) : (
                        <DefaultImage
                          css={profileImage({ isSelected: selectedPetId === pet.id })}
                        />
                      )}
                      <Text
                        typo="body1"
                        color={selectedPetId === pet.id ? 'blue200' : 'gray400'}
                        css={petName}
                      >
                        {pet.name}
                      </Text>
                    </div>
                  ))}
                </div>
              ) : (
                <Text typo="body3" color="gray400">
                  반려견 정보를 불러오지 못했습니다.
                </Text>
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
                isSelected={selectedPet?.isNeutered === item.value}
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
                isSelected={selectedPet?.groomingExperience === item.value}
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
                isSelected={selectedPet?.isBite === item.value}
              />
            ))}
          </section>
        </section>
        <section css={formBox}>
          <Text typo="subtitle3">싫어하는 부위</Text>
          <section css={selectChipButtonBox}>
            {PET_DISLIKEPART.map((item) => {
              const selectedParts = selectedPet?.dislikeParts?.map((partItem) => partItem.part);
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
              {PET_SIGNIFICANTTAG.map((item) => (
                <ChipToggleButton
                  key={item.value}
                  size="full"
                  isSelected={selectedPet?.significantTags.some((tag) => tag.tag === item.value)}
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
