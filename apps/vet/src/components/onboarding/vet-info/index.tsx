import { ChangeEvent } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { CTAButton, ImageInput, Input, Text } from '@daengle/design-system';
import { formatPhoneNumberWithRegionNumber } from '@daengle/services/utils';
import { useS3 } from '@daengle/services/hooks';
import { ROUTES } from '~/constants/commons/routes';
import { VetInfoForm } from '~/interfaces/auth';
import { useValidateOnboardingForm } from '~/hooks';
import { useVetInfoFormStore } from '~/stores/auth';
import { usePostVetJoinMutation } from '~/queries';
import { address, certificatesWrapper, imageInputWrapper, section, wrapper } from './index.styles';

export default function VetInfo() {
  const router = useRouter();
  const { vetInfoForm, setVetInfoForm } = useVetInfoFormStore();
  const { mutateAsync: postVetJoin } = usePostVetJoinMutation();
  const validation = useValidateOnboardingForm();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isValid },
  } = useForm<VetInfoForm>({ defaultValues: { ...vetInfoForm }, mode: 'onChange' });
  const { uploadToS3 } = useS3({ targetFolderPath: 'vet/licenses' });

  const onSubmit = async (data: VetInfoForm) => {
    const licenses = await uploadToS3(data.licenses);
    if (!licenses?.length) return;

    await postVetJoin({ ...data, licenses });
    router.replace(ROUTES.ONBOARDING_PENDING);
  };

  return (
    <section css={wrapper}>
      <Text typo="title1" color="black">
        자격 신청서를 작성해 주세요
      </Text>

      <form css={section} onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="병원명"
          placeholder="병원명을 검색하세요"
          maxLength={20}
          service="partner"
          {...register('name', { ...validation.name })}
          errorMessage={errors.name?.message}
        />

        <div css={address}>
          <Input
            label="위치"
            placeholder="주소"
            maxLength={20}
            service="partner"
            onClick={() => {
              setVetInfoForm({ ...watch() });
              router.push(ROUTES.ONBOARDING_SEARCH_ADDRESS);
            }}
            {...register('address', { ...validation.address })}
            errorMessage={errors.address?.message}
          />
          <Input
            placeholder="상세주소"
            maxLength={20}
            {...register('detailAddress', { ...validation.detailAddress })}
            service="partner"
            errorMessage={errors.detailAddress?.message}
          />
        </div>

        <Input
          label="전화번호"
          placeholder="병원 전화번호를 입력해 주세요"
          service="partner"
          maxLength={13}
          {...register('phoneNumber', { ...validation.phoneNumber })}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setValue('phoneNumber', formatPhoneNumberWithRegionNumber(e.target.value))
          }
          errorMessage={errors.phoneNumber?.message}
        />

        <div css={certificatesWrapper}>
          <Text typo="subtitle3" color="black">
            증빙서류
          </Text>

          <Text typo="body12" color="gray300">
            사업자등록증 사진을 첨부해 주세요.
          </Text>
          <div css={imageInputWrapper}>
            <ImageInput
              maxLength={1}
              {...register('licenses', { ...validation.licenses })}
              onChange={(files) => setValue('licenses', files, { shouldValidate: true })}
            />
          </div>
        </div>

        <CTAButton type="submit" service="partner" disabled={!isValid}>
          다음
        </CTAButton>
      </form>
    </section>
  );
}
