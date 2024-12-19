import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';
import { css } from '@emotion/react';
import { Layout, Text, theme, useDialog, useToast } from '@daengle/design-system';
import { DefaultImage, NeedLoginArrow } from '@daengle/design-system/icons';
import { RegisterPetProfile } from '@daengle/services/components';
import { ROUTES } from '~/constants';
import { GNB } from '~/components/commons';
import { SelectPet, Tab } from '~/components/mypage';
import { PetInfoForm } from '~/interfaces';
import {
  useDeleteUserInfoMutation,
  useGetUserMypageQuery,
  useGetUserWithdrawInfoQuery,
} from '~/queries';

export default function Mypage() {
  const router = useRouter();

  const [petInfos, setPetInfos] = useState<PetInfoForm[] | null>(null);
  const [selectedPetId, setSelectedPetId] = useState<number>(0);

  const { data: getUserMypage, refetch: refetchUserMypage } = useGetUserMypageQuery();

  const [isWithdrawTabClick, setIsWithdrawTabClick] = useState<boolean>(false);
  const { data: getUserWithdrawInfo } = useGetUserWithdrawInfoQuery({
    enable: isWithdrawTabClick,
  });
  const { mutateAsync: deleteUserInfo } = useDeleteUserInfoMutation();

  const { showToast } = useToast();
  const { open } = useDialog();

  const isLoggedInUser = useMemo(() => !!getUserMypage?.id, [getUserMypage]);

  const openNeedLoginDialog = ({ to }: { to: string }) => {
    if (isLoggedInUser) {
      router.push(to);
    } else {
      open({
        title: '로그인 후 이용할 수 있어요',
        primaryActionLabel: '로그인하기',
        onPrimaryAction: () => router.push(ROUTES.LOGIN),
      });
    }
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
          {getUserMypage?.id ? (
            <>
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
              <button
                css={editButton}
                onClick={() => openNeedLoginDialog({ to: ROUTES.MYPAGE_USER_INFO_EDIT })}
              >
                <Text typo="body5" color="gray500">
                  편집
                </Text>
              </button>
            </>
          ) : (
            <div css={needLoginWrapper} onClick={() => router.push(ROUTES.LOGIN)}>
              <Text typo="title1" color="black100" onClick={() => router.push(ROUTES.LOGIN)}>
                로그인 해 주세요
              </Text>
              <NeedLoginArrow width={8} height={16} />
            </div>
          )}
        </section>

        <section css={requestInfoWrapper}>
          <div css={requestInfo} onClick={() => openNeedLoginDialog({ to: ROUTES.ESTIMATES })}>
            <Text typo="body10" color="gray600">
              견적 요청 내역
            </Text>
            {getUserMypage?.estimateCount ? (
              <Text typo="title1" color="blue200">
                {getUserMypage.estimateCount}
              </Text>
            ) : (
              <Text typo="title1" color="gray300">
                0
              </Text>
            )}
          </div>

          <div css={requestInfo} onClick={() => openNeedLoginDialog({ to: ROUTES.MYPAGE_REVIEWS })}>
            <Text typo="body10" color="gray600">
              리뷰
            </Text>
            {getUserMypage?.reviewCount ? (
              <Text typo="title1" color="blue200">
                {getUserMypage.reviewCount}
              </Text>
            ) : (
              <Text typo="title1" color="gray300">
                0
              </Text>
            )}
          </div>
        </section>

        <section css={petProfileEdit}>
          <Text tag="h2" typo="subtitle1">
            내 아이
          </Text>
          {getUserMypage?.petInfos && getUserMypage.petInfos.length > 0 && (
            <button
              css={editButton}
              onClick={() => openNeedLoginDialog({ to: ROUTES.MYPAGE_PET_PROFILE_EDIT })}
            >
              <Text typo="body5" color="gray500">
                편집
              </Text>
            </button>
          )}
        </section>
      </div>

      <div css={petProfileWrapper}>
        <section css={section}>
          <div css={petList}>
            {petInfos && petInfos.length > 0 ? (
              <SelectPet
                petInfos={petInfos.map((pet) => ({
                  ...pet,
                  name: pet.petName,
                  imageUrl: pet.petImage,
                }))}
                selectedPetId={selectedPetId}
                handlePetSelect={(petId: number) => setSelectedPetId(petId)}
                handlePetCreateClick={() => router.push(ROUTES.MYPAGE_PET_PROFILE_CREATE)}
              />
            ) : (
              <RegisterPetProfile
                onClick={() => openNeedLoginDialog({ to: ROUTES.MYPAGE_PET_PROFILE_CREATE })}
              />
            )}
          </div>
        </section>
      </div>

      <div css={line} />
      <div css={itemWrapper}>
        <Tab
          title="결제 내역"
          onClick={() => openNeedLoginDialog({ to: ROUTES.MYPAGE_PAYMENTS })}
        />
        <Tab title="리뷰 내역" onClick={() => openNeedLoginDialog({ to: ROUTES.MYPAGE_REVIEWS })} />
        {isLoggedInUser && (
          <>
            <Tab
              title="로그아웃"
              isArrow={false}
              onClick={() => {
                localStorage.clear();
                router.push(ROUTES.HOME);
                refetchUserMypage();
                showToast({ title: '정상적으로 로그아웃 되었어요' });
              }}
            />
            <Tab
              isArrow={false}
              variant="ghost"
              title="회원 탈퇴"
              onClick={() => {
                setIsWithdrawTabClick(true);
                const waitingForServiceCount = getUserWithdrawInfo?.waitingForServiceCount;

                open({
                  type: 'warn',
                  title: '회원 탈퇴',
                  description: waitingForServiceCount
                    ? `현재 예약 중인 서비스가 ${waitingForServiceCount}건 있어요.\n탈퇴 시 예약금은 전액환불 처리될 예정이에요.`
                    : '정말로 탈퇴하시겠어요?\n탈퇴된 계정은 다시 복구할 수 없어요',
                  primaryActionLabel: '탈퇴하기',
                  onPrimaryAction: async () => {
                    await deleteUserInfo();
                    router.push(ROUTES.HOME);
                    showToast({ title: '탈퇴 처리가 완료되었어요. 다음에 다시 만나요 🐾' });
                  },
                  secondaryActionLabel: '취소',
                });
                localStorage.clear();
              }}
            />
          </>
        )}
      </div>

      <GNB />
    </Layout>
  );
}
const wrapper = css`
  padding: 38px 18px 15px;
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

const needLoginWrapper = css`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 21px 0 16px;
`;

const requestInfoWrapper = css`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  margin: 0 0 27px;
  border: 1px solid ${theme.colors.gray200};
  border-radius: 15px;

  background: ${theme.colors.white};
`;

const requestInfo = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  overflow: hidden;

  width: 50%;
  height: 100%;
  padding: 22px 0;

  cursor: pointer;

  & + & {
    border-left: 1px solid ${theme.colors.gray200};
  }
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

  padding: 0 18px;
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

const line = css`
  width: 100%;
  margin: 24px 0 0;
  border: 3.5px solid ${theme.colors.gray100};
`;

const itemWrapper = css`
  padding: 0 18px calc(${theme.size.gnbHeight} + 18px) 18px;
`;
