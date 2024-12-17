import { useRouter } from 'next/router';
import { useState } from 'react';
import { css } from '@emotion/react';
import { formatDateTime } from '@daengle/services/utils';
import { AppBar, CTAButton, Layout, Text, TextField, theme } from '@daengle/design-system';
import { PetDetails, Section, UserProfile } from '@daengle/services/components';
import { DatePick } from '~/components/estimates';
import { usePostVetEstimateMutation, useVetEstimateDetailQuery } from '~/queries';
import { GetVetEstimateDetailRequestParams } from '~/models';
import { ROUTES } from '~/constants/commons';
import dayjs, { Dayjs } from 'dayjs';
import 'dayjs/locale/ko';
import { useForkRef } from '@mui/material';
import { useForm } from 'react-hook-form';
import { VetEstimateForm } from '~/interfaces';
import { useValidateEstimateForm } from '~/hooks';

export default function EstimateDetail() {
  const router = useRouter();

  const [selectedDateTime, setSelectedDateTime] = useState<Dayjs | string>();

  const estimateId = Number(router.query.estimateId);
  const params: GetVetEstimateDetailRequestParams = { careEstimateId: estimateId };

  const { data: estimate } = useVetEstimateDetailQuery(params);
  const { mutate: postVetEstimate } = usePostVetEstimateMutation();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<VetEstimateForm>({
    defaultValues: {
      reservedDate: estimate?.reservedDate,
      diagnosis: estimate?.diagnosis,
      cause: estimate?.cause,
      treatment: estimate?.treatment,
    },
  });
  const validation = useValidateEstimateForm();

  // 지정 예약만 날짜 변경 가능
  const isEditable = estimate?.proposal === 'DESIGNATION';

  const handleDateTimeChange = (dateTime: Dayjs) => {
    setSelectedDateTime(dateTime);
  };

  const onSubmit = () => {
    const payload = {
      id: estimateId,
      reservedDate: selectedDateTime
        ? formatDateTime(selectedDateTime.toString()).toString()
        : formatDateTime(estimate?.reservedDate!).toString(),
      diagnosis: watch('diagnosis'),
      cause: watch('cause'),
      treatment: watch('treatment'),
    };

    postVetEstimate(payload, {
      onSuccess: () => router.push(ROUTES.ESTIMATE_COMPLELTE),
    });
  };

  if (!estimate) return;

  return (
    <Layout>
      <AppBar
        backgroundColor="white"
        onBackClick={() =>
          router.push({ pathname: '/estimates', query: { tab: router.query.tab || 'general' } })
        }
        onHomeClick={() => router.push(ROUTES.HOME)}
      />

      <div css={wrapper}>
        <UserProfile userImage={estimate.userImageUrl} userName={estimate.nickname} />

        <div css={sectionDivider} />

        <div css={requestTitle}>
          <Text typo="subtitle1">요청상세</Text>
        </div>

        <Section title="지역">{estimate.address}</Section>

        <Section title="시술 희망 날짜 및 시간">
          <DatePick
            onChange={handleDateTimeChange}
            placeholderText={dayjs(estimate.reservedDate)
              .locale('ko')
              .format('YYYY.MM.DD(ddd) • HH:mm')}
            isEditable={isEditable}
          />
        </Section>

        <Section title="어떤 아이가 진료 받을 예정인가요?">
          <PetDetails
            image={estimate.petImageUrl}
            name={estimate.petName}
            attributes={{
              age: estimate.age,
              weight: estimate.weight,
              significant: estimate.significant,
            }}
          />
        </Section>

        <Section title="증상">{estimate.symptoms}</Section>

        <Section title="추가 요청사항">{estimate.requirements}</Section>

        <div css={sectionDivider} />

        <div css={allTitle}>
          <Text typo="subtitle3" color="gray500">
            종합 소견
          </Text>
        </div>

        <form css={form} onSubmit={handleSubmit(onSubmit)}>
          <div css={textFieldWrapper}>
            <TextField
              label="추정 병명"
              placeholder="추정 병명을 입력해 주세요"
              required
              service="partner"
              minLength={1}
              maxLength={50}
              {...register('diagnosis', { ...validation.diagnosis })}
              errorMessage={errors.diagnosis?.message}
            />
            <TextField
              label="추정 원인"
              placeholder="추정 원인을 입력해 주세요"
              required
              service="partner"
              minLength={1}
              maxLength={400}
              {...register('cause', { ...validation.cause })}
              errorMessage={errors.cause?.message}
            />
            <TextField
              label="예상 진료"
              placeholder="예상 진료 내용을 입력해 주세요"
              required
              service="partner"
              minLength={1}
              maxLength={400}
              {...register('treatment', { ...validation.treatment })}
              errorMessage={errors.treatment?.message}
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

const allTitle = css`
  padding: 24px 18px 0;
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
