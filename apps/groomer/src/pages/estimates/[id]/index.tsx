import { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import 'dayjs/locale/ko';
import { AddInput, PetDetails, Section, UserProfile } from '@daengle/services/components';
import { AppBar, Layout, RoundButton, Text, theme } from '@daengle/design-system';

import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import { usePostGroomerEstimateMutation, useGroomerEstimateDetailQuery } from '~/queries/estimate';

import { GetGroomerEstimateDetailRequestParams } from '~/models/estimate';
import { ROUTES } from '~/constants/commons';
import { DatePick } from '~/components/estimate';

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
  const [input, setInput] = useState<string>('');

  const { id } = router.query;
  const estimateId = Number(id);
  const params: GetGroomerEstimateDetailRequestParams = { groomingEstimateId: estimateId };

  const { data: estimateData } = useGroomerEstimateDetailQuery(params);
  const mutation = usePostGroomerEstimateMutation();

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
    if (!input) {
      alert('안내사항 항목을 작성해주세요.');
      return;
    }

    const reservationData = {
      id: estimateId,
      reservedDate: selectedDateTime
        ? requestDate(selectedDateTime.toString()).toString()
        : requestDate(petData.reservedDate).toString(),
      overallOpinion: input,
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

  return (
    <Layout>
      <AppBar onBackClick={() => router.back()} />
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
        <Section title="어떤 아이를 가꿀 예정이신가요?">
          <PetDetails
            image={petData.petImageUrl}
            name={petData.petName}
            attributes={petAttributes}
          />
        </Section>
        <Section title="원하는 미용">{petData.desiredStyle}</Section>
        <Section title="추가 요청사항">{petData.requirements}</Section>
        <div css={sectionDivider}></div>
        <AddInput
          title="안내사항"
          placeholder="추가 안내사항을 입력해주세요."
          height={120}
          value={petData.overallOpinion}
          onChange={(e) => {
            setInput(e.target.value);
          }}
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

const button = css`
  padding: 24px 18px;
`;
