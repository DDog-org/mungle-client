import { useState } from 'react';
import { Dayjs } from 'dayjs';
import { AddInput, PetDetails, Section, UserProfile } from '@daengle/services/components';
import { AppBar, Layout, RoundButton, Text, theme } from '@daengle/design-system';

import { DatePick } from '~/components/estimate';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';

function formatDate(dateString: string): string {
  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

interface PetType {
  userImage: string;
  nickname: string;
  address: string;
  reservedDate: string;
  proposal: 'GENERAL' | 'DESIGNATION';
  petId: number;
  petImage: string;
  petName: string;
  age: number;
  weight: 'SMALL' | 'MEDIUM' | 'LARGE';
  significant: string | null;
  symptoms: string;
  requirements: string;
  diagnosis: string | null;
  cause: string | null;
  treatment: string | null;
}

const petData: PetType = {
  userImage: '/test.jpg',
  nickname: '닉네임',
  address: '서울특별시 관악구 봉천동',
  reservedDate: '2024-11-25 11:22:11',
  proposal: 'GENERAL',
  petId: 1,
  petImage: '/test.jpg',
  petName: '강아지A',
  age: 2,
  weight: 'SMALL',
  significant: null,
  symptoms: '강아지가 많이 아파요.',
  requirements: '추가 요구사항 없음',
  diagnosis: null,
  cause: null,
  treatment: null,
};
export default function EstimateDetail() {
  const router = useRouter();
  const [selectedDateTime, setSelectedDateTime] = useState<Dayjs | string>();
  const [overallOpinion, setOverallOpinion] = useState<string>('');

  const { id } = router.query;
  const estimateId = Number(id);

  const petAttributes = [petData.age, petData.weight, petData.significant];
  const isEditable = petData.proposal === 'DESIGNATION';

  const handleDateTimeChange = (dateTime: Dayjs) => {
    setSelectedDateTime(dateTime);
  };

  const handleReservation = () => {
    if (!overallOpinion) {
      alert('추가 요청 사항을 입력해주세요.');
      return;
    }

    const formattedDate = selectedDateTime
      ? formatDate(new Date(selectedDateTime.toString()).toISOString())
      : formatDate(petData.reservedDate);
  };

  return (
    <Layout>
      <AppBar onBackClick={() => router.back()} />
      <div css={wrapper}>
        <UserProfile userImage={petData.userImage} userName={petData.nickname} />
        <div css={sectionDivider}></div>
        <div css={requestTitle}>
          <Text typo="subtitle1">요청상세</Text>
        </div>
        <Section title="지역">{petData.address}</Section>
        <Section title="시술 희망 날짜 및 시간">
          <DatePick
            onChange={handleDateTimeChange}
            placeholderText={petData.reservedDate}
            isEditable={isEditable}
          />
        </Section>
        <Section title="어떤 아이가 진료 받을 예정인가요?">
          <PetDetails image={petData.petImage} name={petData.petName} attributes={petAttributes} />
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
          value={overallOpinion}
          onChange={(e) => setOverallOpinion(e.target.value)}
        />
        <AddInput
          title="추정 원인"
          placeholder="추정 원인을 입력해주세요."
          height={60}
          value={overallOpinion}
          onChange={(e) => setOverallOpinion(e.target.value)}
        />
        <AddInput
          title="예상 진료"
          placeholder="예상되는 진료를 입력해주세요."
          height={120}
          value={overallOpinion}
          onChange={(e) => setOverallOpinion(e.target.value)}
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
