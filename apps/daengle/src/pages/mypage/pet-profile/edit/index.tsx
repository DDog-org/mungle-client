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
  profileImageWrapper,
  profileImageBox,
  profileEditButtonBox,
  inputWrapper,
  formBox,
  toggleButtonBox,
  chipToggleButtonBox,
  selectChipButtonBox,
  detailformBox,
  chipButtonBox,
  detailInput,
  weightWrapper,
  wrapper,
  section,
  petList,
  petProfile,
  petName,
  profileImage,
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
import {
  useGetBreedListQuery,
  useGetUserPetInfoQuery,
  usePatchUserPetInfoMutation,
} from '~/queries';
import { useEffect, useState } from 'react';
import { PetInfos } from '~/models';
import { DefaultImage } from '@daengle/design-system/icons';
import { useS3 } from '@daengle/services/hooks';
import { ImageInputBox } from '~/components/mypage/user-profile/imageInput';

export default function PetInfoEdit() {
  const [petInfos, setPetInfos] = useState<PetInfos[] | null>(null);
  const [selectedPetId, setSelectedPetId] = useState<number>(0);

  const { data: getUserPetInfo } = useGetUserPetInfoQuery();
  const { data: breeds } = useGetBreedListQuery();
  const { mutateAsync: patchUserPetInfo } = usePatchUserPetInfoMutation();

  const validation = useValidatePetEdit();

  const { uploadToS3, deleteFromS3 } = useS3({ targetFolderPath: 'user/profile-images' });

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    control,
    formState: { errors },
  } = useForm<PetProfileEditType>({
    mode: 'onChange',
    defaultValues: {
      image: null,
      significantTags: [],
      dislikeParts: [],
    },
  });

  useEffect(() => {
    if (getUserPetInfo && getUserPetInfo.petDetails) {
      const defaultPet = getUserPetInfo.petDetails[0];

      setPetInfos(getUserPetInfo.petDetails);

      if (defaultPet) {
        setSelectedPetId(defaultPet.id);

        const dislikeParts = defaultPet.dislikeParts.map((part) => part.part); // `part` 값만 추출
        const significantTags = defaultPet.significantTags.map((tag) => tag.tag); // `tag` 값만 추출

        setValue('name', defaultPet.name || '');
        setValue('birth', defaultPet.birth);
        setValue('gender', defaultPet.gender || '');
        setValue('breed', defaultPet.breed || '');
        setValue('isNeutered', defaultPet.isNeutered);
        setValue('weight', defaultPet.weight || '');
        setValue('groomingExperience', defaultPet.groomingExperience);
        setValue('isBite', defaultPet.isBite);
        setValue('dislikeParts', dislikeParts || []);
        setValue('significantTags', significantTags || []);
      }
    }
  }, [getUserPetInfo, setValue]);

  const handlePetSelect = (petId: number) => {
    setSelectedPetId(petId);

    const selectedPet = petInfos?.find((pet) => pet.id === petId);

    const dislikeParts = selectedPet?.dislikeParts.map((part) => part.part); // `part` 값만 추출
    const significantTags = selectedPet?.significantTags.map((tag) => tag.tag); // `tag` 값만 추출

    if (selectedPet) {
      setValue('name', selectedPet.name || '');
      setValue('birth', selectedPet.birth);
      setValue('gender', selectedPet.gender || '');
      setValue('breed', selectedPet.breed || '');
      setValue('isNeutered', selectedPet.isNeutered);
      setValue('weight', selectedPet.weight || '');
      setValue('groomingExperience', selectedPet.groomingExperience);
      setValue('isBite', selectedPet.isBite);
      setValue('dislikeParts', dislikeParts || []);
      setValue('significantTags', significantTags || []);
    }
  };

  const onSubmit = async (data: PetProfileEditType) => {
    let imageString = '';

    // 기존 이미지 삭제
    if (getUserPetInfo?.image) {
      const fileName = getUserPetInfo.image.split('/').pop(); // S3 경로에서 파일 이름 추출
      if (fileName) {
        await deleteFromS3(fileName);
      }
    }

    // 새 이미지 업로드
    if (data.image) {
      const uploadedImages = await uploadToS3([data.image]);
      if (uploadedImages && uploadedImages.length > 0) {
        imageString = uploadedImages[0] ?? '';
      }
    } else {
      imageString = getUserPetInfo?.image || '';
    }

    // 사용자 정보 업데이트
    if (imageString != undefined) {
      patchUserPetInfo({ ...data, image: imageString });
    }

    const payload = {
      ...data,
      id: selectedPetId,
      image: imageString,
    };

    console.log('보낼 데이터:', payload);
    try {
      const response = await patchUserPetInfo(payload);
      console.log('API 응답:', response);
      alert('프로필이 성공적으로 저장되었습니다!');
    } catch (error) {
      console.error('API 호출 중 에러:', error);
      alert('프로필 저장 중 에러가 발생했습니다. 다시 시도해 주세요.');
    }
  };

  return (
    <Layout isAppBarExist={true}>
      <AppBar />
      <div css={wrapper}>
        <div css={titleBox}>
          <Text typo="title1">반려견 프로필 수정</Text>
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

      <form onSubmit={handleSubmit(onSubmit)}>
        <div css={profileImageWrapper}>
          <ImageInputBox
            onChange={(files) => setValue('image', files, { shouldValidate: true })}
            defaultValue={getUserPetInfo?.image || ''}
          />
        </div>
        <div css={inputWrapper}>
          <Input
            label="이름"
            placeholder="이름을 입력해 주세요"
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
                        onChange={() => field.onChange(gender.value)}
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
                render={({ field }) => (
                  <>
                    {PET_IS_NEUTERED.map((item) => (
                      <ChipRadio
                        key={item.label}
                        name={field.name}
                        value={item.value}
                        label={item.label}
                        size="full"
                        isSelected={String(field.value) === item.value}
                        onChange={() => field.onChange(item.value)}
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
              options={
                breeds?.map((breed) => ({ value: breed.breed, label: breed.breedName })) ?? []
              }
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
                render={({ field }) => (
                  <>
                    {PET_WEIGHT.map((item) => (
                      <div css={weightWrapper} key={item.label}>
                        <ChipRadio
                          key={item.value}
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
                render={({ field }) => (
                  <>
                    {PET_IS_NEUTERED.map((item) => (
                      <ChipRadio
                        key={item.label}
                        name={field.name}
                        value={item.value}
                        label={item.label}
                        size="full"
                        isSelected={String(field.value) === item.value}
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
                render={({ field }) => (
                  <>
                    {PET_IS_NEUTERED.map((item) => (
                      <ChipRadio
                        key={item.label}
                        name={field.name}
                        value={item.value}
                        label={item.label}
                        size="full"
                        isSelected={String(field.value) === item.value}
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
                      {PET_DISLIKEPART.map((item) => {
                        return (
                          <ChipToggleButton
                            key={item.value}
                            size="fixed"
                            isSelected={field.value?.includes(item.value)}
                            onClick={(e) => {
                              e.preventDefault();
                              const newParts = field.value?.includes(item.value)
                                ? field.value.filter((part) => part !== item.value) // 이미 선택된 경우 제거
                                : [...field.value, item.value]; // 선택되지 않은 경우 추가

                              field.onChange(newParts);
                            }}
                          >
                            {item.label}
                          </ChipToggleButton>
                        );
                      })}
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
                    render={({ field }) => (
                      <>
                        {PET_SIGNIFICANTTAG.map((item) => {
                          return (
                            <ChipToggleButton
                              key={item.value}
                              size="full"
                              isSelected={field.value?.includes(item.value)}
                              onClick={(e) => {
                                e.preventDefault();
                                const newTags = field.value?.includes(item.value)
                                  ? field.value.filter((tag) => tag !== item.value) // 이미 선택된 경우 제거
                                  : [...field.value, item.value]; // 선택되지 않은 경우 추가

                                field.onChange(newTags);
                              }}
                            >
                              {item.label}
                            </ChipToggleButton>
                          );
                        })}
                      </>
                    )}
                  />
                </>
              </section>
              <Controller
                name="significant"
                control={control}
                render={({ field }) => (
                  <>
                    <textarea
                      css={detailInput}
                      placeholder="특이사항이 있다면 입력해주세요"
                      value={field.value}
                      onChange={field.onChange}
                    />
                  </>
                )}
              />
            </section>
          </section>
          <CTAButton type="submit" secondaryButtonLabel="삭제하기" disabled={false}>
            수정하기
          </CTAButton>
        </div>
      </form>
    </Layout>
  );
}
