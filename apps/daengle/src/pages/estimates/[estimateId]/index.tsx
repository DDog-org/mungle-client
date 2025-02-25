import { AppBar, Layout, RoundButton, Text, useDialog } from '@daengle/design-system';
import { theme } from '@daengle/design-system';
import { css } from '@emotion/react';
import { PartnersInfo, Receipt } from '~/components/estimate';
import { useRouter } from 'next/router';
import { useEstimateCareDetailQuery, useEstimateGroomingDetailQuery } from '~/queries/estimate';
import { UserEstimateCareDetailData, UserEstimateGroomingDetailData } from '~/interfaces/estimate';
import {
  UserEstimateCareDetailRequestParams,
  UserEstimateGroomingDetailRequestParams,
} from '~/models/estimate';
import { ROUTES } from '~/constants/commons';
import { useOrderInfoStore } from '~/stores/payment';
import { Loading } from '~/components/commons';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import { useEffect, useState } from 'react';
import {
  useGetChatStartQuery,
  useGetUserProfileInfoQuery,
  useGetUserValidateQuery,
} from '~/queries';

type DetailData = UserEstimateGroomingDetailData | UserEstimateCareDetailData;

export default function Detail() {
  const router = useRouter();
  const estimateId = Number(router.query.estimateId);
  const { service, petId } = router.query;
  const selectedPetId = petId && Number(petId);

  const { setOrderInfo } = useOrderInfoStore();

  const isGrooming = service === 'groomer';
  const isCare = service === 'vet';

  const [isChatStart, setIsChatStart] = useState<boolean>(false);
  const { open } = useDialog();

  const groomingParams: UserEstimateGroomingDetailRequestParams = {
    groomingEstimateId: estimateId,
  };
  const careParams: UserEstimateCareDetailRequestParams = { careEstimateId: estimateId };

  const { data: isValidUser } = useGetUserValidateQuery();

  const { data: groomingData, isLoading: groomerLoading } = useEstimateGroomingDetailQuery(
    groomingParams,
    isGrooming
  );

  const { data: careData, isLoading: careLoading } = useEstimateCareDetailQuery(careParams, isCare);

  const { data: userProfile } = useGetUserProfileInfoQuery();

  const { data: chatStartInfo } = useGetChatStartQuery({
    params: { otherId: (isGrooming ? groomingData?.accountId : careData?.accountId) ?? 0 },
    enabled: isChatStart,
  });

  useEffect(() => {
    if (isChatStart && chatStartInfo?.chatRoomId) {
      router.push({
        pathname: ROUTES.CHATS_DETAIL(chatStartInfo.chatRoomId),
        query: {
          otherId: chatStartInfo.partnerId,
          service: isGrooming ? 'groomer' : 'vet',
        },
      });

      setIsChatStart(false);
    }
  }, [isChatStart, chatStartInfo?.chatRoomId]);

  if (groomerLoading || careLoading) return <Loading title="데이터를 불러오고 있어요" />;

  let detailData: DetailData;
  if (isGrooming && groomingData) {
    detailData = groomingData;
  } else if (isCare && careData) {
    detailData = careData;
  } else {
    return <div></div>;
  }

  const isGroomingDetail = (data: DetailData): data is UserEstimateGroomingDetailData =>
    'groomerId' in data;
  const formattedDate = dayjs(detailData.reservedDate).locale('ko').format('YYYY.MM.DD(ddd) HH:mm');
  const introduction = detailData.introduction || '소개글 없음';

  const handleSetOrderInfo = () => {
    const orderInfo = isGroomingDetail(detailData)
      ? {
          estimateId,
          petId: selectedPetId || undefined,
          serviceType: 'GROOMING',
          recipientId: detailData.groomerId,
          recipientImageUrl: detailData.imageUrl,
          recipientName: detailData.name,
          shopName: detailData.shopName ?? undefined,
          schedule: dayjs(detailData.reservedDate).format('YYYY-MM-DDTHH:mm:ss'),
          price: 10000,
          customerName: userProfile?.username,
          customerPhoneNumber: userProfile?.phoneNumber,
        }
      : {
          estimateId,
          petId: selectedPetId || undefined,
          serviceType: 'CARE',
          recipientId: detailData.vetId,
          recipientImageUrl: detailData.imageUrl,
          recipientName: detailData.name,
          shopName: detailData.name || '병원 정보 없음',
          schedule: dayjs(detailData.reservedDate).format('YYYY-MM-DDTHH:mm:ss'),
          price: 10000,
          customerName: userProfile?.username,
          customerPhoneNumber: userProfile?.phoneNumber,
        };

    setOrderInfo(orderInfo);
    router.push({ pathname: ROUTES.PAYMENTS_ORDER, query: { service: service } });
  };

  if (isGroomingDetail(detailData)) {
    const designerData = {
      id: estimateId,
      name: detailData.name,
      shopId: detailData.shopId,
      shopName: detailData.shopName,
      image: detailData.imageUrl,
      daengleMeter: detailData.daengleMeter,
    };

    const overallOpinion = detailData.overallOpinion || '없음';

    return (
      <Layout isAppBarExist={false}>
        <AppBar
          backgroundColor={theme.colors.background}
          onBackClick={router.back}
          onHomeClick={() => router.push(ROUTES.HOME)}
        />
        <div css={wrapper}>
          <div css={header}>
            <Text typo="title1">견적 상세</Text>
          </div>
          <PartnersInfo
            profile={designerData}
            onClick={() => {
              if (detailData.shopId) {
                router.push(ROUTES.GROOMERS_SHOPS_DETAIL(detailData.shopId));
              } else {
                alert('샵 정보를 찾을 수 없습니다.');
              }
            }}
          />
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
            <RoundButton
              variant="primaryLow"
              size="S"
              fullWidth
              onClick={
                isValidUser?.isValidateMember
                  ? () => setIsChatStart(true)
                  : () =>
                      open({
                        title: '로그인 후 이용해 주세요',
                        primaryActionLabel: '로그인 하기',
                        onPrimaryAction: () => router.replace(ROUTES.LOGIN),
                        secondaryActionLabel: '닫기',
                      })
              }
            >
              <Text typo="body1" color="blue200">
                채팅 문의
              </Text>
            </RoundButton>
            <RoundButton variant="primary" size="M" fullWidth onClick={handleSetOrderInfo}>
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
      shopName: null,
      image: detailData.imageUrl,
      daengleMeter: detailData.daengleMeter,
      tags: detailData?.tags || [],
    };
    return (
      <Layout isAppBarExist={false}>
        <AppBar
          backgroundColor={theme.colors.background}
          onBackClick={router.back}
          onHomeClick={() => router.push(ROUTES.HOME)}
        />
        <div css={wrapper}>
          <div css={header}>
            <Text typo="title1">진료 상세</Text>
          </div>
          <PartnersInfo profile={vetData} />
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
              { title: '추정 병명', receipt: detailData.diagnosis },
              { title: '추정 원인', receipt: detailData.cause },
              {
                title: '예상 진료',
                receipt: detailData.treatment || '내원하여 확인해 주세요.',
                typo: 'body4',
              },
            ]}
          />
          <div css={buttonGroup}>
            <RoundButton
              variant="primaryLow"
              size="S"
              fullWidth
              onClick={
                isValidUser?.isValidateMember
                  ? () => setIsChatStart(true)
                  : () =>
                      open({
                        title: '로그인 후 이용해 주세요',
                        primaryActionLabel: '로그인 하기',
                        onPrimaryAction: () => router.replace(ROUTES.LOGIN),
                        secondaryActionLabel: '닫기',
                      })
              }
            >
              <Text typo="body1" color="blue200">
                채팅 문의
              </Text>
            </RoundButton>
            <RoundButton variant="primary" size="M" fullWidth onClick={handleSetOrderInfo}>
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

const wrapper = css`
  display: flex;
  flex-direction: column;
  flex: 1;

  width: 100%;
  padding-top: ${theme.size.appBarHeight};

  background-color: ${theme.colors.background};
`;

const header = css`
  display: flex;
  align-items: center;

  margin: 18px;
`;

const section = css`
  display: flex;
  flex-direction: column;
  gap: 11px;

  margin: 18px 18px 32px;
`;

const buttonGroup = css`
  display: flex;
  justify-content: center;
  gap: 13px;

  margin: 32px 18px 18px;
`;
