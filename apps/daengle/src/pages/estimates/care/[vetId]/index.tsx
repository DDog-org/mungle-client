import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import { RegisterPetProfile } from '@daengle/services/components';
import {
  AppBar,
  CTAButton,
  Layout,
  Text,
  TextField,
  theme,
  useDialog,
} from '@daengle/design-system';
import { ROUTES } from '~/constants';
import { useValidateDesignationCareForm } from '~/hooks';
import { PetInfo, UserEstimateCareForm } from '~/interfaces';
import { DatePicker, ProfileSelector } from '~/components/estimate';
import { usePostUserEstimateCareMutation, usePostUserEstimateVetUserInfoMutation } from '~/queries';
import { useForm, Controller } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

export default function EstimateCare() {
  const router = useRouter();
  const vetId = Number(router.query.vetId);

  const [petInfos, setPetInfos] = useState<PetInfo[]>();

  const { open } = useDialog();
  const { mutateAsync: postUserEstimateCare } = usePostUserEstimateCareMutation();
  const { mutateAsync: postUserEstimateVetUserInfo } = usePostUserEstimateVetUserInfoMutation({
    vetId,
  });

  const {
    register,
    watch,
    control,
    setValue,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<UserEstimateCareForm>({
    defaultValues: {
      petId: null,
    },
  });
  const validate = useValidateDesignationCareForm();

  useEffect(() => {
    const fetchData = async () => {
      const response = await postUserEstimateVetUserInfo();
      setValue('address', response.address);
      setPetInfos(response.petInfos);
    };

    fetchData();
  }, []);

  const onSubmit = () => {
    const petId = watch('petId');

    if (!petId) {
      open({
        title: '반려동물을 선택해 주세요',
        primaryActionLabel: '확인',
      });
      return;
    }

    const payload = {
      vetId,
      petId: watch('petId') as number,
      address: watch('address'),
      reservedDate: watch('reservedDate'),
      symptoms: watch('symptoms'),
      requirements: watch('requirements') ?? null,
    };

    postUserEstimateCare(payload, {
      onSuccess: () => {
        router.push(ROUTES.ESTIMATES_FORM_COMPLETE);
      },
    });
  };

  return (
    <Layout>
      <AppBar
        onBackClick={router.back}
        onHomeClick={() => router.push(ROUTES.HOME)}
        backgroundColor="white"
      />

      <section css={sectionWrapper}>
        <Text tag="h1" typo="title1" color="black">
          견적 요청서
        </Text>

        <DevTool control={control} />

        <form css={formWrapper} onSubmit={handleSubmit(onSubmit)}>
          <section css={section}>
            <Text tag="h2" typo="body4" color="gray700">
              지역
            </Text>
            <Text typo="title2" color="black100">
              {watch('address')}
            </Text>
          </section>

          <section css={section}>
            <Text tag="h2" typo="body4" color="gray700">
              시술 희망 날짜 및 시간
            </Text>
            <Controller
              name="reservedDate"
              control={control}
              rules={validate.reservedDate}
              render={({ field }) => <DatePicker onChange={field.onChange} />}
            />
          </section>

          <section css={section}>
            <Text tag="h2" typo="body4" color="gray700">
              어떤 아이가 진료를 받을 예정인가요?
            </Text>

            {petInfos && petInfos?.length > 0 ? (
              <Controller
                name="petId"
                control={control}
                rules={validate.petId}
                render={({ field }) => (
                  <ProfileSelector
                    petInfos={petInfos}
                    selectedPetId={field.value}
                    onSelectPet={field.onChange}
                  />
                )}
              />
            ) : (
              <RegisterPetProfile onClick={() => router.push(ROUTES.MYPAGE_PET_PROFILE_CREATE)} />
            )}
          </section>

          <TextField
            label="증상"
            placeholder="증상을 입력해 주세요"
            required
            rows={5}
            {...register('symptoms', { ...validate.symptoms })}
            errorMessage={errors.symptoms?.message}
          />

          <TextField
            label="추가 요청사항"
            placeholder="추가 요청사항을 입력해 주세요"
            rows={5}
            {...register('requirements', { ...validate.requirements })}
            errorMessage={errors.requirements?.message}
          />

          <CTAButton type="submit" disabled={!isValid || !watch('petId')}>
            요청하기
          </CTAButton>
        </form>
      </section>
    </Layout>
  );
}

const sectionWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 40px;

  width: 100%;
  padding: 18px 18px calc(${theme.size.ctaButtonHeight} + 18px) 18px;
`;

const formWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 32px;

  width: 100%;
`;

const section = css`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const listBox = css`
  overflow: auto;

  width: 100%;
`;

const petList = css`
  display: flex;
  gap: 14px;
`;

const petProfile = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  cursor: pointer;
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
