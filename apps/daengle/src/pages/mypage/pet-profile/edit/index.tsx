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
  useDialog,
  useToast,
} from '@daengle/design-system';
import {
  BIRTH_YEAR_OPTIONS,
  GROOMING_EXPERIENCE,
  IS_BITE,
  PET_DISLIKE_PARTS,
  PET_GENDER,
  PET_IS_NEUTERED,
  PET_SIGNIFICANT_TAGS,
  PET_WEIGHT,
} from '~/constants';
import {
  useDeleteUserPetMutation,
  useGetBreedListQuery,
  useGetUserPetInfoQuery,
  usePatchUserPetInfoMutation,
} from '~/queries';
import Image from 'next/image';
import { Controller, useForm } from 'react-hook-form';
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import { PetProfile } from '~/models/auth';
import { useS3 } from '@daengle/services/hooks';
import { DefaultImage } from '@daengle/design-system/icons';
import { PetProfileEditType } from '~/interfaces/auth';
import router from 'next/router';
import { ROUTES } from '~/constants/commons';
import { useValidatePetEdit } from '~/hooks';
import { ImageInputBox } from '~/components/mypage';
import { convertURLToFile } from '@daengle/services/utils';

export default function PetInfoEdit() {
  const [petInfos, setPetInfos] = useState<PetProfile[] | null>(null);
  const [selectedPetId, setSelectedPetId] = useState<number>(0);

  const { data: breeds } = useGetBreedListQuery();
  const { data: getUserPetInfo } = useGetUserPetInfoQuery();
  const { mutateAsync: patchUserPetInfo } = usePatchUserPetInfoMutation();
  const { mutateAsync: deleteUserPet } = useDeleteUserPetMutation();

  const validation = useValidatePetEdit();

  const { uploadToS3, deleteFromS3 } = useS3({ targetFolderPath: 'user/profile-images' });

  const { showToast } = useToast();
  const { open } = useDialog();

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

        const dislikeParts = defaultPet.dislikeParts?.map((part) => part.part);
        const significantTags = defaultPet.significantTags.map((tag) => tag.tag);

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

    const dislikeParts = selectedPet?.dislikeParts?.map((part) => part.part) ?? [];
    const significantTags = selectedPet?.significantTags.map((tag) => tag.tag);

    if (selectedPet) {
      setValue('name', selectedPet.name || '');
      setValue('birth', selectedPet.birth);
      setValue('gender', selectedPet.gender || '');
      setValue('breed', selectedPet.breed || '');
      setValue('isNeutered', selectedPet.isNeutered);
      setValue('weight', selectedPet.weight || '');
      setValue('groomingExperience', selectedPet.groomingExperience);
      setValue('isBite', selectedPet.isBite);
      setValue('dislikeParts', dislikeParts);
      setValue('significantTags', significantTags || []);
    }
  };

  const handleDeletePet = async () => {
    open({
      title: '반려견 정보 삭제',
      description: '정말로 반려견 정보를 삭제할까요?',
      primaryActionLabel: '삭제',
      onPrimaryAction: async () => {
        await deleteUserPet({
          petId: selectedPetId,
        });

        setPetInfos((prev) => prev?.filter((pet) => pet.id !== selectedPetId) || []);
        setSelectedPetId(0);

        router.push(ROUTES.MYPAGE);
        showToast({ title: '반려견 정보가 삭제되었어요.' });
      },
      secondaryActionLabel: '취소',
    });
  };

  const onSubmit = async (data: PetProfileEditType) => {
    let imageUrl = '';

    if (getUserPetInfo?.image) {
      const fileName = getUserPetInfo.image.split('/').pop();
      if (fileName) {
        await deleteFromS3(fileName);
      }
    }

    if (data.image) {
      const uploadedImages = await uploadToS3([data.image]);
      if (uploadedImages && uploadedImages.length > 0) {
        imageUrl = uploadedImages[0] ?? '';
      }
    } else {
      imageUrl = getUserPetInfo?.image || '';
    }

    const payload = {
      ...data,
      id: selectedPetId,
      image: imageUrl,
    };

    await patchUserPetInfo(payload);
    router.push(ROUTES.MYPAGE);
    showToast({ title: '반려견 정보가 수정되었어요.' });
  };

  return (
    <Layout isAppBarExist={true}>
      <AppBar
        onBackClick={router.back}
        onHomeClick={() => router.push(ROUTES.HOME)}
        backgroundColor={theme.colors.white}
      />
      <div css={titleBox}>
        <Text typo="title1">반려견 프로필 수정</Text>
      </div>
      <div css={petProfileWrapper}>
        <section css={section}>
          <div css={petTitle}>
            <Text tag="h2" typo="subtitle3" color="black">
              내 아이
            </Text>
          </div>
          <div css={petList}>
            {petInfos && petInfos.length > 0 ? (
              <div css={petList}>
                {petInfos.map((pet, index) => (
                  <div
                    key={pet.id}
                    css={[petProfile, petItemStyle(index, petInfos.length)]}
                    onClick={() => handlePetSelect(pet.id)}
                  >
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
              <div css={petTitle}>
                <Text typo="body3" color="gray400">
                  반려견 정보를 불러오지 못했습니다.
                </Text>
              </div>
            )}
          </div>
        </section>
      </div>
      <div css={line} />

      <form onSubmit={handleSubmit(onSubmit)}>
        <div css={profileImageWrapper}>
          <ImageInputBox
            onChange={(files) => setValue('image', files, { shouldValidate: true })}
            defaultValue={petInfos?.find((pet) => pet.id === selectedPetId)?.image || ''}
          />
        </div>
        <div css={inputWrapper}>
          <Input
            label="이름"
            placeholder="이름을 입력해 주세요"
            maxLength={10}
            required
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
                    {GROOMING_EXPERIENCE.map((item) => (
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
                    {IS_BITE.map((item) => (
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
                      {PET_DISLIKE_PARTS.map((item) => {
                        return (
                          <ChipToggleButton
                            key={item.value}
                            size="fixed"
                            isSelected={field.value?.includes(item.value)}
                            onClick={(e) => {
                              e.preventDefault();
                              const newParts = field.value?.includes(item.value)
                                ? field.value.filter((part: string) => part !== item.value)
                                : [...field.value, item.value];

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
                        {PET_SIGNIFICANT_TAGS.map((item) => {
                          return (
                            <ChipToggleButton
                              key={item.value}
                              size="full"
                              isSelected={field.value?.includes(item.value)}
                              onClick={(e) => {
                                e.preventDefault();
                                const newTags = field.value?.includes(item.value)
                                  ? field.value.filter((tag: string) => tag !== item.value)
                                  : [...field.value, item.value];

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

          <CTAButton
            type="submit"
            secondaryButtonLabel="삭제하기"
            onSecondaryButtonClick={handleDeletePet}
            disabled={false}
          >
            수정하기
          </CTAButton>
        </div>
      </form>
    </Layout>
  );
}

const petTitle = css`
  padding: 0 18px;
`;
const titleBox = css`
  margin: 18px 18px 40px;
`;
const petProfileWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const section = css`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const petList = css`
  display: flex;
  gap: 14px;
  overflow-x: scroll;
`;
const petProfile = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  cursor: pointer;
`;
const petItemStyle = (index: number, length: number) => css`
  ${index === 0 && 'padding: 0 0 0 18px;'}
  ${index === length - 1 && 'padding: 0 18px 0 0;'}
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
const line = css`
  width: 100%;
  margin: 32px 0;
  border: 3.5px solid ${theme.colors.gray100};
`;
const profileImageWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 0 0 32px;
`;
const inputWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 32px;
  position: relative;

  padding: 0 18px 146px;
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
