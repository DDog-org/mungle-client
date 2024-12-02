import { useState } from 'react';
import { Section, PetDetails, UserProfile, AddInput, DatePick } from '@daengle/services/estimate';

import { AppBar, Layout, RoundButton, Text } from '@daengle/design-system';
import { wrapper, sectionDivider, requestTitle, button } from './index.styles';
import { useGroomerEstimateDetailQuery } from '~/queries';

export default function EstimateDetail({ id }: { id: number }) {
  const [, setSelectedDateTime] = useState<Date | string>();
  const validId = id || 1;
  const { data, isLoading, error } = useGroomerEstimateDetailQuery(validId);

  if (isLoading) return <div>Loading...</div>;
  if (error || !data) return <div>데이터를 불러오지 못했습니다.</div>;

  const petData = data || [];
  console.log(petData);
  const petAttributes = [petData.birth, petData.weight, petData.significant];

  const handleDateTimeChange = (dateTime: Date) => {
    setSelectedDateTime(dateTime);
  };

  return (
    <Layout>
      <div css={wrapper}>
        <AppBar />
        <UserProfile userImage={petData.userImage} userName={petData.nickname} />
        <div css={sectionDivider}></div>
        <div css={requestTitle}>
          <Text typo="subtitle1">요청상세</Text>
        </div>
        <Section title="지역">{petData.address}</Section>
        <Section title="시술 희망 날짜 및 시간">
          <DatePick onChange={handleDateTimeChange} placeholderText={petData.reservedDate} />
        </Section>
        <Section title="어떤 아이를 가꿀 예정이신가요?">
          <PetDetails image={petData.petImage} name={petData.name} attributes={petAttributes} />
        </Section>
        <Section title="원하는 미용">{petData.desiredStyle}</Section>
        <Section title="추가 요청사항">{petData.requirements}</Section>
        <div css={sectionDivider}></div>
        <AddInput title="안내 사항" placeholder="추가 안내사항을 입력해주세요." height={120} />
        <div css={button}>
          <RoundButton variant="green" size="L" fullWidth>
            예약받기
          </RoundButton>
        </div>
      </div>
    </Layout>
  );
}
