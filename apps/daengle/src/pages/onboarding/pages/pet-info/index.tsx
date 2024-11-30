import { ChipRadio, CTAButton, Input, Select, Text } from '@daengle/design-system';
import { Controller, useForm } from 'react-hook-form';
import { USER_ROLE } from '~/constants/role';
import {
  useGetBreedListQuery,
  usePostJoinWithoutPetMutation,
  usePostJoinWithPetMutation,
} from '~/queries';
import {
  BIRTH_YEAR_OPTIONS,
  PET_GENDER,
  PET_IS_NEUTERED,
  PET_WEIGHT,
} from '~/pages/onboarding/constants';
import { useValidatePetForm } from '~/pages/onboarding/hooks';
import { PetInfoFormType } from '~/pages/onboarding/interfaces';
import { useUserInfoFormStore } from '~/pages/onboarding/store/user-info-form';
import { itemWrapper, radioGroup, section, weightWrapper, wrapper } from './index.styles';
import { DevTool } from '@hookform/devtools';

// TODO: 임시 이메일
const EMAIL = 'daengle@daengle.com';

interface Props {
  onNext?: () => void;
}

export default function PetInfo({ onNext }: Props) {
  const { userInfoForm } = useUserInfoFormStore();

  const { data: breeds } = useGetBreedListQuery();
  const { mutateAsync: postJoinWithPet } = usePostJoinWithPetMutation();
  const { mutate: postJoinWithoutPet } = usePostJoinWithoutPetMutation();

  const validation = useValidatePetForm();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    control,
    formState: { errors, isValid },
  } = useForm<PetInfoFormType>({
    mode: 'onChange',
  });

  const onSubmit = async () => {
    if (!isValid) return;

    await postJoinWithPet({
      ...userInfoForm.form,
      role: USER_ROLE,
      email: EMAIL,
      ...watch(),
      petBirth: Number(watch('petBirth')),
      isNeutered: watch('isNeutered') === 'true',
    });

    onNext?.();
  };

  return (
    <section css={wrapper}>
      <Text tag="h1" typo="title1" color="black">
        강아지의 기본 정보를 입력해 주세요
      </Text>

      <form css={section} onSubmit={handleSubmit(onSubmit)}>
        <DevTool control={control} />
        <Input
          label="이름"
          placeholder="이름을 입력해 주세요"
          maxLength={10}
          {...register('petName', { ...validation.petName })}
          errorMessage={errors.petName?.message}
        />

        <div css={itemWrapper}>
          <Text typo="subtitle3" color="black">
            탄생년도
          </Text>
          <Select
            options={BIRTH_YEAR_OPTIONS}
            placeholder="탄생년도"
            value={watch('petBirth')}
            {...register('petBirth', { ...validation.petBirth })}
            onChange={(e) => setValue('petBirth', Number(e.target.value), { shouldValidate: true })}
          />
        </div>

        <div css={itemWrapper}>
          <Text typo="subtitle3" color="black">
            성별
          </Text>

          <div css={radioGroup}>
            <Controller
              name="petGender"
              control={control}
              rules={validation.petGender}
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
          </div>
        </div>

        <div css={itemWrapper}>
          <Text typo="subtitle3" color="black">
            중성화
          </Text>
          <div css={radioGroup}>
            <Controller
              name="isNeutered"
              control={control}
              rules={validation.isNeutered}
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
          </div>
        </div>

        <div css={itemWrapper}>
          <Text typo="subtitle3" color="black">
            품종
          </Text>
          <Select
            options={breeds?.map((breed) => ({ value: breed.breed, label: breed.breedName })) ?? []}
            placeholder="품종"
            {...register('breed', { ...validation.breed })}
            value={watch('breed')?.toString()}
          />
        </div>

        <div css={itemWrapper}>
          <Text typo="subtitle3" color="black">
            몸무게
          </Text>
          <div css={radioGroup}>
            <Controller
              name="petWeight"
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
          </div>
        </div>

        <CTAButton
          type="submit"
          secondaryButtonLabel="건너뛰기"
          onSecondaryButtonClick={() =>
            postJoinWithoutPet({ ...userInfoForm.form, role: USER_ROLE, email: EMAIL })
          }
          disabled={!isValid}
        >
          시작하기
        </CTAButton>
      </form>
    </section>
  );
}
