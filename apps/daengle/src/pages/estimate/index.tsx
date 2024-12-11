import { useState } from 'react';
import { useRouter } from 'next/router';
import { EmptyState, Tab } from '@daengle/services/components';
import { Layout, Text, TextButton } from '@daengle/design-system';
import { SelectUnfoldInactive } from '@daengle/design-system/icons';
import { theme } from '@daengle/design-system';
import { css } from '@emotion/react';
import { useUserEstimateListQuery } from '~/queries';
import { CardList, OptionSelector, ProfileSelector } from '~/components/estimate';
import { GNB } from '~/components/commons';

export default function EstimateList() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<string>('미용사');
  const [isDesignation, setIsDesignation] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPetIndex, setSelectedPetIndex] = useState(0);
  const { data, isLoading, error } = useUserEstimateListQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error || !data) return <div>에러가 발생했습니다.</div>;

  const cardData = data || [];

  const selectedPet = cardData?.petInfos?.[selectedPetIndex];
  const type = activeTab === '미용사' ? 'grooming' : 'care';
  const estimateData = selectedPet
    ? (() => {
        const groomingData =
          selectedPet?.groomingEstimates
            ?.filter((item) => (isDesignation ? item.proposal === 'DESIGNATION' : true))
            .map((item) => ({
              ...item,
              id: item.groomingEstimateId,
            })) || [];

        const careData =
          selectedPet?.careEstimates
            ?.filter((item) => (isDesignation ? item.proposal === 'DESIGNATION' : true))
            .map((item) => ({
              ...item,
              id: item.careEstimateId,
            })) || [];

        return activeTab === '미용사' ? groomingData : careData;
      })()
    : [];

  const petInfos = cardData?.petInfos || [];
  const hasOptions = !!(cardData?.petInfos && cardData.petInfos.length > 0);
  const isEmptyEstimates = selectedPet
    ? !selectedPet.groomingEstimates?.length && !selectedPet.careEstimates?.length
    : false;

  const handleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const handleTogglePage = (isDesignationPage: boolean) => {
    setIsDesignation(isDesignationPage);
    handleModal();
  };
  const handleNavigate = (path: string) => {
    router.push(path);
  };

  const handleCardClick = (itemId: number) => {
    router.push(`/estimate/detail/${itemId}?type=${type}`);
  };

  return (
    <Layout isAppBarExist={false}>
      <div css={wrapper}>
        <div css={headerContainer} onClick={handleModal}>
          <Text typo="title1">{isDesignation ? '바로 예약' : '견적'}</Text>
          <SelectUnfoldInactive width="14px" height="8px" color="black" />
        </div>
        {isModalOpen && (
          <>
            <div css={modalOverlay} onClick={handleModal}></div>
            <div css={modalContent}>
              <TextButton onClick={() => handleTogglePage(false)}>
                <Text typo="subtitle1" css={modalItem(isDesignation === false)}>
                  견적
                </Text>
              </TextButton>
              <div css={line}></div>
              <TextButton onClick={() => handleTogglePage(true)}>
                <Text typo="subtitle1" css={modalItem(isDesignation === true)}>
                  바로 예약
                </Text>
              </TextButton>
            </div>
          </>
        )}
        <Tab items={['미용사', '병원']} activeItem={activeTab} onChange={handleTabChange} />
        {hasOptions ? (
          <>
            <ProfileSelector
              petInfos={petInfos}
              selectedPetIndex={selectedPetIndex}
              onSelectPet={setSelectedPetIndex}
            />
            <OptionSelector />
            {estimateData && estimateData.length > 0 ? (
              <CardList
                estimateData={estimateData}
                isDesignation={isDesignation}
                onCardClick={handleCardClick}
              />
            ) : (
              <EmptyState isEmptyEstimates={isEmptyEstimates} hasOptions={hasOptions} />
            )}
          </>
        ) : (
          <EmptyState isEmptyEstimates={false} hasOptions={hasOptions} />
        )}
        <GNB />
      </div>
    </Layout>
  );
}

const wrapper = css`
  min-height: 100%;
  padding-bottom: 104px;

  background-color: ${theme.colors.background};
`;

const headerContainer = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;

  margin-top: 4px;
  padding: 18px 34px;

  cursor: pointer;
`;

const line = css`
  width: 100%;
  height: 1px;

  background: ${theme.colors.gray100};
`;

const modalItem = (isDesignation: boolean) => css`
  width: 100%;
  border: none;

  color: ${isDesignation ? theme.colors.blue200 : theme.colors.gray400};
  text-align: center;

  cursor: pointer;

  :hover {
    color: ${theme.colors.blue200};
  }
`;

const modalOverlay = css`
  position: fixed;
  inset: 0;

  z-index: 100;

  background: ${theme.colors.grayOpacity300};
`;

const modalContent = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 19px;
  position: fixed;
  bottom: 0;
  z-index: 101;

  width: 100%;
  max-width: ${theme.size.maxWidth};
  padding: 21px 18px;
  border-radius: 20px 20px 0 0;

  background: white;

  animation: slide-up 0.3s ease-in-out;

  @keyframes slide-up {
    from {
      transform: translateY(100%);
    }

    to {
      transform: translateY(0);
    }
  }
`;
