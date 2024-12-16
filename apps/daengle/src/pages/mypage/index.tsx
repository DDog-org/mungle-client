import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import { Layout, Text, theme } from '@daengle/design-system';
import { ROUTES } from '~/constants/commons';
import { GNB } from '~/components/commons';
import { DefaultImage, MypageAddButton, ProfileArrowButton } from '@daengle/design-system/icons';
import Image from 'next/image';
import { PetInfoForm } from '~/interfaces/auth';
import { useGetUserMypageQuery } from '~/queries';

export default function Mypage() {
  const [petInfos, setPetInfos] = useState<PetInfoForm[] | null>(null);
  const [selectedPetId, setSelectedPetId] = useState<number>(0);
  const { data: getUserMypage } = useGetUserMypageQuery();

  const router = useRouter();

  const handleGoToClick = () => {
    router.push(ROUTES.MYPAGE_USER_INFO_EDIT);
  };
  const handlePetCreateClick = () => {
    router.push(ROUTES.MYPAGE_PET_PROFILE_CREATE);
  };
  const handlePetEditClick = () => {
    router.push(ROUTES.MYPAGE_PET_PROFILE_EDIT);
  };
  const handlePetSelect = (petId: number) => {
    setSelectedPetId(petId);
    router.push(ROUTES.MYPAGE_PET_PROFILE);
  };
  useEffect(() => {
    if (getUserMypage?.petInfos) {
      setPetInfos(getUserMypage.petInfos);
    }
  }, [getUserMypage]);
  return (
    <Layout isAppBarExist={false}>
      <div css={wrapper}>
        <Text tag="h1" typo="title1" color="black">
          마이페이지
        </Text>
        <section css={profileWrapper}>
          {getUserMypage?.image ? (
            <Image
              src={getUserMypage.image}
              alt="프로필 이미지"
              width={68}
              height={68}
              css={profileImageStyle}
            />
          ) : (
            <DefaultImage css={profileImageStyle} />
          )}
          <Text typo="title2" css={nickname}>
            {getUserMypage?.nickname}
          </Text>
          <button css={editButton} onClick={handleGoToClick}>
            <Text typo="body5" color="gray500">
              편집
            </Text>
          </button>
        </section>
        <section css={requestInfoWrapper}>
          <div css={requestInfo} onClick={() => router.push(ROUTES.ESTIMATES)}>
            <Text typo="body10" color="gray600">
              견적 요청 내역
            </Text>
            <Text typo="title1" color="blue200">
              {getUserMypage?.estimateCount}
            </Text>
          </div>
          <div css={requestInfo} onClick={() => router.push(ROUTES.MYPAGE_REVIEWS)}>
            <Text typo="body10" color="gray600">
              리뷰
            </Text>
            <Text typo="title1" color="blue200">
              {getUserMypage?.reviewCount}
            </Text>
          </div>
        </section>
        <section css={petProfileEdit}>
          <Text tag="h2" typo="subtitle1">
            내 아이
          </Text>
          <button css={editButton} onClick={handlePetEditClick}>
            <Text typo="body5" color="gray500">
              편집
            </Text>
          </button>
        </section>
      </div>
      <div css={petProfileWrapper}>
        <section css={section}>
          <div css={petList}>
            {petInfos && petInfos.length > 0 ? (
              <>
                <div css={petList}>
                  {petInfos.map((pet, index) => (
                    <div
                      key={pet.petId}
                      css={[petProfile, petItemStyle(index)]}
                      onClick={() => handlePetSelect(pet.petId)}
                    >
                      {pet.petImage ? (
                        <Image
                          src={pet.petImage}
                          alt="반려견 프로필"
                          width={86}
                          height={86}
                          css={profileImage}
                        />
                      ) : (
                        <DefaultImage css={profileImage} />
                      )}
                      <Text typo="body1" css={petName}>
                        {pet.petName}
                      </Text>
                    </div>
                  ))}
                  <div css={petProfileAdd} onClick={handlePetCreateClick}>
                    <div css={addButton}>
                      <MypageAddButton width={59} />
                    </div>
                    <Text typo="body1" color="gray400" css={petName}>
                      추가
                    </Text>
                  </div>
                </div>
              </>
            ) : (
              <div css={petTitle}>
                <Text typo="body3" color="gray400">
                  반려견 정보를 불러오지 못했습니다.
                </Text>
              </div>
            )}
          </div>
        </section>
      </div>

      <div css={line} />
      <div css={itemWrapper}>
        <div css={item} onClick={() => router.push(ROUTES.MYPAGE_PAYMENTS)}>
          <Text typo="body4" color="black">
            결제 내역
          </Text>
          <ProfileArrowButton width={4} height={8} />
        </div>
        <div css={endItem}>
          <button>
            <Text typo="body4" color="black">
              회원 탈퇴
            </Text>
          </button>
        </div>
      </div>
      <GNB />
    </Layout>
  );
}
const wrapper = css`
  padding: 38px 18px 18px;
`;
const profileWrapper = css`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 24px 0;
`;
const profileImageStyle = css`
  width: 68px;
  border-radius: 50%;
  object-fit: cover;

  background: ${theme.colors.gray200};
`;
const nickname = css`
  flex: 1;

  margin-left: 18px;
`;

const editButton = css`
  display: flex;
  align-items: center;

  padding: 6px 10px;
  border-radius: 20px;

  background: ${theme.colors.gray100};
`;
const requestInfoWrapper = css`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  margin: 0 0 27px;
  padding: 22px 0;
  border: 1px solid ${theme.colors.gray200};
  border-radius: 15px;

  background: ${theme.colors.white};
`;
const requestInfo = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;

  width: 50%;

  & + & {
    border-left: 1px solid ${theme.colors.gray200};
  }
  cursor: pointer;
`;
const petProfileEdit = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const petProfileWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const section = css`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const petList = css`
  display: flex;
  gap: 14px;
  overflow-x: scroll;
`;
const petProfile = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  cursor: pointer;
`;
const petItemStyle = (index: number) => css`
  ${index === 0 && 'padding: 0 0 0 18px;'}
`;
const profileImage = () => css`
  width: 59px;
  height: 59px;
  border-radius: 50px;

  background-color: ${theme.colors.gray200};

  transition: border 0.2s ease;
`;
const petName = css`
  transition: 0.2s ease;
`;
const line = css`
  width: 100%;
  margin: 24px 0 0;
  border: 3.5px solid ${theme.colors.gray100};
`;
const petTitle = css`
  padding: 18px;
`;

const itemWrapper = css`
  padding: 0 18px;
`;
const item = css`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 18px 0;
  border-bottom: 1px solid ${theme.colors.gray100};

  cursor: pointer;
`;
const endItem = css`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 18px 0;
`;
const addButton = css`
  display: flex;
`;

const petProfileAdd = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  padding: 0 18px 0 0;

  cursor: pointer;
`;
