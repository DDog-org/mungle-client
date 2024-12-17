import { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import 'dayjs/locale/ko';
import { AddInput, PetDetails, Section, UserProfile } from '@daengle/services/components';
import { AppBar, Layout, RoundButton, Text, theme } from '@daengle/design-system';
import { DatePick } from '~/components/estimate';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';

import { GetVetEstimateDetailRequestParams } from '~/models/estimate';
import { ROUTES } from '~/constants';

export default function ReservationsDetail() {
  const router = useRouter();
  const [selectedDateTime, setSelectedDateTime] = useState<Dayjs | string>();
  const [inputs, setInputs] = useState({
    diagnosis: '',
    cause: '',
    treatment: '',
  });

  const petData = {
    userImageUrl: '',
    nickname: '닉네임',
    address: '서울특별시 관악구 봉천동',
    reservedDate: '2024-11-25 11:22:11',
    proposal: 'GENERAL',
    petId: 1,
    petImageUrl: '',
    petName: '강아지A',
    age: 2,
    weight: 'SMALL',
    significant: null,
    symptoms: '강아지가 많이 아파요.',
    requirements: '추가 요구사항 없음',
    diagnosis: '감기',
    cause: '면역력 저하',
    treatment: '알약 처방 예정',
  };

  const petAttributes = [petData.age, petData.weight, petData.significant];
  const isEditable = petData.proposal === 'DESIGNATION';

  const handleDateTimeChange = (dateTime: Dayjs) => {
    setSelectedDateTime(dateTime);
  };
  return (
    <Layout>
      <AppBar
        backgroundColor={theme.colors.white}
        onBackClick={() => router.push(ROUTES.RESERVATIONS)}
        onHomeClick={() => router.push(ROUTES.HOME)}
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
        <Section title="추정 병명">{petData.diagnosis}</Section>
        <Section title="추정 원인">{petData.cause}</Section>
        <Section title="예상 진료">{petData.treatment}</Section>
        <div css={button}>
          <RoundButton
            service="partner"
            size="L"
            fullWidth
            onClick={() => {
              router.push(ROUTES.RESERVATIONS);
            }}
          >
            예약서 확인
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
