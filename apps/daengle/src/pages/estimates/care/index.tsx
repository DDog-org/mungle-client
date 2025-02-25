import { useEffect, useState } from 'react';
import { AppBar, CTAButton, Layout, Text, TextField, useDialog } from '@daengle/design-system';
import { css } from '@emotion/react';
import { ROUTES } from '~/constants/commons';
import { useRouter } from 'next/router';
import { usePostUserEstimateCareMutation } from '~/queries/estimate';
import { PetInfo, UserEstimateCareForm } from '~/interfaces/estimate';
import { RegisterPetProfile } from '@daengle/services/components';
import { DatePicker } from '~/components/estimate';
import { Controller, useForm } from 'react-hook-form';
import { useValidateGeneralCareForm } from '~/hooks';
import { postUserEstimateVetUserInfo } from '~/apis';
import { SelectPet } from '~/components/mypage';

export default function EstimateCare() {
  const router = useRouter();
  const vetId = Number(router.query.vetId);

  const { open } = useDialog();

  const [petInfos, setPetInfos] = useState<PetInfo[] | null>(null);

  const { mutateAsync: postUserEstimateCare } = usePostUserEstimateCareMutation();

  const {
    register,
    watch,
    control,
    setValue,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<UserEstimateCareForm>({
    defaultValues: {
      vetId: null,
      petId: null,
    },
  });
  const validate = useValidateGeneralCareForm();

  useEffect(() => {
    const fetchData = async () => {
      const response = await postUserEstimateVetUserInfo({ vetId });
      setValue('address', response.address);
      setPetInfos(response.petInfos);
    };

    fetchData();
  }, []);

  const onSubmit = (data: UserEstimateCareForm) => {
    const petId = watch('petId');

    if (!petId) {
      open({
        title: '반려동물을 선택해 주세요',
        primaryActionLabel: '확인',
      });
      return;
    }

    const payload = {
      ...data,
      vetId: null,
    };

    postUserEstimateCare(payload, {
      onSuccess: () => {
        router.replace(ROUTES.ESTIMATES_FORM_COMPLETE);
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
      <div css={wrapper}>
        <Text tag="h1" typo="title1" color="black">
          견적 요청서
        </Text>

        <form css={formWrapper} onSubmit={handleSubmit(onSubmit)}>
          <section css={section}>
            <Text tag="h2" typo="subtitle3" color="black">
              지역
            </Text>
            <Text typo="title2" color="black">
              {watch('address')}
            </Text>
          </section>
          <section css={section}>
            <Text tag="h2" typo="subtitle3" color="black">
              시술 희망 날짜 및 시간
            </Text>
            <Controller
              name="reservedDate"
              control={control}
              rules={validate.reservedDate}
              render={({ field }) => <DatePicker {...field} onChange={field.onChange} />}
            />
          </section>
          <section css={section}>
            <Text tag="h2" typo="subtitle3" color="black">
              어떤 아이가 진료를 받을 예정인가요?
            </Text>
            {petInfos && petInfos?.length > 0 ? (
              <Controller
                name="petId"
                control={control}
                rules={validate.petId}
                render={({ field }) => (
                  <SelectPet
                    petInfos={petInfos.map((pet) => ({
                      petId: pet.petId,
                      petName: pet.name,
                      petImage: pet.imageUrl ?? '',
                    }))}
                    selectedPetId={field.value ?? -1}
                    onPetSelect={field.onChange}
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
            required
            label="요청사항"
            placeholder="요청사항을 입력해 주세요"
            rows={5}
            {...register('requirements', { ...validate.requirements })}
            errorMessage={errors.requirements?.message}
          />
          <CTAButton type="submit" disabled={!isValid || !watch('petId')}>
            요청하기
          </CTAButton>
        </form>
      </div>
    </Layout>
  );
}

const wrapper = css`
  display: flex;
  flex-direction: column;
  gap: 32px;

  width: 100%;
  padding: 18px 18px 104px;
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
