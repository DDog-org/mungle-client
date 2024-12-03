import { ChangeEvent } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { CTAButton, ImageInput, Input, Text } from '@daengle/design-system';
import { formatPhoneNumber } from '@daengle/services/utils';
import { GroomerInfoForm } from '~/interfaces/auth';
import { useValidateOnboardingForm } from '~/hooks/auth';
import { useGroomerInfoFormStore } from '~/stores/auth';
import {
  certificateInfo,
  certificates,
  certificatesWrapper,
  imageInputWrapper,
  section,
  store,
  wrapper,
} from './index.styles';
import { ROUTES } from '~/constants/commons/routes';
import { usePostJoinMutation } from '~/queries';

// TODO: 임시 이메일
const EMAIL = 'daengle@daengle.com';

export default function GroomerInfo() {
  const router = useRouter();
  const { groomerInfoForm, setGroomerInfoForm } = useGroomerInfoFormStore();
  const { mutate: postJoin } = usePostJoinMutation();
  const validation = useValidateOnboardingForm();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isValid },
  } = useForm<GroomerInfoForm>({ defaultValues: { ...groomerInfoForm }, mode: 'onChange' });

  const onSubmit = (data: GroomerInfoForm) => {
    // TODO: aws-sdk-s3를 사용하여 이미지 업로드 로직 추가
    postJoin({ ...data, businessLicenses: [], licenses: [], email: EMAIL });
  };

  return (
    <section css={wrapper}>
      <Text typo="title1" color="black">
        자격 신청서를 작성해 주세요
      </Text>

      <form css={section} onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="이름"
          placeholder="이름을 입력해 주세요"
          maxLength={10}
          service="partner"
          {...register('name', { ...validation.name })}
          errorMessage={errors.name?.message}
        />

        <Input
          label="휴대폰 번호"
          placeholder="휴대폰 번호를 입력해 주세요"
          maxLength={13}
          service="partner"
          {...register('phoneNumber', { ...validation.phoneNumber })}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setValue('phoneNumber', formatPhoneNumber(e.target.value))
          }
          errorMessage={errors.phoneNumber?.message}
        />

        <div css={store}>
          <Input
            label="매장명"
            placeholder="매장명을 검색하세요"
            maxLength={20}
            service="partner"
            {...register('shopName', { ...validation.shopName })}
            errorMessage={errors.shopName?.message}
          />
        </div>

        <div css={store}>
          <Input
            label="매장 위치"
            placeholder="주소"
            maxLength={20}
            service="partner"
            onClick={() => {
              setGroomerInfoForm({ ...watch() });
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

        <div css={certificatesWrapper}>
          <Text typo="subtitle3" color="black">
            증빙서류
          </Text>

          <div css={certificates}>
            <div css={certificateInfo}>
              <Text typo="body5" color="gray600">
                사업자등록증(또는 근로소득증명서)
              </Text>
              <Text typo="body12" color="gray300">
                {`사업자등록증(프리랜서인 경우 근로소득증명서) 사진을 첨부해 주세요.\n사진은 5MB 이하만 첨부 가능합니다.`}
              </Text>
              <div css={imageInputWrapper}>
                <ImageInput
                  maxLength={2}
                  {...register('businessLicenses', { ...validation.businessLicenses })}
                  onChange={(files) =>
                    setValue('businessLicenses', files, { shouldValidate: true })
                  }
                />
              </div>
            </div>

            <div css={certificateInfo}>
              <Text typo="body5" color="gray600">
                자격증
              </Text>
              <Text typo="body12" color="gray300">
                {`KKF 또는 KKC 자격증 사진을 첨부해주세요.\n사진은 5MB 이하만 첨부 가능합니다.`}
              </Text>
              <div css={imageInputWrapper}>
                <ImageInput
                  maxLength={2}
                  {...register('licenses', { ...validation.licenses })}
                  onChange={(files) => setValue('licenses', files, { shouldValidate: true })}
                />
              </div>
            </div>
          </div>
        </div>

        <CTAButton type="submit" service="partner" disabled={!isValid}>
          다음
        </CTAButton>
      </form>
    </section>
  );
}
