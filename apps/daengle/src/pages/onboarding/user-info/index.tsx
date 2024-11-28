import { ChangeEvent } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import {
  AppBar,
  ChipButton,
  CTAButton,
  Input,
  Layout,
  RoundButton,
  Text,
} from '@daengle/design-system';
import { ROUTES } from '~/constants/routes';
import { usePostJoinWithoutPetMutation } from '~/queries';
import { PostJoinWithoutPetRequestBody } from '~/models';
import { formatPhoneNumber } from '~/utils/format';
import { location, locationButton, section, wrapper } from './index.styles';
import { useOnboardingFormStore } from './store/form';
import { useValidateUserForm } from './hooks';

// TODO: 임시 이메일
const EMAIL = 'daengle@daengle.com';

export default function UserInfo() {
  const router = useRouter();
  const { form, setForm } = useOnboardingFormStore();
  const { mutate: postJoinWithoutPet } = usePostJoinWithoutPetMutation();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<PostJoinWithoutPetRequestBody>({ defaultValues: { ...form, email: EMAIL } });

  const validation = useValidateUserForm();

  const onSubmit = (data: PostJoinWithoutPetRequestBody) => {
    if (!data.address) return;
    postJoinWithoutPet({ ...data, email: EMAIL });
  };

  return (
    <Layout>
      <AppBar />

      <form css={wrapper} onSubmit={handleSubmit(onSubmit)}>
        <Text typo="title1" color="black">
          회원 정보를 입력해 주세요
        </Text>

        <section css={section}>
          <Input
            label="이름"
            placeholder="이름을 입력해 주세요"
            {...register('username', { ...validation.username })}
            errorMessage={errors.username?.message}
          />

          <Input
            label="휴대폰 번호"
            placeholder="휴대폰 번호를 입력해 주세요"
            maxLength={13}
            {...register('phoneNumber', { ...validation.phoneNumber })}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setValue('phoneNumber', formatPhoneNumber(e.target.value))
            }
            errorMessage={errors.phoneNumber?.message}
          />

          <Input
            label="닉네임"
            placeholder="닉네임을 입력해 주세요"
            suffix={<ChipButton>중복검사</ChipButton>}
            {...register('nickname', { ...validation.nickname })}
            errorMessage={errors.nickname?.message}
          />

          <div css={location}>
            <Text typo="subtitle3" color="black">
              위치 설정
            </Text>
            <RoundButton
              variant="ghost"
              fullWidth
              type="button"
              onClick={() => {
                setForm({ ...watch() });
                router.push(ROUTES.ONBOARDING_SEARCH_ADDRESS);
              }}
            >
              <div css={locationButton}>
                {form?.address ? (
                  <Text typo="body10" color="black">
                    {form?.address}
                  </Text>
                ) : (
                  <Text typo="body10" color="gray200">
                    위치(필수)
                  </Text>
                )}
              </div>
            </RoundButton>
          </div>
        </section>

        <CTAButton type="submit">다음</CTAButton>
      </form>
    </Layout>
  );
}
