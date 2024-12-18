import {
  AppBar,
  CTAButton,
  Layout,
  Text,
  TextField,
  theme,
  useDialog,
} from '@daengle/design-system';
import { RegisterPetProfile } from '@daengle/services/components';
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import { ROUTES } from '~/constants/commons';
import { useRouter } from 'next/router';
import { DatePicker, EstimateSelect, ProfileSelector } from '~/components/estimate';
import {
  usePostUserEstimateGroomingMutation,
  usePostUserEstimateGroomerUserInfoMutation,
} from '~/queries';
import { Controller, useForm } from 'react-hook-form';
import { useValidateGeneralGroomingForm } from '~/hooks';
import { PetInfo, UserEstimateGroomingForm } from '~/interfaces';

export default function EstimateCreate() {
  const router = useRouter();

  const [petInfos, setPetInfos] = useState<PetInfo[]>();
  const [desiredStyle, setDesiredStyle] = useState<string>('');

  const { open } = useDialog();

  const { mutateAsync: postUserEstimateGroomerUserInfo } =
    usePostUserEstimateGroomerUserInfoMutation();
  const { mutateAsync: postUserEstimateGrooming } = usePostUserEstimateGroomingMutation();

  const {
    register,
    watch,
    control,
    setValue,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<UserEstimateGroomingForm>({
    defaultValues: {
      groomerId: null,
      petId: null,
    },
  });
  const validate = useValidateGeneralGroomingForm();

  useEffect(() => {
    const fetchData = async () => {
      const response = await postUserEstimateGroomerUserInfo({ groomerId: null });
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

    if (!desiredStyle) {
      open({
        title: '원하는 미용을 선택해 주세요',
        primaryActionLabel: '확인',
      });
      return;
    }

    const payload = {
      groomerId: null,
      petId: watch('petId') as number,
      address: watch('address'),
      reservedDate: watch('reservedDate'),
      desiredStyle: watch('desiredStyle'),
      requirements: watch('requirements') ?? null,
    };

    postUserEstimateGrooming(payload, {
      onSuccess: () => {
        router.push(ROUTES.ESTIMATES_FORM_COMPLETE);
      },
    });
  };

  const handleDesiredStyleSelect = (style: string) => {
    setDesiredStyle((prevStyle) => (prevStyle === style ? '' : style));
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

        <form css={formWrapper} onSubmit={handleSubmit(onSubmit)}>
          <section css={section}>
            <Text tag="h2" typo="subtitle3" color="black">
              지역
            </Text>
            <Text typo="title2" color="black100">
              {watch('address')}
            </Text>
          </section>

          <section css={section}>
            <Text tag="h2" typo="subtitle3" color="gray700">
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
            <Text tag="h2" typo="subtitle3" color="black">
              어떤 아이를 가꿀 예정이신가요?
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

          <section css={section}>
            <Text tag="h2" typo="subtitle3" color="black">
              원하는 미용
            </Text>
            <div css={selectBox}>
              <EstimateSelect
                title="전체 클리핑"
                componentName="GroomingFullClipping"
                onClick={() => handleDesiredStyleSelect('전체 클리핑')}
                isSelected={desiredStyle === '전체 클리핑'}
              />
              <EstimateSelect
                title="전체 클리핑 + 얼굴 컷"
                componentName="GroomingFaceCut"
                onClick={() => handleDesiredStyleSelect('전체 클리핑 + 얼굴 컷')}
                isSelected={desiredStyle === '전체 클리핑 + 얼굴 컷'}
              />
            </div>
            <div css={selectBox}>
              <EstimateSelect
                title="전체 가위컷"
                componentName="GroomingFullScissorCut"
                onClick={() => handleDesiredStyleSelect('전체 가위컷')}
                isSelected={desiredStyle === '전체 가위컷'}
              />
              <EstimateSelect
                title="스포팅 + 얼굴 컷"
                componentName="GroomingSpotting"
                onClick={() => handleDesiredStyleSelect('스포팅 + 얼굴 컷')}
                isSelected={desiredStyle === '스포팅 + 얼굴 컷'}
              />
            </div>
          </section>

          <TextField
            label="추가 요청사항"
            placeholder="추가 요청사항을 입력해 주세요 (선택)"
            rows={5}
            {...register('requirements', { ...validate.requirements })}
            errorMessage={errors.requirements?.message}
          />

          <CTAButton type="submit" disabled={!isValid || !watch('petId') || !desiredStyle}>
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

const selectBox = css`
  display: flex;
  gap: 13px;
`;
