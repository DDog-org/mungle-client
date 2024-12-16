import { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import 'dayjs/locale/ko';
import { PetDetails, Section, UserProfile } from '@daengle/services/components';
import { AppBar, Layout, RoundButton, Text, theme } from '@daengle/design-system';

import { useRouter } from 'next/router';
import { css } from '@emotion/react';

import { GetGroomerEstimateDetailRequestParams } from '~/models/estimate';
import { DatePick } from '~/components/estimate';
import { ROUTES } from '~/constants';

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

const petData = {
  userImageUrl: '',
  nickname: '닉네임',
  address: '서울시 강남구 역삼동',
  reservedDate: '2024-12-25 15:30:42',
  petImageUrl: '',
  petName: '감자',
  age: 4,
  weight: 'SMALL',
  significant: '',
  desiredStyle: '전체 가위컷',
  requirements: '귀엽게 부탁드려요',
  overallOpinion: '최고의 서비스로 모시겠습니다',
};

export default function EstimateDetail() {
  const router = useRouter();

  const { id } = router.query;
  const estimateId = Number(id);
  const [selectedDateTime, setSelectedDateTime] = useState<Dayjs | string>();
  const petAttributes = [petData.age, petData.weight, petData.significant];

  const handleDateTimeChange = (dateTime: Dayjs) => {
    setSelectedDateTime(dateTime);
  };

  return (
    <Layout>
      <AppBar
        backgroundColor={theme.colors.white}
        onBackClick={() => router.back()}
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
            isEditable={false}
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
        <Section title="안내사항">{petData.overallOpinion}</Section>
        <div css={button}>
          <RoundButton
            service="partner"
            size="L"
            fullWidth
            onClick={() => {
              /* TODO:알람 전송 */
            }}
          >
            미용 완료
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
