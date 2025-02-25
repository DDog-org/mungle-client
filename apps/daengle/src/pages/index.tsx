import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import {
  ActionSheet,
  AppBar,
  Layout,
  RoundButton,
  Tabs,
  Text,
  theme,
  useDialog,
} from '@daengle/design-system';
import { MainLogo, SearchIcon, SelectUnfoldInactive } from '@daengle/design-system/icons';
import { ROUTES, TABS } from '~/constants';
import { GNB } from '~/components/commons';
import { GroomerList, VetList } from '~/components/home';
import { useGetUserValidateQuery } from '~/queries';
import { useAddressStore } from '~/stores';
import dogGif from '/public/images/main-dog.gif';

const ACTION_SHEET_MENUS = [
  { id: 'groomer', label: '미용사', to: ROUTES.ESTIMATES_GROOMING },
  { id: 'vet', label: '병원', to: ROUTES.ESTIMATES_VET },
];

export default function Home() {
  const router = useRouter();

  const [activeTab, setActiveTab] = useState<string>('groomer');
  const [isActionSheetOpen, setIsActionSheetOpen] = useState<boolean>(false);

  const { data: getUserValidate } = useGetUserValidateQuery();
  const { address } = useAddressStore();
  const { open } = useDialog();

  const handleSearchAddressClick = () => {
    const isLoggedInUser = getUserValidate?.isValidateMember;
    if (isLoggedInUser) router.push(ROUTES.SEARCH_ADDRESS);
    else {
      open({
        title: '로그인 후 이용해 주세요',
        primaryActionLabel: '로그인 하기',
        onPrimaryAction: () => router.replace(ROUTES.LOGIN),
        secondaryActionLabel: '닫기',
      });
    }
  };

  const handleOpenActionSheet = () => {
    const isLoggedInUser = getUserValidate?.isValidateMember;

    if (isLoggedInUser) {
      setIsActionSheetOpen(true);
    } else {
      open({
        title: '로그인 후 이용해 주세요',
        primaryActionLabel: '로그인 하기',
        onPrimaryAction: () => router.replace(ROUTES.LOGIN),
        secondaryActionLabel: '닫기',
      });
    }
  };

  const handleCloseActionSheet = () => {
    setIsActionSheetOpen(false);
  };

  const renderContent = (activeTabId: string) => {
    switch (activeTabId) {
      case 'groomer':
        return <GroomerList />;
      case 'vet':
        return <VetList />;
      default:
        return <GroomerList />;
    }
  };

  useEffect(() => {
    const queryTab = router.query.service as string;
    if (queryTab && TABS.some((tab) => tab.id === queryTab)) {
      setActiveTab(queryTab);
    }
  }, [router.query.service]);

  const handleTabClick = (tabId: string) => {
    router.replace({ query: { service: tabId } }, undefined, { shallow: true });
    setActiveTab(tabId);
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
            <div css={addressWrapper} onClick={handleSearchAddressClick}>
              <Text tag="h1" typo="title1" color="white">
                {address.split(' ').length > 3 ? address.split(' ').slice(1).join(' ') : address}
              </Text>
              <SelectUnfoldInactive width={12} height={6} />
            </div>
            <Text tag="h1" typo="title1" color="black100">
              주변에서 찾기
            </Text>
          </div>

          <Image src={dogGif} alt="dogGif" width={150} height={150} css={daengleDog} priority />
          <RoundButton size="XL" onClick={handleOpenActionSheet}>
            견적 요청하기
          </RoundButton>
        </section>

        <section css={content}>
          <Tabs
            tabs={[...TABS]}
            renderContent={renderContent}
            activeTabId={activeTab}
            onTabClick={handleTabClick}
          />
        </section>

        {isActionSheetOpen && (
          <>
            <ActionSheet
              title="누구에게 견적을 요청할까요?"
              menus={ACTION_SHEET_MENUS.map((menu) => ({
                ...menu,
                onClick: () => router.push(menu.to()),
              }))}
              onClose={() => setIsActionSheetOpen(false)}
            />
            <div css={overlay} onClick={handleCloseActionSheet} />
          </>
        )}
      </div>
      <GNB />
    </Layout>
  );
}

const wrapper = css`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;

  width: 100%;

  background: linear-gradient(rgb(93 134 254 / 100%), rgb(255 255 255 / 0%) 50%);
`;

const topSection = css`
  position: relative;

  margin-top: 60px;
  padding: 5px 18px 18px;
`;

const textBox = css`
  display: flex;
  flex-direction: column;
  gap: 6px;

  margin-bottom: 24px;
`;

const addressWrapper = css`
  display: flex;
  align-items: center;
  gap: 6px;

  cursor: pointer;
`;

const daengleDog = css`
  position: absolute;
  right: 20px;
  bottom: 54px;
  z-index: 3;
`;

const content = css`
  display: flex;
  flex-direction: column;
  flex: 1;

  width: 100%;
  padding: 18px 0 ${theme.size.gnbHeight};
  border-radius: 30px 30px 0 0;

  background-color: ${theme.colors.white};
`;

const overlay = css`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background: ${theme.colors.grayOpacity200};
`;
