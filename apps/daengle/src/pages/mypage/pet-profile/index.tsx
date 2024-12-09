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
import { PetProfileEditType } from '~/pages/mypage/interfaces';
import { Controller, useForm } from 'react-hook-form';
import useValidatePetEdit from '~/pages/mypage/hooks/use-validate-pet-form';
import {
  BIRTH_YEAR_OPTIONS,
  PET_DISLIKEPART,
  PET_GENDER,
  PET_IS_NEUTERED,
  PET_SIGNIFICANTTAG,
  PET_WEIGHT,
} from '~/pages/mypage/constants';
import { useGetBreedListQuery, useGetUserPetInfoQuery } from '~/queries';
import { useEffect, useState } from 'react';
import { DefaultImage } from '@daengle/design-system/icons';
import { PetInfos } from '~/models/auth';

export default function PetProfileDetail() {
  const [petInfos, setPetInfos] = useState<PetInfos[] | null>(null);
  const [selectedPetId, setSelectedPetId] = useState<number>(0);
  const { data: breeds } = useGetBreedListQuery();
  const { data: getUserPetInfo, isLoading, error } = useGetUserPetInfoQuery();

  const validation = useValidatePetEdit();

  const {
    register,
    watch,
    setValue,
    control,
    formState: { errors, isValid },
  } = useForm<PetProfileEditType>({
    mode: 'onChange',
    defaultValues: {
      name: '',
      birth: undefined,
      gender: '',
      breed: '',
      isNeutered: false,
      weight: undefined,
      groomingExperience: false,
      isBite: false,
      dislikeParts: [],
      significantTags: [],
      significant: '',
    },
  });

  const handlePetSelect = (petId: number) => {
    if (petInfos) {
      if (selectedPetId === petId) setSelectedPetId(0);
      else setSelectedPetId(petId);
    }
  };
  useEffect(() => {
    if (getUserPetInfo && getUserPetInfo.petDetails) {
      setPetInfos(getUserPetInfo.petDetails); // petInfos에 데이터 설정
    }
  }, [getUserPetInfo]);

  // TODO: 정보 반영 후 삭제 예정
  useEffect(() => {
    if (getUserPetInfo) {
      console.log('API 응답 데이터:', getUserPetInfo);
    } else {
      console.log('API 응답 없음');
    }
  }, [getUserPetInfo]);

  // 선택된 petId에 따라 데이터 필터링 및 필드 초기화
  useEffect(() => {
    if (getUserPetInfo && selectedPetId !== null) {
      const selectedPet = getUserPetInfo.petDetails.find((pet) => pet.id === selectedPetId);
      if (selectedPet) {
        setValue('name', selectedPet.name || '');
        setValue('birth', selectedPet.birth);
        setValue('gender', selectedPet.gender || '');
        setValue('breed', selectedPet.breed || '');
        setValue('isNeutered', selectedPet.isNeutered || false);
        setValue('weight', selectedPet.weight || undefined);
        setValue('groomingExperience', selectedPet.groomingExperience || false);
        setValue('isBite', selectedPet.isBite || false);
        setValue('dislikeParts', selectedPet.dislikeParts || []);
        setValue('significantTags', selectedPet.significantTags || []);
        setValue('significant', selectedPet.significant || '');
      }
    }
  }, [getUserPetInfo, selectedPetId, setValue]);

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
      <AppBar />
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
        <Input
          label="이름"
          maxLength={10}
          {...register('name', { ...validation.name })}
          errorMessage={errors.name?.message}
        />
        <section css={formBox}>
          <Text typo="subtitle3" color="black">
            탄생년도
          </Text>
          <Select
            options={BIRTH_YEAR_OPTIONS}
            placeholder="탄생년도"
            value={watch('birth')}
            {...register('birth', { ...validation.birth })}
            onChange={(e) => setValue('birth', Number(e.target.value), { shouldValidate: true })}
          />
        </section>
        <section css={formBox}>
          <Text typo="subtitle3">성별</Text>
          <section css={toggleButtonBox}>
            <Controller
              name="gender"
              control={control}
              rules={validation.gender}
              render={({ field }) => (
                <>
                  {PET_GENDER.map((gender) => (
                    <ChipRadio
                      key={gender.value}
                      name={field.name}
                      value={gender.value}
                      label={gender.label}
                      size="full"
                      isSelected={field.value === gender.value}
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                  ))}
                </>
              )}
            />
          </section>
        </section>
        <section css={formBox}>
          <Text typo="subtitle3">중성화</Text>
          <section css={toggleButtonBox}>
            <Controller
              name="isNeutered"
              control={control}
              rules={validation.isNeutered}
              render={({ field }) => (
                <>
                  {PET_IS_NEUTERED.map((item) => (
                    <ChipRadio
                      key={item.value}
                      name={field.name}
                      value={item.value}
                      label={item.label}
                      size="full"
                      isSelected={field.value === item.value}
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                  ))}
                </>
              )}
            />
          </section>
        </section>
        <section css={formBox}>
          <Text typo="subtitle3" color="black">
            품종
          </Text>
          <Select
            options={breeds?.map((breed) => ({ value: breed.breed, label: breed.breedName })) ?? []}
            placeholder="품종"
            {...register('breed', { ...validation.breed })}
            value={watch('breed')?.toString()}
          />
        </section>
        <section css={formBox}>
          <Text typo="subtitle3">몸무게</Text>
          <section css={chipToggleButtonBox}>
            <Controller
              name="weight"
              control={control}
              rules={{ required: '몸무게를 선택해 주세요' }}
              render={({ field }) => (
                <>
                  {PET_WEIGHT.map((item) => (
                    <div css={weightWrapper} key={item.label}>
                      <ChipRadio
                        name={field.name}
                        value={item.value}
                        label={item.label}
                        size="full"
                        isSelected={field.value === item.value}
                        onChange={(e) => field.onChange(e.target.value)}
                      />
                      <Text typo="body12" color="gray200">
                        {item.description}
                      </Text>
                    </div>
                  ))}
                </>
              )}
            />
          </section>
        </section>
        <section css={formBox}>
          <Text typo="subtitle3">미용 경험</Text>
          <section css={toggleButtonBox}>
            <Controller
              name="groomingExperience"
              control={control}
              rules={validation.groomingExperience}
              render={({ field }) => (
                <>
                  {PET_IS_NEUTERED.map((item) => (
                    <ChipRadio
                      name={field.name}
                      value={item.value}
                      label={item.label}
                      size="full"
                      isSelected={field.value === item.value}
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                  ))}
                </>
              )}
            />
          </section>
        </section>
        <section css={formBox}>
          <Text typo="subtitle3">입질</Text>
          <section css={toggleButtonBox}>
            <Controller
              name="isBite"
              control={control}
              rules={validation.isBite}
              render={({ field }) => (
                <>
                  {PET_IS_NEUTERED.map((item) => (
                    <ChipRadio
                      name={field.name}
                      value={item.value}
                      label={item.label}
                      size="full"
                      isSelected={field.value === item.value}
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                  ))}
                </>
              )}
            />
          </section>
        </section>
        <section css={formBox}>
          <Text typo="subtitle3">싫어하는 부위</Text>
          <section css={selectChipButtonBox}>
            <>
              <Controller
                name="dislikeParts"
                control={control}
                render={({ field }) => (
                  <>
                    {PET_DISLIKEPART.map((item) => (
                      <ChipToggleButton
                        key={item.value}
                        name={field.name}
                        value={item.value}
                        size="fixed"
                        isSelected={field.value.includes(item.value)}
                        onChange={() => {
                          const newValue = field.value.includes(item.value)
                            ? field.value.filter((v) => v !== item.value)
                            : [...field.value, item.value];
                          field.onChange(newValue);
                        }}
                      >
                        {item.label}
                      </ChipToggleButton>
                    ))}
                  </>
                )}
              />
            </>
          </section>
        </section>
        <section css={formBox}>
          <section css={detailformBox}>
            <Text typo="subtitle3">특이사항</Text>
            <section css={chipButtonBox}>
              <>
                <Controller
                  name="significantTags"
                  control={control}
                  rules={{ required: '특이사항을 선택해 주세요' }}
                  defaultValue={[]}
                  render={({ field }) => (
                    <>
                      {PET_SIGNIFICANTTAG.map((item) => (
                        <ChipToggleButton
                          key={item.value}
                          size="full"
                          isSelected={field.value.some(
                            (selectedTag) => selectedTag.tag === item.tag
                          )} // tag 값 비교하여 선택 상태 설정
                          onClick={() => {
                            const exists = field.value.some(
                              (selectedTag) => selectedTag.tag === item.tag
                            );
                            const newValue = exists
                              ? field.value.filter((selectedTag) => selectedTag.tag !== item.tag) // 선택 해제
                              : [...field.value, { tag: item.tag, tagName: item.tagName }]; // 선택 추가
                            field.onChange(newValue);
                          }}
                        >
                          {item.label}
                        </ChipToggleButton>
                      ))}
                    </>
                  )}
                />
              </>
            </section>
            <textarea
              css={detailInput}
              placeholder="특이사항이 있다면 입력해주세요"
              {...register('significant')}
            />
          </section>
        </section>
        <CTAButton disabled={isValid}>반려견 프로필 수정</CTAButton>
      </section>
    </Layout>
  );
}
