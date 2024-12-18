import { useForm } from 'react-hook-form';
import { AppBar, ChipButton, CTAButton, Input, Layout, Text, theme } from '@daengle/design-system';
import {
  useGetUserProfileInfoQuery,
  usePostAvailableNicknameMutation,
  usePatchUserInfoMutation,
} from '~/queries';
import { UserProfileInfoEditForm } from '~/interfaces/auth';
import { useValidateUserForm } from '~/hooks/mypage';
import { useS3 } from '@daengle/services/hooks';
import { ImageInputBox } from '~/components/mypage/user-profile/imageInput';
import router from 'next/router';
import { ROUTES } from '~/constants/commons';
import { css } from '@emotion/react';

export default function EditProfile() {
  const { data: getUserInfo } = useGetUserProfileInfoQuery();
  const { mutateAsync: postAvailableNickname } = usePostAvailableNicknameMutation();
  const { mutate: patchUserInfo } = usePatchUserInfoMutation();
  const validation = useValidateUserForm();

  const { uploadToS3, deleteFromS3 } = useS3({ targetFolderPath: 'user/profile-images' });

  const {
    handleSubmit,
    watch,
    register,
    setError,
    setValue,
    clearErrors,
    formState: { errors, isValid },
  } = useForm<UserProfileInfoEditForm>({
    mode: 'onChange',
    defaultValues: {
      image: null,
      nickname: '',
      isAvailableNickname: false,
    },
  });

  const checkIsAvailableNickname = async () => {
    const nickname = watch('nickname');
    if (!nickname) {
      setError('nickname', { message: '닉네임을 입력해주세요.' });
      setValue('isAvailableNickname', false);
      return;
    }

    if (nickname.length < 2 || nickname.length > 10) {
      setError('nickname', { message: '닉네임은 2글자 이상 10글자 미만으로 작성해 주세요' });
      setValue('isAvailableNickname', false);
      return;
    }

    const response = await postAvailableNickname({ nickname });
    if (response.data.response.isAvailable) {
      setValue('isAvailableNickname', true);
    } else {
      setError('nickname', { message: '이미 사용 중인 닉네임입니다.' });
      setValue('isAvailableNickname', false);
    }
  };

  const onSubmit = async (data: UserProfileInfoEditForm) => {
    let imageString = '';

    if (getUserInfo?.image) {
      const fileName = getUserInfo.image.split('/').pop();
      if (fileName) {
        await deleteFromS3(fileName);
      }
    }

    if (data.image) {
      const uploadedImages = await uploadToS3([data.image]);
      if (uploadedImages && uploadedImages.length > 0) {
        imageString = uploadedImages[0] ?? '';
      }
    } else {
      imageString = getUserInfo?.image || '';
    }

    if (imageString != undefined) {
      patchUserInfo({ ...data, image: imageString });
    }
    router.push(ROUTES.MYPAGE);
  };
  const handleNicknameChange = () => {
    setValue('isAvailableNickname', false);
    clearErrors('nickname');
  };

  return (
    <Layout isAppBarExist={true}>
      <AppBar
        onBackClick={router.back}
        onHomeClick={() => router.push(ROUTES.HOME)}
        backgroundColor={theme.colors.white}
      />
      <section css={wrapper}>
        <Text tag="h1" typo="title1" color="black">
          사용자 프로필
        </Text>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div css={profileImageWrapper}>
            <ImageInputBox
              onChange={(files) => setValue('image', files, { shouldValidate: true })}
              defaultValue={getUserInfo?.image || ''}
            />
          </div>

          <ul css={inputWrapper}>
            <li css={nickNameWrapper}>
              <Input
                label="닉네임"
                placeholder={getUserInfo?.nickname}
                maxLength={10}
                suffix={
                  <ChipButton onClick={checkIsAvailableNickname} type="button">
                    중복검사
                  </ChipButton>
                }
                {...register('nickname', {
                  ...validation.nickname,
                  onChange: handleNicknameChange,
                })}
                errorMessage={errors.nickname?.message}
                confirmMessage={watch('isAvailableNickname') ? '사용 가능한 닉네임입니다.' : ''}
              />
            </li>
            <li css={readOnlyTextBox}>
              <Text tag="h2" typo="subtitle3">
                이름
              </Text>
              <Text typo="body3" color="gray400">
                {getUserInfo?.username}
              </Text>
            </li>
            <li css={readOnlyTextBox}>
              <Text tag="h2" typo="subtitle3">
                휴대폰번호
              </Text>
              <Text typo="body3" color="gray400">
                {getUserInfo?.phoneNumber}
              </Text>
            </li>
            <li css={readOnlyTextBox}>
              <Text tag="h2" typo="subtitle3">
                이메일
              </Text>
              <Text typo="body3" color="gray400">
                {getUserInfo?.email}
              </Text>
            </li>
          </ul>

          <CTAButton type="submit" disabled={!isValid || !watch('isAvailableNickname')}>
            수정하기
          </CTAButton>
        </form>
      </section>
    </Layout>
  );
}

export const wrapper = css`
  padding: 18px;
`;

export const profileImageWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 32px 0 40px;
`;
export const inputWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 32px;

  margin: 0;
  padding: 0;
`;
export const nickNameWrapper = css`
  display: flex;
  align-items: flex-end;
`;

export const readOnlyTextBox = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
