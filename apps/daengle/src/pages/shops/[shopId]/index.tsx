import { AppBar, Layout, Text, theme } from '@daengle/design-system';
import {
  DefaultProfile,
  DetailCall,
  DetailLocation,
  DetailTime,
} from '@daengle/design-system/icons';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import ProfileCard from '~/components/groomers/profile-card';
import { ROUTES } from '~/constants/commons';
import { GetUserShopDetailRequestParams } from '~/models/detail';
import { useGetUserShopDetailQuery } from '~/queries/detail';

export default function ShopInfo() {
  const router = useRouter();
  const { shopId } = router.query;
  const getShopId = Number(shopId);
  const shopParams: GetUserShopDetailRequestParams = { shopId: getShopId };

  const { data: ShopDetail } = useGetUserShopDetailQuery(shopParams);

  const handleCardClick = (id: number) => {
    router.push(ROUTES.GROOMER_DETAIL(id));
  };

  console.log('ShopDetail:', ShopDetail);

  return (
    <Layout isAppBarExist={false}>
      <AppBar onBackClick={router.back} onHomeClick={() => router.push(ROUTES.HOME)} />
      <div css={wrapper}>
        <div css={imageSection(ShopDetail?.imageUrlList[0])}>
          {/* TODO: 캐러셀 기능 구현 */}
          <Text typo="title2" color="white" css={shopName}>
            {ShopDetail?.shopName}
          </Text>
        </div>
        <div css={infoBox}>
          <section css={topSection}>
            <section css={infoSection}>
              <div css={time}>
                <DetailTime width={20} />
                <Text typo="body9">
                  {/* TODO: 휴무일 받기 */}
                  매일 {ShopDetail?.startTime.substring(0, 5)} -{' '}
                  {ShopDetail?.endTime.substring(0, 5)}
                </Text>
              </div>
              <div css={call}>
                <DetailCall width={20} />
                <Text typo="body9">02-000-0000</Text>
              </div>
              <div css={address}>
                <DetailLocation width={20} />
                <Text typo="body9">{ShopDetail?.shopAddress}</Text>
              </div>
            </section>
            <div css={line} />
            <section css={infoText}>
              <Text typo="body1">소개</Text>
              <Text typo="body10">{ShopDetail?.introduction}</Text>
            </section>
          </section>
          <section css={bottomSection}>
            <div css={textBox}>
              <Text typo="title2">디자이너</Text>
              <Text typo="title2">{ShopDetail?.groomers.length}</Text>
            </div>
            <section css={groomerList}>
              {ShopDetail?.groomers.map((groomer) => (
                <ProfileCard
                  key={groomer.groomerAccountId}
                  groomerName={groomer.groomerName}
                  groomerImage={groomer.grommerImage}
                  keywords={groomer.keywords}
                  daengleMeter={groomer.daengleMeter}
                  onClick={() => handleCardClick(groomer.groomerAccountId)}
                />
              ))}
            </section>
          </section>
        </div>
      </div>
    </Layout>
  );
}

const wrapper = css`
  position: relative;

  width: 100%;
  height: 100%;

  background-color: aliceblue;
`;

const imageSection = (shopImage: string | undefined) => css`
  position: relative;

  width: 100%;
  height: 416px;

  background-image: url(${shopImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const shopName = css`
  position: absolute;
  bottom: 180px;
  left: 24px;
`;

const infoBox = css`
  position: absolute;
  bottom: 0;

  width: 100%;
  height: 540px;
  border-radius: 20px 20px 0 0;

  background-color: white;
`;

const topSection = css`
  padding: 32px 18px 0;

  border-bottom: 7px solid ${theme.colors.gray100};
`;

const infoSection = css`
  display: flex;
  flex-direction: column;
  gap: 11px;
`;

const time = css`
  display: flex;
  align-items: center;
  gap: 8px;
`;
const call = css`
  display: flex;
  align-items: center;
  gap: 8px;
`;
const address = css`
  display: flex;
  align-items: center;
  gap: 8px;

  margin-bottom: 24px;
`;

const line = css`
  height: 1px;

  background-color: ${theme.colors.gray100};
`;

const infoText = css`
  display: flex;
  flex-direction: column;
  gap: 11px;

  margin-bottom: 32px;
  padding-top: 24px;
`;

const bottomSection = css`
  padding: 24px 18px 0;
`;

const textBox = css`
  display: flex;
  gap: 4px;

  margin-bottom: 9px;
`;

const groomerList = css`
  cursor: pointer;
`;
