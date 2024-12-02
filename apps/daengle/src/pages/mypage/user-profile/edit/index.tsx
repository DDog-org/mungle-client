import { useForm } from 'react-hook-form';
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
import { UserProfileInfoEditForm } from './interfaces';
import useValidateUserForm from './hooks/use-validate-user-form';

export default function EditProfile() {
  const { data: getUserProfileInfo } = useGetUserProfileInfoQuery();
  const { mutateAsync: postAvailableNickname } = usePostAvailableNicknameMutation();
  const { mutateAsync: postUserProfileInfoEdit } = usePostUserProfileInfoEditMutation();
  const validation = useValidateUserForm();

  const {
    handleSubmit,
    watch,
    register,
    setError,
    formState: { errors, isValid },
  } = useForm<UserProfileInfoEditForm>({
    mode: 'onChange',
  });

  const checkIsAvailableNickname = async () => {
    const nickname = watch('nickname');
    if (!nickname) return;

    const response = await postAvailableNickname({ nickname });

    if (response.isAvailable) {
      console.log('');
    } else {
      setError('nickname', { message: '이미 사용중인 닉네임입니다' });
    }
  };

  const onSubmit = async (data: UserProfileInfoEditForm) => {
    await postUserProfileInfoEdit(data);
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
                  errorMessage={errors.nickname?.message}
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

          <CTAButton type="submit" disabled={!isValid}>
            수정하기
          </CTAButton>
        </form>
      </section>
    </Layout>
  );
}
