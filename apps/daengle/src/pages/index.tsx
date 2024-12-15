import { AppBar, Layout, RoundButton, Tabs, Text, theme } from '@daengle/design-system';
import { MainLogo, SearchIcon, SelectUnfoldInactive } from '@daengle/design-system/icons';
import { DaengleDog } from '@daengle/design-system/images';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { GNB } from '~/components/commons';
import ActionSheet from '~/components/main/action-sheet';
import { GroomerListComponent } from '~/components/main/groomer-list-component';
import { VetListComponent } from '~/components/main/vet-list-component';
import { ROUTES } from '~/constants/commons';
import { useGetUserValidateQuery } from '~/queries';
import { useAddressFormStore } from '~/stores/main';

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
  // TODO: 무한스크롤 구현
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const { data: getUserValidate } = useGetUserValidateQuery();
  const { addressForm } = useAddressFormStore();

  const { tab = 'groomer' } = router.query;

  const handleTabChange = (activeTabId: string) => {
    router.push({ pathname: '/', query: { tab: activeTabId } }, undefined, {
      shallow: true,
    });
  };

  const handleSearchAddress = () => {
    if (getUserValidate) {
      router.push(ROUTES.SEARCH_ADDRESS);
    } else {
      // TODO: 모달창으로 변경
      alert('로그인 해주세요');
    }
  };

  const handleOpenActionSheet = () => {
    if (getUserValidate) {
      setIsVisible(true);
    } else {
      // TODO: 모달창으로 변경
      alert('로그인 해주세요');
    }
  };

  const handleCloseActionSheet = () => {
    setIsVisible(false);
  };

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
        suffix={
          <SearchIcon
            width={19}
            height={20}
            onClick={() => router.push(ROUTES.SEARCH)}
            cursor="pointer"
          />
        }
      />
      <div css={wrapper}>
        <section css={topSection}>
          <div css={textBox}>
            <div css={address} onClick={handleSearchAddress}>
              <Text tag="h1" typo="title1" color="white">
                {addressForm}
              </Text>
              <SelectUnfoldInactive width={12} height={6} />
            </div>
            <Text tag="h1" typo="title1" color="black100">
              주변에서 찾기
            </Text>
          </div>
          <DaengleDog width={149} height={132} css={daengleDog} />
          <RoundButton size="XL" onClick={handleOpenActionSheet}>
            견적 요청하기
          </RoundButton>
        </section>
        <section css={content}>
          <Tabs
            tabs={TABS}
            renderContent={renderContent}
            activeTabId={String(tab)}
            onChange={handleTabChange}
          />
        </section>
        {isVisible && (
          <div css={actionSheetBox}>
            <ActionSheet />
            <div css={overlay} onClick={handleCloseActionSheet} />
          </div>
        )}
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

  cursor: pointer;
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

const actionSheetBox = css`
  position: relative;

  width: 100%;
`;

const overlay = css`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background: ${theme.colors.grayOpacity200};
`;
