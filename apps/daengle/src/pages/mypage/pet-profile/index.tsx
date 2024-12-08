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
  petProfileEditWrapper,
  petProfileImageBox,
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
  filterWrapper,
  ctaButtonWrapper,
} from './edit/index.styles';
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
import { useGetBreedListQuery } from '~/queries';

export default function PetProfile() {
  const { data: breeds } = useGetBreedListQuery();

  const validation = useValidatePetEdit();

  const {
    register,
    watch,
    setValue,
    control,
    formState: { errors, isValid },
  } = useForm<PetProfileEditType>({
    mode: 'onChange',
  });

  const handleGoToEdit = () => {};
  return (
    <Layout isAppBarExist={true}>
      <AppBar />
      <section css={filterWrapper}>
        <div css={titleBox}>
          <Text typo="title1">상세보기</Text>
        </div>
        <div css={petProfileWrapper}>
          <Text typo="subtitle1">내 아이</Text>
          <div css={petProfileEditWrapper}>
            <div css={petProfileImageBox}>
              <Image
                src="/icons/pet-profile/edit_image.jpeg"
                alt="펫 필터링 이미지"
                width={70}
                height={70}
              />
            </div>
            <Text typo="body5" color="blue200">
              가이
            </Text>
          </div>
        </div>
      </section>
      <div css={line} />
      <section css={inputWrapper}>
        <div css={readOnlyLayer} />
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
                      <ChipToggleButton size="fixed">{item.label}</ChipToggleButton>
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
                          isSelected={field.value?.includes(item.value)}
                          onChange={(e) => field.onChange(e.target)}
                        >
                          {item.label}
                        </ChipToggleButton>
                      ))}
                    </>
                  )}
                />
              </>
            </section>
            <textarea css={detailInput} placeholder="특이사항이 있다면 입력해주세요" />
          </section>
        </section>
      </section>
      <section css={ctaButtonWrapper}>
        <CTAButton onClick={handleGoToEdit} disabled={isValid}>
          반려견 프로필 수정
        </CTAButton>
      </section>
    </Layout>
  );
}
