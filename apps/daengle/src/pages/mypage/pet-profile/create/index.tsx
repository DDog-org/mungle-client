import {
  AppBar,
  ChipRadio,
  CTAButton,
  Input,
  Layout,
  Select,
  Text,
  theme,
} from '@daengle/design-system';
import { css } from '@emotion/react';
import { DislikeParts, PetProfileCreateFormType, SignificantTags } from '~/interfaces/auth';
import { Controller, useForm } from 'react-hook-form';
import useValidatePetEdit from '~/hooks/mypage/use-validate-pet-form';
import {
  BIRTH_YEAR_OPTIONS,
  PET_DISLIKEPART,
  PET_GENDER,
  PET_IS_NEUTERED,
  PET_SIGNIFICANTTAG,
  PET_WEIGHT,
} from '~/constants/mypage';
import { useGetBreedListQuery, usePostUserPetMutation } from '~/queries';
import { useState } from 'react';
import { ImageInputBox } from '~/components/mypage/pet-profile/image-input';
import { ChipToggleButton } from '~/components/mypage/pet-profile/chip-toggle-button';
import { useS3 } from '@daengle/services/hooks';
import { ROUTES } from '~/constants/commons';
import router from 'next/router';

export default function PetProfileCreate() {
  const { data: breeds } = useGetBreedListQuery();
  const { mutateAsync: postUserPet } = usePostUserPetMutation();
  const validation = useValidatePetEdit();
  const { uploadToS3 } = useS3({ targetFolderPath: 'user/profile-images' });

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    control,
    formState: { errors, isValid },
  } = useForm<PetProfileCreateFormType>({
    mode: 'onChange',
    defaultValues: {
      image: null,
      significantTags: [],
      significant: '',
    },
  });

  const [selectedParts, setSelectedParts] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const onSubmit = async (data: PetProfileCreateFormType) => {
    let imageString = '';

    if (data.image) {
      const uploadedImages = await uploadToS3([data.image]);
      if (uploadedImages && uploadedImages.length > 0) {
        imageString = uploadedImages[0] ?? '';
      }
    }
    if (imageString != undefined) {
      postUserPet({ ...data, image: imageString });
    }

    const body = {
      image: imageString,
      name: watch('name'),
      birth: Number(watch('birth')),
      gender: watch('gender'),
      breed: watch('breed'),
      isNeutered: watch('isNeutered'),
      weight: watch('weight'),
      groomingExperience: watch('groomingExperience'),
      isBite: watch('isBite'),
      dislikeParts: watch('dislikeParts'),
      significantTags: watch('significantTags'),
      significant: watch('significant'),
    };

    await postUserPet(body);
    router.push(ROUTES.MYPAGE);
  };

  return (
    <Layout isAppBarExist={true}>
      <AppBar
        onBackClick={router.back}
        onHomeClick={() => router.push(ROUTES.HOME)}
        backgroundColor={theme.colors.white}
      />
      <div css={wrapper}>
        <Text typo="title1">반려견 프로필 등록하기</Text>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div css={profileImageWrapper}>
            <ImageInputBox
              onChange={(files) => setValue('image', files, { shouldValidate: true })}
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
                onChange={(e) =>
                  setValue('birth', Number(e.target.value), { shouldValidate: true })
                }
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
                  rules={validation.isNeutered}
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
                  rules={{ required: '몸무게를 선택해 주세요' }}
                  render={({ field }) => (
                    <>
                      {PET_WEIGHT.map((item) => (
                        <div css={weightWrapper} key={item.label}>
                          <ChipRadio
                            key={item.label}
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
              <Text typo="subtitle3">싫어하는 부위</Text>
              <section css={selectChipButtonBox}>
                <>
                  <Controller
                    name="dislikeParts"
                    control={control}
                    rules={validation.dislikeParts}
                    render={({ field }) => (
                      <>
                        {PET_DISLIKEPART.map((item) => {
                          return (
                            <ChipToggleButton
                              key={item.value}
                              size="fixed"
                              isSelected={selectedParts.includes(item.value)}
                              itemValue={item.value}
                              setSelectedParts={() => {
                                const newParts =
                                  field.value?.filter(
                                    (t: DislikeParts) => t.partName !== item.value
                                  ).length > 0
                                    ? field.value.filter(
                                        (t: DislikeParts) => t.partName !== item.value
                                      )
                                    : [...(field.value || []), item.value];

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
                                isSelected={selectedTags.includes(item.value)}
                                itemValue={item.value}
                                setSelectedTags={() => {
                                  const newTags =
                                    field.value?.filter(
                                      (t: SignificantTags) => t.tag !== item.value
                                    ).length > 0
                                      ? field.value.filter(
                                          (t: SignificantTags) => t.tag !== item.value
                                        )
                                      : [...(field.value || []), item.value];

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
                ></Controller>
              </section>
            </section>
          </div>
          <CTAButton type="submit" disabled={!isValid}>
            등록하기
          </CTAButton>
        </form>
      </div>
    </Layout>
  );
}

const wrapper = css`
  padding: 18px 18px 104px;
`;
const profileImageWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 40px 0 32px;
`;

const inputWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 32px;
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
