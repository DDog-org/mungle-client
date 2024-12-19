import router from 'next/router';
import { css } from '@emotion/react';
import { useS3 } from '@daengle/services/hooks';
import {
  AppBar,
  ChipRadio,
  CTAButton,
  Input,
  Layout,
  Select,
  Text,
  TextField,
  theme,
  ChipToggleButton,
  useToast,
} from '@daengle/design-system';
import { PetProfileCreateFormType } from '~/interfaces';
import {
  BIRTH_YEAR_OPTIONS,
  GROOMING_EXPERIENCE,
  IS_BITE,
  PET_DISLIKE_PARTS,
  PET_GENDER,
  PET_IS_NEUTERED,
  PET_SIGNIFICANT_TAGS,
  PET_WEIGHT,
  ROUTES,
} from '~/constants';
import { useValidatePetEdit } from '~/hooks';
import { ImageInputBox } from '~/components/mypage';
import { useGetBreedListQuery, usePostUserPetMutation } from '~/queries';
import { Controller, useForm } from 'react-hook-form';
import { RequiredLabel } from '~/components/mypage';
import { useState } from 'react';
import { DevTool } from '@hookform/devtools';

export default function PetProfileCreate() {
  const { data: breeds } = useGetBreedListQuery();
  const { mutateAsync: postUserPet } = usePostUserPetMutation();
  const { uploadToS3 } = useS3({ targetFolderPath: 'user/profile-images' });
  const { showToast } = useToast();

  const [profileImage, setProfileImage] = useState<File | null>(null);

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
      dislikeParts: [],
      significantTags: [],
      significant: '',
    },
  });
  const validation = useValidatePetEdit();

  const onSubmit = async (data: PetProfileCreateFormType) => {
    let imageString = '';

    if (profileImage) {
      const uploadedImages = await uploadToS3([profileImage]);

      if (uploadedImages && uploadedImages.length > 0) {
        imageString = uploadedImages[0] ?? '';
      }
    }

    const body = {
      ...data,
      image: imageString,
      significant: watch('significant') || null,
    };

    await postUserPet(body);

    router.push(ROUTES.MYPAGE);
    showToast({ title: '반려견 프로필이 등록되었어요' });
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
          <DevTool control={control} />
          <div css={profileImageWrapper}>
            <ImageInputBox onChange={setProfileImage} />
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
              <RequiredLabel label="탄생년도" />
              <Select
                options={BIRTH_YEAR_OPTIONS}
                placeholder="탄생년도"
                value={watch('birth')}
                required
                {...register('birth', { ...validation.birth })}
                onChange={(e) =>
                  setValue('birth', Number(e.target.value), { shouldValidate: true })
                }
              />
            </section>

            <section css={formBox}>
              <RequiredLabel label="성별" />
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
              <RequiredLabel label="중성화" />
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
              <RequiredLabel label="품종" />
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
              <RequiredLabel label="몸무게" />
              <section css={chipToggleButtonBox}>
                <Controller
                  name="weight"
                  control={control}
                  rules={validation.weight}
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
              <RequiredLabel label="미용경험" />
              <section css={toggleButtonBox}>
                <Controller
                  name="groomingExperience"
                  control={control}
                  rules={validation.groomingExperience}
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
                          onChange={() => field.onChange(item.value)}
                        />
                      ))}
                    </>
                  )}
                />
              </section>
            </section>

            <section css={formBox}>
              <RequiredLabel label="입질" />
              <section css={toggleButtonBox}>
                <Controller
                  name="isBite"
                  control={control}
                  rules={validation.isBite}
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
                <Controller
                  name="dislikeParts"
                  control={control}
                  render={({ field }) => (
                    <div css={chipCheckBoxWrapper}>
                      {PET_DISLIKE_PARTS.map((part) => (
                        <ChipToggleButton
                          key={part.value}
                          type="button"
                          size="fixed"
                          isSelected={field.value.includes(part.value)}
                          onClick={() =>
                            field.onChange(
                              field.value.includes(part.value)
                                ? field.value.filter((p) => p !== part.value)
                                : [...field.value, part.value]
                            )
                          }
                        >
                          {part.label}
                        </ChipToggleButton>
                      ))}
                    </div>
                  )}
                />
              </section>
            </section>

            <section css={formBox}>
              <section css={detailformBox}>
                <Text typo="subtitle3">특이사항</Text>
                <section css={chipButtonBox}>
                  <Controller
                    name="significantTags"
                    control={control}
                    render={({ field }) => (
                      <>
                        {PET_SIGNIFICANT_TAGS.map((item) => (
                          <ChipToggleButton
                            key={item.value}
                            type="button"
                            size="full"
                            isSelected={field.value.includes(item.value)}
                            onClick={() =>
                              field.onChange(
                                field.value.includes(item.value)
                                  ? field.value.filter((tag) => tag !== item.value)
                                  : [...field.value, item.value]
                              )
                            }
                          >
                            {item.label}
                          </ChipToggleButton>
                        ))}
                      </>
                    )}
                  />
                </section>

                <Controller
                  name="significant"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      css={detailInput}
                      placeholder="특이사항이 있다면 입력해 주세요"
                      value={field.value}
                      onChange={field.onChange}
                    />
                  )}
                />
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

const chipCheckBoxWrapper = css`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;

  width: 100%;
`;
