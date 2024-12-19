import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import { formatDateTime } from '@daengle/services/utils';
import { AppBar, CTAButton, Layout, Text, TextField, theme } from '@daengle/design-system';
import { PetDetails, Section, UserProfile } from '@daengle/services/components';
import { usePostGroomerEstimateMutation, useGroomerEstimateDetailQuery } from '~/queries';
import { GetGroomerEstimateDetailRequestParams } from '~/models';
import { ROUTES } from '~/constants/commons';
import { useForm } from 'react-hook-form';
import { GroomerEstimateForm } from '~/interfaces';
import { useValidateEstimateForm } from '~/hooks';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';

export default function EstimateDetail() {
  const router = useRouter();

  const estimateId = Number(router.query.estimateId);
  const params: GetGroomerEstimateDetailRequestParams = { groomingEstimateId: estimateId };

  const { data: estimate } = useGroomerEstimateDetailQuery(params);
  const { mutate: postGroomerEstimate } = usePostGroomerEstimateMutation();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<GroomerEstimateForm>({
    defaultValues: {
      reservedDate: estimate?.reservedDate,
      overallOpinion: estimate?.overallOpinion,
    },
  });
  const validation = useValidateEstimateForm();

  const onSubmit = () => {
    const payload = {
      id: estimateId,
      reservedDate: formatDateTime(estimate?.reservedDate!).toString(),
      overallOpinion: watch('overallOpinion'),
    };

    postGroomerEstimate(payload, {
      onSuccess: () => {
        router.push(ROUTES.ESTIMATE_COMPLELTE);
      },
    });
  };

  if (!estimate) return;

  return (
    <Layout>
      <AppBar
        onBackClick={router.back}
        backgroundColor="white"
        onHomeClick={() => router.push(ROUTES.HOME)}
      />

      <div css={wrapper}>
        <UserProfile userImage={estimate.userImageUrl} userName={estimate.nickname} />

        <div css={sectionDivider} />

        <div css={requestTitle}>
          <Text typo="subtitle1">요청상세</Text>
        </div>

        <Section title="지역">
          <Text typo="subtitle3" color="black">
            {estimate.address}
          </Text>
        </Section>

        <Section title="시술 희망 날짜 및 시간">
          <Text typo="subtitle3" color="black">
            {dayjs(estimate.reservedDate).locale('ko').format('YYYY.MM.DD(ddd) • HH:mm')}
          </Text>
        </Section>

        <Section title="어떤 아이를 가꿀 예정이신가요?">
          <PetDetails
            image={estimate.petImageUrl}
            name={estimate.petName}
            attributes={{
              age: estimate.age,
              weight: estimate.weight,
              significant: estimate.significant ?? '없음',
            }}
            onClick={() => {}} //TODO: pet-info 상세정보 연동시 router 처리
          />
        </Section>

        <Section title="원하는 미용">
          <Text typo="subtitle3" color="black">
            {estimate.desiredStyle}
          </Text>
        </Section>

        <Section title="추가 요청사항">
          <Text typo="subtitle3" color="black">
            {estimate.requirements}
          </Text>
        </Section>

        <div css={sectionDivider} />

        <form css={form} onSubmit={handleSubmit(onSubmit)}>
          <div css={textFieldWrapper}>
            <TextField
              label="추가 소견"
              placeholder="추가 소견을 입력해 주세요"
              required
              service="partner"
              minLength={1}
              maxLength={400}
              rows={5}
              {...register('overallOpinion', { ...validation.overallOpinion })}
              errorMessage={errors.overallOpinion?.message}
            />
          </div>

          <CTAButton service="partner" type="submit" disabled={!isValid}>
            예약받기
          </CTAButton>
        </form>
      </div>
    </Layout>
  );
}

const wrapper = css`
  display: flex;
  flex-direction: column;

  padding: 0 0 calc(${theme.size.ctaButtonHeight} + 18px + 9px);
`;

const sectionDivider = css`
  display: block;

  width: 100%;
  height: 8px;
  margin: 0;

  background-color: ${theme.colors.gray100};
`;

const requestTitle = css`
  padding: 24px 18px;
`;

const form = css`
  width: 100%;
  margin: 15px 0 0;
`;

const textFieldWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 32px;

  padding: 0 18px;
`;
