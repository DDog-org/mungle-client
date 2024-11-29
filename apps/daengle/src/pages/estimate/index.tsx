import { AppBar, RoundButton, Text } from '@daengle/design-system';
import { wrapper, header, section, buttonGroup } from './index.styles';
import { DesignerInfo, Receipt } from '@daengle/services';

export default function Detail() {
  const designerData = {
    id: 1,
    name: '미용사A',
    shopName: '꼬꼬마 관리샵',
    image: '/local-image.jpg',
    daengleMeter: 30,
    tags: ['대형견', '노견'],
    address: '서울특별시 관악구',
    reservedDate: '2024-11-25(월) 11:33',
    desiredStyle: '대형견 - 전체 가위컷',
    overallOpinion: '아이의 편안함을 위해 조심스럽게 진행하겠습니다. 추가 의견 없음.',
  };

  return (
    <div css={wrapper}>
      <AppBar isDefaultBackground={false} />
      <header css={header}>
        <Text typo="title1">견적 상세</Text>
      </header>
      <DesignerInfo profile={designerData} />
      <section css={section}>
        <Text typo="body1">소개</Text>
        <Text typo="body10" tag="div">
          모든 견종의 가위컷에 자신이 있으며, 특히, 푸들 테디베어컷, 비숑 귀툭튀컷, 포메 곰돌이컷 등
          디자인컷 완성도에 자신이 있습니다.
        </Text>
      </section>
      <Receipt receipt={designerData} />
      <div css={buttonGroup}>
        <RoundButton variant="primary" size="S" fullWidth>
          <Text typo="body1" color="white">
            채팅 문의
          </Text>
        </RoundButton>
        <RoundButton
          variant="primary"
          size="S"
          fullWidth
          onClick={() => alert('예약금 결제를 진행합니다.')}
        >
          <Text typo="body1" color="white">
            예약금 결제
          </Text>
        </RoundButton>
      </div>
    </div>
  );
}
