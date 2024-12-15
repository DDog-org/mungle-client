import { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import 'dayjs/locale/ko';
import { AddInput, PetDetails, Section, UserProfile } from '@daengle/services/components';
import { AppBar, Layout, RoundButton, Text, theme } from '@daengle/design-system';
import { DatePick } from '~/components/estimate';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import { usePostVetEstimateMutation, useVetEstimateDetailQuery } from '~/queries/estimate';

import { GetVetEstimateDetailRequestParams } from '~/models/estimate';
import { ROUTES } from '~/constants/commons';

function requestDate(dateString: string): string {
  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

export default function EstimateDetail() {
  const router = useRouter();
  const [selectedDateTime, setSelectedDateTime] = useState<Dayjs | string>();
  const [inputs, setInputs] = useState({
    diagnosis: '',
    cause: '',
    treatment: '',
  });

  const { id } = router.query;
  const estimateId = Number(id);
  const params: GetVetEstimateDetailRequestParams = { careEstimateId: estimateId };

  const { data: estimateData } = useVetEstimateDetailQuery(params);
  const mutation = usePostVetEstimateMutation();

  const petData = estimateData || [];

  if (!petData || Array.isArray(petData)) {
    console.error('Unexpected response', petData);
    return <div>데이터를 불러오는 중 오류가 발생했습니다.</div>;
  }

  const petAttributes = [petData.age, petData.weight, petData.significant];
  const isEditable = petData.proposal === 'DESIGNATION';

  const handleDateTimeChange = (dateTime: Dayjs) => {
    setSelectedDateTime(dateTime);
  };

  const handleReservation = () => {
    if (!inputs.diagnosis || !inputs.cause || !inputs.treatment) {
      alert('모든 입력 항목을 작성해주세요.');
      return;
    }

    const reservationData = {
      id: estimateId,
      reservedDate: selectedDateTime
        ? requestDate(selectedDateTime.toString()).toString()
        : requestDate(petData.reservedDate).toString(),
      diagnosis: inputs.diagnosis,
      cause: inputs.cause,
      treatment: inputs.treatment,
    };

    mutation.mutate(reservationData, {
      onSuccess: () => {
        alert('예약이 성공적으로 등록되었습니다.');
        router.push(ROUTES.ESTIMATE_COMPLELTE);
      },
      onError: () => {
        alert('예약 전송에 실패했습니다.');
      },
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  return (
    <Layout>
      <AppBar
        onBackClick={() =>
          router.push({ pathname: '/estimates', query: { tab: router.query.tab || 'general' } })
        }
      />

      <div css={wrapper}>
        <UserProfile userImage={petData.userImageUrl} userName={petData.nickname} />
        <div css={sectionDivider}></div>
        <div css={requestTitle}>
          <Text typo="subtitle1">요청상세</Text>
        </div>
        <Section title="지역">{petData.address}</Section>
        <Section title="시술 희망 날짜 및 시간">
          <DatePick
            onChange={handleDateTimeChange}
            placeholderText={dayjs(petData.reservedDate)
              .locale('ko')
              .format('YYYY.MM.DD(ddd) • HH:mm')}
            isEditable={isEditable}
          />
        </Section>
        <Section title="어떤 아이가 진료 받을 예정인가요?">
          <PetDetails
            image={petData.petImageUrl}
            name={petData.petName}
            attributes={petAttributes}
          />
        </Section>
        <Section title="증상">{petData.symptoms}</Section>
        <Section title="추가 요청사항">{petData.requirements}</Section>
        <div css={sectionDivider}></div>
        <div css={allTitle}>
          <Text typo="subtitle3" color="gray500">
            종합 소견
          </Text>
        </div>
        <AddInput
          title="추정 병명"
          placeholder="추정 병명을 입력해주세요."
          height={40}
          maxLength={50}
          name="diagnosis"
          value={inputs.diagnosis}
          onChange={handleInputChange}
        />
        <AddInput
          title="추정 원인"
          placeholder="추정 원인을 입력해주세요."
          height={60}
          maxLength={400}
          name="cause"
          value={inputs.cause}
          onChange={handleInputChange}
        />
        <AddInput
          title="예상 진료"
          placeholder="예상되는 진료를 입력해주세요."
          height={120}
          maxLength={400}
          name="treatment"
          value={inputs.treatment}
          onChange={handleInputChange}
        />
        <div css={button}>
          <RoundButton service="partner" size="L" fullWidth onClick={handleReservation}>
            예약받기
          </RoundButton>
        </div>
      </div>
    </Layout>
  );
}

const wrapper = css`
  height: 100vh;
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

const button = css`
  padding: 24px 18px;
`;
