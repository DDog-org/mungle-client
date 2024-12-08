import { useForm } from 'react-hook-form';
import {
  wrapper,
  profileImageWrapper,
  inputWrapper,
  nickNameWrapper,
  readOnlyTextBox,
} from './index.styles';
import { AppBar, ChipButton, CTAButton, Input, Layout, Text } from '@daengle/design-system';
import {
  useGetUserProfileInfoQuery,
  usePostAvailableNicknameMutation,
  usePatchUserInfoMutation,
} from '~/queries';
import { UserProfileInfoEditForm } from './interfaces';
import useValidateUserForm from './hooks/use-validate-user-form';
import { useS3 } from '@daengle/services/hooks';
import { ImageInputBox } from '../../../../components/mypage/user-profile/edit';

export default function EditProfile() {
  const { data: getUserInfo } = useGetUserProfileInfoQuery();
  const { mutateAsync: postAvailableNickname } = usePostAvailableNicknameMutation();
  const { mutate: patchUserInfo } = usePatchUserInfoMutation();
  const validation = useValidateUserForm();

  const { uploadToS3 } = useS3({ targetFolderPath: 'user/profile-images' });
  const {
    handleSubmit,
    watch,
    register,
    setError,
    setValue,
    formState: { errors, isValid },
  } = useForm<UserProfileInfoEditForm>({
    mode: 'onChange',
    defaultValues: {
      image: null,
    },
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
    let imageString = '';
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
                {...register('nickname', { ...validation.nickname })}
                errorMessage={errors.nickname?.message}
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

          <CTAButton type="submit" disabled={!isValid}>
            수정하기
          </CTAButton>
        </form>
      </section>
    </Layout>
  );
}
