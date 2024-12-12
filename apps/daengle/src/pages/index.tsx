import { AppBar, Layout, RoundButton, Tabs, Text, theme } from '@daengle/design-system';
import { MainLogo, SearchIcon, SelectUnfoldInactive } from '@daengle/design-system/icons';
import { DaengleDog } from '@daengle/design-system/images';
import { css } from '@emotion/react';
import { GNB } from '~/components/commons';
import { GroomerListComponent } from '~/components/main/groomer-list-component';
import { VetListComponent } from '~/components/main/vet-list-component';

const TABS = [
  {
    id: 'groomer',
    label: '미용사',
  },
  {
    id: 'vet',
    label: '병원',
  },
];

export default function Home() {
  const renderContent = (activeTabId: string) => {
    switch (activeTabId) {
      case 'groomer':
        return <GroomerListComponent />;
      case 'vet':
        return <VetListComponent />;
      default:
        return <GroomerListComponent />;
    }
  };

  return (
    <Layout isAppBarExist={false}>
      <AppBar
        prefix={<MainLogo width={95} height={25} />}
        suffix={<SearchIcon width={19} height={20} />}
      />
      <div css={wrapper}>
        <section css={topSection}>
          <div css={textBox}>
            <div css={address}>
              <Text tag="h1" typo="title1" color="white">
                강남구 역삼동
              </Text>
              <SelectUnfoldInactive width={12} height={6} />
            </div>
            <Text tag="h1" typo="title1" color="black100">
              주변에서 찾기
            </Text>
          </div>
          <DaengleDog width={149} height={132} css={daengleDog} />
          <RoundButton size="XL">견적 요청하기</RoundButton>
        </section>
        <section css={content}>
          <Tabs tabs={TABS} renderContent={renderContent} />
        </section>
      </div>
      <GNB />
    </Layout>
  );
}

const wrapper = css`
  overflow: hidden;

  width: 100%;
  height: 100%;

  background: linear-gradient(rgb(93 134 254 / 100%), rgb(255 255 255 / 0%) 50%);
`;

const topSection = css`
  position: relative;

  margin-top: 60px;
  padding: 18px;
`;

const textBox = css`
  display: flex;
  flex-direction: column;
  gap: 6px;

  margin-bottom: 33px;
`;

const address = css`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const daengleDog = css`
  position: absolute;
  right: 25px;
  bottom: 65px;
  z-index: 3;
`;

const content = css`
  width: 100%;
  height: 581px;
  padding: 18px 0;
  border-radius: 30px 30px 0 0;

  background-color: ${theme.colors.white};
`;
