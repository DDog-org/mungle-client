import { Controller, useForm } from 'react-hook-form';
import {
  wrapper,
  profileImageWrapper,
  profileEditButtonBox,
  inputWrapper,
  nickNameWrapper,
  readOnlyTextBox,
} from './index.styles';
import { AppBar, ChipButton, CTAButton, Input, Layout, Text } from '@daengle/design-system';
import Image from 'next/image';
import {
  useGetUserProfileInfoQuery,
  usePostAvailableNicknameMutation,
  usePostUserProfileInfoEditMutation,
} from '~/queries';
import { UserProfileInfoEditForm, UserProfileInfoEditFormType } from './interfaces';
import useValidateUserForm from './hooks/use-validate-user-form';
import { useUserInfoFormStore } from '~/pages/onboarding/store/user-info-form';

export default function EditProfile() {
  const { userInfoForm, setUserInfoForm } = useUserInfoFormStore();

  const { data: getUserProfileInfo } = useGetUserProfileInfoQuery();
  const { mutateAsync: postAvailableNickname } = usePostAvailableNicknameMutation();
  const { mutateAsync: postUserProfileInfoEdit } = usePostUserProfileInfoEditMutation();
  const validation = useValidateUserForm();

  const {
    handleSubmit,
    watch,
    register,
    setError,
    clearErrors,
    formState: { errors, isValid },
  } = useForm<UserProfileInfoEditForm>({
    mode: 'onChange',
  });

  const checkIsAvailableNickname = async () => {
    const nickname = watch('nickname');

    if (!nickname) {
      setError('nickname', { message: '닉네임을 입력해 주세요' });
    }

    if (nickname.length < 2 || nickname.length > 10) {
      setError('nickname', { message: '닉네임은 2글자 이상 10글자 미만으로 작성해 주세요' });
    }

    const response = await postAvailableNickname({ nickname });
    if (response.isAvailable) {
      setError('nickname', { message: '이미 사용중인 닉네임입니다' });
    } else {
      setUserInfoForm({ ...watch(), isAvailableNickname: true });
    }
  };

  const onSubmit = (data: UserProfileInfoEditForm) => {
    console.log('UserProfileInfoFormType Data:', data);
  };

  const handleEditButtonClick = async () => {
    if (!isValid || !userInfoForm.isAvailableNickname) return;

    await postUserProfileInfoEdit(userInfoForm);
  };

  return (
    <Layout isAppBarExist={false}>
      <AppBar />
      <section css={wrapper}>
        <Text tag="h1" typo="title1" color="black">
          사용자 정보 등록
        </Text>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div css={profileImageWrapper}>
            <Image src="/icons/profile_image.svg" alt="프로필 이미지" width={116} height={116} />
            <button css={profileEditButtonBox}>
              <Text typo="body4" color="gray400">
                프로필 사진 변경하기
              </Text>
            </button>
          </div>
          <div>
            <section css={inputWrapper}>
              <div css={nickNameWrapper}>
                <Input
                  label="닉네임"
                  placeholder="닉네임을 입력해 주세요"
                  maxLength={10}
                  suffix={
                    <ChipButton onClick={checkIsAvailableNickname} type="button">
                      중복검사
                    </ChipButton>
                  }
                  {...register('nickname', { ...validation.nickname })}
                  onChange={() => {
                    setUserInfoForm({ ...watch(), isAvailableNickname: false });
                    clearErrors();
                  }}
                  errorMessage={errors.nickname?.message}
                  confirmMessage={
                    userInfoForm.isAvailableNickname ? '사용 가능한 닉네임입니다' : ''
                  }
                />
              </div>
              <div css={readOnlyTextBox}>
                <Text typo="subtitle3">이름</Text>
                <Text typo="body3" color="gray400">
                  {getUserProfileInfo?.username}
                </Text>
              </div>
              <div css={readOnlyTextBox}>
                <Text typo="subtitle3">휴대폰번호</Text>
                <Text typo="body3" color="gray400">
                  {getUserProfileInfo?.phoneNumber}
                </Text>
              </div>
              <div css={readOnlyTextBox}>
                <Text typo="subtitle3">이메일</Text>
                <Text typo="body3" color="gray400">
                  {getUserProfileInfo?.email}
                </Text>
              </div>
            </section>
          </div>

          <CTAButton
            type="submit"
            onClick={handleEditButtonClick}
            disabled={!isValid || !userInfoForm.isAvailableNickname}
          >
            수정하기
          </CTAButton>
        </form>
      </section>
    </Layout>
  );
}
