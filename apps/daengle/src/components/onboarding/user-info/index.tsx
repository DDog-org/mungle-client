import { ChangeEvent } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { ChipButton, CTAButton, Input, RoundButton, Text, useDialog } from '@daengle/design-system';
import { formatPhoneNumber } from '@daengle/services/utils';
import { ROUTES } from '~/constants/commons/routes';
import { usePostAvailableNicknameMutation } from '~/queries';
import { useUserInfoFormStore } from '~/stores/auth/user-info-form';
import { useValidateUserForm } from '~/hooks/onboarding';
import { UserInfoFormFormType } from '~/interfaces/auth';
import { location, locationButton, section, wrapper } from './index.styles';

interface Props {
  onNext?: () => void;
}

export function UserInfo({ onNext }: Props) {
  const router = useRouter();
  const { userInfoForm, setForm, setUserInfoForm } = useUserInfoFormStore();
  const { mutateAsync: postAvailableNickname } = usePostAvailableNicknameMutation();
  const validation = useValidateUserForm();

  const { open } = useDialog();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    setError,
    clearErrors,
    formState: { errors, isValid, isDirty },
  } = useForm<UserInfoFormFormType>({
    mode: 'onBlur',
    defaultValues: { ...userInfoForm.form },
  });

  const checkIsAvailableNickname = async () => {
    const nickname = watch('nickname');

    if (!nickname) {
      setError('nickname', { message: '닉네임을 입력해 주세요' });
      return;
    }

    if (nickname.length < 2 || nickname.length > 10) {
      setError('nickname', { message: '닉네임은 2글자 이상 10글자 미만으로 작성해 주세요' });
      return;
    }

    const response = await postAvailableNickname({ nickname });
    if (!response.isAvailable) {
      setError('nickname', { message: '이미 사용 중인 닉네임입니다' });
      setUserInfoForm({ ...watch(), isAvailableNickname: false });
    } else {
      setUserInfoForm({ ...watch(), isAvailableNickname: true });
    }
  };

  const onSubmit = (data: UserInfoFormFormType) => {
    if (!data.address) {
      open({
        title: '주소를 선택해 주세요',
        primaryActionLabel: '확인',
      });
      return;
    }

    if (!userInfoForm.isAvailableNickname) {
      open({
        title: '닉네임 중복검사를 진행해 주세요',
        primaryActionLabel: '확인',
      });
      return;
    }

    setUserInfoForm({ ...userInfoForm, ...watch() });
  };

  const handleNextButtonClick = () => {
    if (!isValid || !userInfoForm.isAvailableNickname || !userInfoForm?.form.address) return;

    onNext?.();
  };

  return (
    <>
      <section css={wrapper}>
        <Text typo="title1" color="black">
          회원 정보를 입력해 주세요
        </Text>

        <form css={section} onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="이름"
            placeholder="이름을 입력해 주세요"
            maxLength={10}
            {...register('username', { ...validation.username })}
            errorMessage={errors.username?.message}
          />

          <Input
            type="tel"
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
              isDirty && userInfoForm.isAvailableNickname ? '사용 가능한 닉네임입니다' : ''
            }
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
                {userInfoForm?.form.address ? (
                  <Text typo="body10" color="black">
                    {userInfoForm?.form.address}
                  </Text>
                ) : (
                  <Text typo="body10" color="gray200">
                    위치(필수)
                  </Text>
                )}
              </div>
            </RoundButton>
          </div>

          <CTAButton
            type="submit"
            onClick={handleNextButtonClick}
            disabled={!isValid || !userInfoForm.isAvailableNickname || !userInfoForm?.form.address}
          >
            다음
          </CTAButton>
        </form>
      </section>
    </>
  );
}
