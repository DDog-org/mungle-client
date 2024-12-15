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

export default function ShopInfo() {
  const router = useRouter();
  const array = [1, 2, 3, 4, 5];

  const handleCardClick = (id: number) => {
    router.push(ROUTES.GROOMER_DETAIL(id));
  };

  return (
    <Layout isAppBarExist={false}>
      <AppBar onBackClick={router.back} onHomeClick={() => router.push(ROUTES.HOME)} />
      <div css={wrapper}>
        <div css={imageSection}>
          {/* TODO: 캐러셀 기능 구현 */}
          <Text typo="title2" color="white" css={shopName}>
            꼬꼬마 미용샵
          </Text>
        </div>
        <div css={infoBox}>
          <section css={topSection}>
            <section css={infoSection}>
              <div css={time}>
                <DetailTime width={20} />
                <Text typo="body9">매일 10:00 - 20:00</Text>
              </div>
              <div css={call}>
                <DetailCall width={20} />
                <Text typo="body9">02-000-0000</Text>
              </div>
              <div css={address}>
                <DetailLocation width={20} />
                <Text typo="body9">서울특별시 강남구 언주로152길 10</Text>
              </div>
            </section>
            <div css={line} />
            <section css={infoText}>
              <Text typo="body1">소개</Text>
              <Text typo="body10">
                사랑하는 반려동물의 아름다움을 책임지는 든든한 파트너
                <br />
                정성과 전문성으로 반려동물에게 최고의 미용 서비스를 제공합니다.
              </Text>
            </section>
          </section>
          <section css={bottomSection}>
            <div css={textBox}>
              <Text typo="title2">디자이너</Text>
              <Text typo="title2">5</Text>
            </div>
            <section css={groomerList}>
              {array.map(() => (
                <ProfileCard onClick={() => handleCardClick(3)} />
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

const imageSection = css`
  position: relative;

  width: 100%;
  height: 416px;

  background-image: url('/icons/pet-profile/edit_image.jpeg');
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
