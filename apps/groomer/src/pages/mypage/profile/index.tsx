import { useEffect, useState } from 'react';
import router from 'next/router';
import { css } from '@emotion/react';
import { useS3 } from '@daengle/services/hooks';
import { TextField, theme } from '@daengle/design-system';
import { AppBar, CTAButton, ImageInputBox, Layout, Text, Input } from '@daengle/design-system';
import { useForm } from 'react-hook-form';
import { useValidateGroomerForm } from '~/hooks';
import { GroomerModifyPageForm } from '~/interfaces';
import { useGetGroomerModifyPageQuery, usePatchGroomerInfoMutation } from '~/queries';
import { ROUTES } from '~/constants';
import { convertURLToFile } from '@daengle/services/utils';

export default function EditProfile() {
  const { data: groomerInfo } = useGetGroomerModifyPageQuery();
  const { mutate: patchGroomerInfo } = usePatchGroomerInfoMutation();

  const { uploadToS3, deleteFromS3 } = useS3({ targetFolderPath: 'groomer/profile-images' });

  const [profileImage, setProfileImage] = useState<File | null>(null);

  useEffect(() => {
    const fetchFile = async () => {
      if (groomerInfo?.image) {
        const file = await convertURLToFile(groomerInfo.image, 'profile-image');
        setProfileImage(file);
      }
    };

    fetchFile();
  }, [groomerInfo?.image]);

  const validation = useValidateGroomerForm();
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm<GroomerModifyPageForm>({
    mode: 'onChange',
    defaultValues: {
      image: profileImage,
      introduction: groomerInfo?.introduction,
      instagramId: groomerInfo?.instagramId || '',
    },
  });

  const onSubmit = async (data: GroomerModifyPageForm) => {
    let profileImage = null;

    if (data.image) {
      if (groomerInfo?.image) {
        await deleteFromS3(groomerInfo.image.split('/').pop()!);
      }

      profileImage = await uploadToS3([data.image]);
    }

    const payload = {
      image: profileImage?.[0] ?? groomerInfo?.image ?? '',
      introduction: data.introduction || null,
      instagramId: data.instagramId || null,
    };

    patchGroomerInfo(payload);
  };

  return (
    <Layout isAppBarExist={true}>
      <AppBar
        onBackClick={router.back}
        backgroundColor={theme.colors.white}
        onHomeClick={() => router.push(ROUTES.HOME)}
      />

      <form onSubmit={handleSubmit(onSubmit)}>
        <div css={wrapper}>
          <Text typo="title1">프로필 관리</Text>
          <div css={profileImageWrapper}>
            <ImageInputBox
              onChange={(files) => setValue('image', files, { shouldValidate: true })}
            />
          </div>
          <section css={inputWrapper}>
            <div css={readOnlyTextBox}>
              <Text typo="subtitle1" color="black">
                프로필 정보
              </Text>
            </div>

            <div css={readOnlyTextBox}>
              <Text typo="subtitle3">이름</Text>
              <Text typo="body8" color="gray400">
                {groomerInfo?.name}
              </Text>
            </div>

            <div css={readOnlyTextBox}>
              <Text typo="subtitle3">휴대폰번호</Text>
              <Text typo="body8" color="gray400">
                {groomerInfo?.phoneNumber}
              </Text>
            </div>

            <div css={readOnlyTextBox}>
              <Text typo="subtitle3">이메일</Text>
              <Text typo="body8" color="gray400">
                {groomerInfo?.email}
              </Text>
            </div>

            <div css={readOnlyTextBox}>
              <Input
                service="partner"
                label="인스타그램 아이디"
                prefix="@"
                maxLength={30}
                {...register('instagramId', { ...validation.instagramId })}
                onChange={(e) => setValue('instagramId', e.target.value, { shouldValidate: true })}
                errorMessage={errors.instagramId?.message}
              />
            </div>

            <div css={textareaWrapper}>
              <Text typo="subtitle3">소개</Text>
              <TextField
                placeholder="소개글을 작성해 주세요"
                maxLength={50}
                rows={4}
                {...register('introduction', { ...validation.introduction })}
              />
            </div>
          </section>
        </div>

        <div css={line} />

        <div css={footerWrapper}>
          <div css={licenseWrapper}>
            <Text typo="subtitle3">자격증 관리</Text>

            <div css={licenseBox}>
              {groomerInfo?.licenses?.map((license) => (
                <div css={licenseStyle} key={license.name}>
                  <Text typo="body4" color="green200">
                    {license.name}
                  </Text>
                  <Text typo="body5" color="gray400">
                    {license.acquisitionDate}
                  </Text>
                </div>
              ))}
            </div>
          </div>
        </div>

        <CTAButton type="submit" service="partner">
          수정하기
        </CTAButton>
      </form>
    </Layout>
  );
}

const wrapper = css`
  height: auto;
  padding: 18px;
`;
const footerWrapper = css`
  padding: 18px 18px 141px;
`;
const profileImageWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 32px 0 40px;
`;
const inputWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const readOnlyTextBox = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const textareaWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const line = css`
  width: 100%;
  margin: 32px 0;
  border: 3.5px solid ${theme.colors.gray100};

  background-color: ${theme.colors.gray100};
`;

const licenseWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const licenseBox = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const licenseStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 18px;
  border: 1px solid ${theme.colors.green200};
  border-radius: 12px;

  background-color: ${theme.colors.green100};

  ::placeholder {
    color: ${theme.colors.black};
    font-size: ${theme.typo.body9};
  }
`;
