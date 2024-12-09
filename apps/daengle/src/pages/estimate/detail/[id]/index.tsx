import { AppBar, Layout, RoundButton, Text } from '@daengle/design-system';
import { wrapper, header, section, buttonGroup } from './index.styles';
import { DesignerInfo, Receipt } from '~/components/estimate';
import { useRouter } from 'next/router';
import { useEstimateCareDetailQuery, useEstimateGroomingDetailQuery } from '~/queries/estimate';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import { UserEstimateCareDetailData, UserEstimateGroomingDetailData } from '~/interfaces/estimate';
import {
  UserEstimateCareDetailRequestParams,
  UserEstimateGroomingDetailRequestParams,
} from '~/models/estimate';

type DetailData = UserEstimateGroomingDetailData | UserEstimateCareDetailData;

export default function Detail() {
  const router = useRouter();
  const { id, type } = router.query;
  const estimateId = Number(id);

  const isGrooming = type === 'grooming';
  const isCare = type === 'care';

  const groomingParams: UserEstimateGroomingDetailRequestParams = {
    groomingEstimateId: estimateId,
  };
  const careParams: UserEstimateCareDetailRequestParams = { careEstimateId: estimateId };

  const {
    data: groomingData,
    isLoading: groomerLoading,
    error: groomerError,
  } = useEstimateGroomingDetailQuery(groomingParams, isGrooming);

  const {
    data: careData,
    isLoading: careLoading,
    error: careError,
  } = useEstimateCareDetailQuery(careParams, isCare);

  if (groomerLoading || careLoading) return <div>Loading...</div>;

  if (groomerError || careError || (!groomingData && !careData)) {
    return <div>데이터를 불러오지 못했습니다.</div>;
  }

  let detailData: DetailData;
  if (isGrooming && groomingData) {
    detailData = groomingData;
  } else if (isCare && careData) {
    detailData = careData;
  } else {
    return <div>유효하지 않은 type 입니다.</div>;
  }

  const isGroomingDetail = (data: DetailData): data is UserEstimateGroomingDetailData =>
    'groomerId' in data;
  const formattedDate = dayjs(detailData.reservedDate).locale('ko').format('YYYY.MM.DD(ddd) HH:mm');
  const introduction = detailData.introduction || '소개글 없음';

  if (isGroomingDetail(detailData)) {
    const designerData = {
      id: estimateId,
      name: detailData.name,
      shopName: detailData.shopName,
      image: detailData.image,
      daengleMeter: detailData.daengleMeter,
      tags: detailData?.tags || [],
    };

    // TODO: null값에 대한 일괄 처리 필요
    const overallOpinion = detailData.overallOpinion || '없음';

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
              {introduction}
            </Text>
          </section>
          <Receipt
            items={[
              { title: '지역', receipt: detailData.address },
              { title: '일정', receipt: formattedDate },
              { title: '서비스', receipt: detailData.desiredStyle },
              { title: '추가 소견', receipt: overallOpinion, typo: 'body4' },
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
              size="M"
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
  } else {
    const vetData = {
      id: detailData.careEstimateId,
      name: detailData.name,
      shopName: detailData.name || '병원 정보 없음',
      image: detailData.image,
      daengleMeter: detailData.daengleMeter,
      tags: detailData?.tags || [],
    };
    return (
      <Layout>
        <div css={wrapper}>
          <AppBar isDefaultBackground={false} />
          <div css={header}>
            <Text typo="title1">진료 상세</Text>
          </div>
          <DesignerInfo profile={vetData} />
          <section css={section}>
            <Text typo="body1">소개</Text>
            <Text typo="body10" tag="div">
              {introduction}
            </Text>
          </section>
          <Receipt
            items={[
              { title: '지역', receipt: detailData.address },
              { title: '일정', receipt: formattedDate, hasLine: true, addTitle: '종합소견' },
              { title: '추정 병명', receipt: detailData.cause },
              { title: '추정 원인', receipt: detailData.cause },
              {
                title: '예상 진료',
                receipt: detailData.treatment || '내원하여 확인해 주세요.',
                typo: 'body4',
              },
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
              size="M"
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
}
