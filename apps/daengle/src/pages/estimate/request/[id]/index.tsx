import { AppBar, Layout, RoundButton, Text } from '@daengle/design-system';
import { wrapper, header, footer } from './index.styles';
import { PetImage, Section } from '~/components/estimate';

export default function RequestEstimate() {
  const handleRequest = () => {
    alert('견적을 그만 받으시겠습니까?');
  };
  return (
    <Layout>
      <AppBar />
      <div css={wrapper}>
        <div css={header}>
          <Text typo="title1">내가 보낸 요청</Text>
        </div>
        <Section title="지역">
          <Text typo="title2">서울 강남구 역삼동</Text>
        </Section>
        <Section title="시술 희망 날짜 및 시간">
          <Text typo="title2">2024.11.17 14:00</Text>
        </Section>
        <Section title="어떤 아이를 가꿀 예정이신가요?">
          {/* TODO: 사용자 등록폼 아이 프로필 부분 컴포넌트로 통일 시키기 */}
          <PetImage petname="가이" />
        </Section>
        <Section title="원하는 미용">
          <Text typo="title2">전체 가위컷</Text>
        </Section>
        <Section title="추가 요청사항">
          <Text typo="subtitle1">없음</Text>
        </Section>
        <div css={footer}>
          <RoundButton
            service="daengle"
            size="L"
            variant="primary"
            fullWidth
            onClick={handleRequest}
          >
            <Text typo="subtitle2" color="white">
              견적 그만 받기
            </Text>
          </RoundButton>
        </div>
      </div>
    </Layout>
  );
}
