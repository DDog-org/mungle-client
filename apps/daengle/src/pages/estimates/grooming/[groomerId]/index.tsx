import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import { AppBar, CTAButton, Layout, Text, TextField, useDialog } from '@daengle/design-system';
import { ROUTES } from '~/constants/commons';
import {
  usePostUserEstimateGroomingMutation,
  usePostUserEstimateGroomerUserInfoMutation,
} from '~/queries';
import { PostUserEstimateGroomerUserInfoRequestBody } from '~/models/estimate';
import 'dayjs/locale/ko';
import { PetInfo, UserEstimateGroomingForm } from '~/interfaces/estimate';
import { DatePicker, EstimateSelect, ProfileSelector } from '~/components/estimate';
import { RegisterPetProfile } from '@daengle/services/components';
import { Controller, useForm } from 'react-hook-form';
import { useValidateDesignationGroomingForm } from '~/hooks';
import { SelectPet } from '~/components/mypage';

export default function EstimateCreate() {
  const router = useRouter();
  const groomerId = Number(router.query.groomerId);

  const { open } = useDialog();

  const [petInfos, setPetInfos] = useState<PetInfo[]>();
  const [desiredStyle, setDesiredStyle] = useState<string>('');

  const { mutateAsync: postUserEstimateGroomerUserInfo } =
    usePostUserEstimateGroomerUserInfoMutation();
  const { mutateAsync: postUserEstimateGroomingRequestBody } =
    usePostUserEstimateGroomingMutation();

  const {
    register,
    watch,
    control,
    setValue,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<UserEstimateGroomingForm>({
    defaultValues: {
      groomerId: groomerId,
    },
  });
  const validate = useValidateDesignationGroomingForm();

  useEffect(() => {
    const fetchData = async () => {
      const response = await postUserEstimateGroomerUserInfo({ groomerId });
      setValue('address', response.address);
      setPetInfos(response.petInfos);
    };

    fetchData();
  }, []);

  const onSubmit = (data: UserEstimateGroomingForm) => {
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
      ...data,
      desiredStyle,
      address: watch('address'),
      petId: watch('petId') as number,
      groomerId: groomerId,
    };

    postUserEstimateGroomingRequestBody(payload, {
      onSuccess: () => {
        router.replace(ROUTES.ESTIMATES_FORM_COMPLETE);
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
      <div css={wrapper}>
        <Text tag="h1" typo="title1" color="black">
          견적 요청서
        </Text>

        <form onSubmit={handleSubmit(onSubmit)} css={formWrapper}>
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
              어떤 아이를 가꿀 예정이신가요?
            </Text>
            {petInfos && petInfos.length > 0 ? (
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
              <RegisterPetProfile onClick={() => router.push(ROUTES.MYPAGE)} />
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
          <section css={section}>
            <TextField
              required
              label="요청사항"
              placeholder="요청사항을 입력해 주세요"
              {...register('requirements', { ...validate.requirements })}
              errorMessage={errors.requirements?.message}
            />
          </section>

          <CTAButton type="submit" disabled={!isValid || !desiredStyle}>
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

const section = css`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const formWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 32px;

  width: 100%;
`;

const selectBox = css`
  display: flex;
  gap: 13px;
`;
