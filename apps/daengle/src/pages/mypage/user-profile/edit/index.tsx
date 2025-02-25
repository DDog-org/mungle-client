import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { css } from '@emotion/react';
import { useForm } from 'react-hook-form';
import {
  AppBar,
  ChipButton,
  CTAButton,
  Input,
  Layout,
  Text,
  theme,
  useToast,
  ImageInputBox,
} from '@daengle/design-system';
import { useS3 } from '@daengle/services/hooks';
import {
  useGetUserProfileInfoQuery,
  usePostAvailableNicknameMutation,
  usePatchUserInfoMutation,
} from '~/queries';
import { UserProfileInfoEditForm } from '~/interfaces';
import { useValidateUserNickname } from '~/hooks';
import { ROUTES } from '~/constants';
import { convertURLToFile } from '@daengle/services/utils';

export default function EditProfile() {
  const router = useRouter();
  const { showToast } = useToast();

  const { data: userInfo } = useGetUserProfileInfoQuery();
  const { mutateAsync: postAvailableNickname } = usePostAvailableNicknameMutation();
  const { mutateAsync: patchUserInfo } = usePatchUserInfoMutation();

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
    mode: 'onBlur',
    defaultValues: {
      isAvailableNickname: true,
    },
  });
  const validation = useValidateUserNickname();

  const checkIsAvailableNickname = async () => {
    const nickname = watch('nickname');

    const isSameNickname = nickname === userInfo?.nickname;
    if (isSameNickname) return;

    if (nickname.length < 2) {
      setError('nickname', { message: '닉네임은 2글자 이상 작성해 주세요' });
      return;
    }

    if (nickname.length > 10) {
      setError('nickname', { message: '닉네임은 10글자 미만으로 작성해 주세요' });
      return;
    }

    const response = await postAvailableNickname({ nickname });

    if (response.isAvailable) {
      setValue('isAvailableNickname', true);
    } else {
      !isSameNickname && setError('nickname', { message: '이미 사용 중인 닉네임이에요' });
      setValue('isAvailableNickname', false);
    }
  };

  const onSubmit = async (data: UserProfileInfoEditForm) => {
    let imageString = '';

    if (userInfo?.image) {
      const fileName = userInfo.image.split('/').pop();
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
      imageString = userInfo?.image || '';
    }

    if (imageString) {
      await patchUserInfo({
        ...data,
        nickname: data.nickname ?? userInfo?.nickname,
        image: imageString ?? null,
      });
      router.push(ROUTES.MYPAGE);
      showToast({ title: '프로필이 수정되었어요' });
    }
  };

  const handleNicknameChange = () => {
    setValue('isAvailableNickname', false);
    clearErrors('nickname');
  };

  useEffect(() => {
    if (userInfo?.nickname) {
      setValue('nickname', userInfo.nickname);
    }
  }, [userInfo?.nickname]);

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
              defaultValue={userInfo?.image!}
              onChange={(files) => setValue('image', files, { shouldValidate: true })}
            />
          </div>

          <ul css={inputWrapper}>
            <li css={nickNameWrapper}>
              <Input
                label="닉네임"
                maxLength={10}
                defaultValue={userInfo?.nickname}
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
                confirmMessage={
                  watch('nickname') !== userInfo?.nickname && watch('isAvailableNickname')
                    ? '사용 가능한 닉네임입니다.'
                    : ''
                }
              />
            </li>
            <li css={readOnlyTextBox}>
              <Text tag="h2" typo="subtitle3">
                이름
              </Text>
              <Text typo="body3" color="gray400">
                {userInfo?.username}
              </Text>
            </li>

            <li css={readOnlyTextBox}>
              <Text tag="h2" typo="subtitle3">
                휴대폰번호
              </Text>
              <Text typo="body3" color="gray400">
                {userInfo?.phoneNumber}
              </Text>
            </li>

            <li css={readOnlyTextBox}>
              <Text tag="h2" typo="subtitle3">
                이메일
              </Text>
              <Text typo="body3" color="gray400">
                {userInfo?.email}
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
  overflow-y: auto;

  padding: 18px 18px calc(${theme.size.ctaButtonHeight} + 18px) 18px;
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
