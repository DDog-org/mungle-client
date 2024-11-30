import { useState } from 'react';
import { Section, PetDetails, UserProfile, AddInput, DatePick } from '@daengle/services';
import { AppBar, Layout, RoundButton, Text } from '@daengle/design-system';
import { wrapper, sectionDivider, requestTitle, button } from './index.styles';

export default function Estimate() {
  const petData = {
    userImage: 'UserImage',
    nickname: '사용자 닉네임',
    address: '서울특별시 관악구',
    reservedDate: '2024-11-25 11:22:11',
    id: 1,
    petImage: 'https://via.placeholder.com/80',
    name: '강아지A',
    birth: 2001,
    weight: 'SMALL',
    significant: '특이사항 없음',
    desiredStyle: '미용 스타일',
    requirements: '추가 요구사항 없음',
  };
  const petAttributes = [petData.birth, petData.weight, petData.significant];

  const [, setSelectedDateTime] = useState<Date | null>(null);

  const handleDateTimeChange = (dateTime: Date) => {
    setSelectedDateTime(dateTime);
  };

  return (
    <Layout>
      <div css={wrapper}>
        <AppBar />
        <UserProfile userImage="https://via.placeholder.com/50" userName="왈왈" />
        <div css={sectionDivider}></div>
        <div css={requestTitle}>
          <Text typo="subtitle1">요청상세</Text>
        </div>
        <Section title="지역">{petData.address}</Section>
        <Section title="시술 희망 날짜 및 시간">
          <DatePick onChange={handleDateTimeChange} />
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
