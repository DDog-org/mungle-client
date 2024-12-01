import { AppBar, Layout, RoundButton, Text } from '@daengle/design-system';
import { wrapper, header, section, buttonGroup } from './index.styles';
import { DesignerInfo, Receipt, useGroomerDetailQuery } from '@daengle/services';
import { useRouter } from 'next/router';

export default function Detail() {
  const router = useRouter();
  const { id } = router.query;
  const validId = Number(id) || 1;

  const { data, isLoading, error } = useGroomerDetailQuery(validId);
  if (isLoading) return <div>Loading...</div>;
  if (error || !data) return <div>데이터를 불러오지 못했습니다.</div>;

  const detailData = data || [];

  const designerData = {
    id: validId,
    name: detailData.name,
    shopName: detailData.shopName,
    image: detailData.image,
    daengleMeter: detailData.daengleMeter,
    tags: detailData?.tags || [],
  };

  return (
    <Layout>
      <div css={wrapper}>
        <AppBar isDefaultBackground={false} />
        <div css={header}>
          <Text typo="title1">견적 상세</Text>
        </div>
        <DesignerInfo profile={designerData} />
        <section css={section}>
          <Text typo="body1">소개</Text>
          <Text typo="body10" tag="div">
            모든 견종의 가위컷에 자신이 있으며, 특히, 푸들 테디베어컷, 비숑 귀툭튀컷, 포메 곰돌이컷
            등 디자인컷 완성도에 자신이 있습니다.
          </Text>
        </section>
        <Receipt
          items={[
            { title: '지역', receipt: detailData.address },
            { title: '일정', receipt: detailData.reservedDate },
            { title: '서비스', receipt: detailData.desiredStyle },
            { title: '추가 소견', receipt: detailData.overallOpinion, typo: 'body4' },
          ]}
        />
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
    </Layout>
  );
}
