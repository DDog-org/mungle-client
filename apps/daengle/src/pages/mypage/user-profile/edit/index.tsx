import { useForm } from 'react-hook-form';
import {
  wrapper,
  profileImageWrapper,
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
import { useS3 } from '@daengle/services/hooks';
import { DefaultImage } from '@daengle/design-system/icons';
import { ImageInputBox } from '../../../../components/mypage/user-profile/edit';

interface Props {
  onChange?: (files: File[]) => void;
  defaultValue?: File[];
  maxLength?: number;
}

export default function EditProfile({ onChange, defaultValue = [] }: Props) {
  const { data: getUserProfileInfo } = useGetUserProfileInfoQuery();
  const { mutateAsync: postAvailableNickname } = usePostAvailableNicknameMutation();
  const { mutate: postUserProfileInfoEdit } = usePostUserProfileInfoEditMutation();
  const validation = useValidateUserForm();

  const { uploadToS3, deleteFromS3 } = useS3({ targetFolderPath: 'user/profile-images' });
  const {
    handleSubmit,
    watch,
    register,
    setError,
    setValue,
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
    const image = await uploadToS3(data.image);
    if (!image?.length) return;
    postUserProfileInfoEdit({ ...data, image });
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
            />
            {/* <Image src={(data.image===null) ?? DEFAULT_IMAGE_URL} alt="프로필 이미지" width={116} height={116} /> */}
            {/* <TextButton css={profileEditButtonBox} onClick={handleImageEditClick}>
                <Text typo="body4" color="gray400">
                  프로필 사진 변경하기
                </Text>
              </TextButton> */}
          </div>

          <ul css={inputWrapper}>
            <li css={nickNameWrapper}>
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
            </li>
            <li css={readOnlyTextBox}>
              <Text tag="h2" typo="subtitle3">
                이름
              </Text>
              <Text typo="body3" color="gray400">
                {getUserProfileInfo?.username}
              </Text>
            </li>
            <li css={readOnlyTextBox}>
              <Text tag="h2" typo="subtitle3">
                휴대폰번호
              </Text>
              <Text typo="body3" color="gray400">
                {getUserProfileInfo?.phoneNumber}
              </Text>
            </li>
            <li css={readOnlyTextBox}>
              <Text tag="h2" typo="subtitle3">
                이메일
              </Text>
              <Text typo="body3" color="gray400">
                {getUserProfileInfo?.email}
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
