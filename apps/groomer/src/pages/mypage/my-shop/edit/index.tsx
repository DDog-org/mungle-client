import {
  AppBar,
  ChipToggleButton,
  CTAButton,
  ImageInput,
  Input,
  Layout,
  Text,
  theme,
} from '@daengle/design-system';
import { useS3 } from '@daengle/services/hooks';
import { formatPhoneNumberWithRegionNumber } from '@daengle/services/utils';
import { css } from '@emotion/react';
import router from 'next/router';
import { ChangeEvent, useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useGetGroomerShopInfoQuery, usePatchGroomerShopInfoMutation } from '~/queries/auth';
import dayjs, { Dayjs } from 'dayjs';
import { GROOMER_DAT_OFF } from '~/constants/mypage';
import TimePickerComponent from '~/components/mypage/time-picker';
import { useValidateMyPageForm } from '~/hooks/mypage/use-validate-mypage-form';
import { GroomerProfileForm } from '~/interfaces';

export default function groomerProfile() {
  const [selectedStartTime, setSelectedStartTime] = useState<Dayjs | null>(null);
  const [selectedEndTime, setSelectedEndTime] = useState<Dayjs | null>(null);
  const [selectedDaysOff, setSelectedDaysOff] = useState<string[]>([]);

  const { data: getGroomerShopInfo } = useGetGroomerShopInfoQuery();
  const { mutateAsync: patchGroomerShopInfo } = usePatchGroomerShopInfoMutation();

  const validation = useValidateMyPageForm();
  const { uploadToS3 } = useS3({ targetFolderPath: 'vet/licenses' });

  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm<GroomerProfileForm>({
    defaultValues: {
      phoneNumber: getGroomerShopInfo?.phoneNumber,
      closedDays: getGroomerShopInfo?.closedDays,
    },
    mode: 'onChange',
  });

  useEffect(() => {
    if (getGroomerShopInfo) {
      setSelectedDaysOff(getGroomerShopInfo.closedDays || null);
      setValue('phoneNumber', getGroomerShopInfo.phoneNumber || '');
      setSelectedStartTime(
        getGroomerShopInfo.startTime ? dayjs(getGroomerShopInfo.startTime, 'HH:mm') : null
      );
      setSelectedEndTime(
        getGroomerShopInfo.endTime ? dayjs(getGroomerShopInfo.endTime, 'HH:mm') : null
      );
    }
  }, [getGroomerShopInfo, setValue]);

  const handleStartTimeChange = (newValue: Dayjs | null) => {
    setSelectedStartTime(newValue);
  };
  const handleEndTimeChange = (newValue: Dayjs | null) => {
    setSelectedEndTime(newValue);
  };

  const handleDaysOffToggle = (day: string) => {
    setSelectedDaysOff((prev) =>
      prev?.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };
  const onSubmit = async (data: GroomerProfileForm) => {
    const imageUrlList = await uploadToS3(data.imageUrlList);
    if (!imageUrlList?.length) return;

    if (!selectedStartTime || !selectedEndTime) {
      alert('시작 시간과 종료 시간을 모두 선택해야 수정할 수 있습니다.');
      return;
    }

    const startTimeString = selectedStartTime?.format('HH:mm');
    const endTimeString = selectedEndTime?.format('HH:mm');

    if (!getGroomerShopInfo?.shopId) return;

    await patchGroomerShopInfo({
      ...data,
      shopId: getGroomerShopInfo?.shopId,
      imageUrlList,
      startTime: startTimeString,
      endTime: endTimeString,
      closedDays: selectedDaysOff,
    });
  };

  return (
    <Layout isAppBarExist={true}>
      <AppBar onBackClick={router.back} backgroundColor={theme.colors.white} />
      <div css={wrapper}>
        <Text tag="h1" typo="title1" color="black">
          마이샵 관리
        </Text>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ul css={inputWrapper}>
            <section css={profileImageWrapper}>
              <Text tag="h2" typo="subtitle3">
                이미지 첨부
              </Text>
              <ImageInput
                maxLength={10}
                {...register('imageUrlList', { ...validation.imageUrls })}
                onChange={(files) => setValue('imageUrlList', files, { shouldValidate: true })}
              />
            </section>

            <li css={readOnlyTextBox}>
              <Text tag="h2" typo="subtitle3">
                매장명
              </Text>
              <Text typo="body3" color="gray400">
                {getGroomerShopInfo?.shopName}
              </Text>
            </li>

            <li css={readOnlyTextBox}>
              <Text tag="h2" typo="subtitle3">
                영업시간
              </Text>
              <TimePickerComponent
                onStartTimeChange={handleStartTimeChange}
                onEndTimeChange={handleEndTimeChange}
                startTime={selectedStartTime}
                endTime={selectedEndTime}
              />
            </li>

            <li css={readOnlyTextBox}>
              <Text tag="h2" typo="subtitle3">
                휴무일
              </Text>

              <div css={chipButton}>
                {GROOMER_DAT_OFF.map((item) => {
                  return (
                    <ChipToggleButton
                      type="button"
                      key={item.value}
                      size="circle"
                      isPartnerSelected={selectedDaysOff.includes(item.value)}
                      onClick={() => handleDaysOffToggle(item.value)}
                    >
                      {item.label}
                    </ChipToggleButton>
                  );
                })}
              </div>
            </li>

            <li css={readOnlyTextBox}>
              <Input
                label="전화번호"
                placeholder="병원 전화번호를 입력해 주세요"
                service="partner"
                maxLength={13}
                {...register('phoneNumber', { ...validation.phoneNumber })}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setValue('phoneNumber', formatPhoneNumberWithRegionNumber(e.target.value))
                }
                errorMessage={errors.phoneNumber?.message}
              />
            </li>
            <li css={readOnlyTextBox}>
              <Text tag="h2" typo="subtitle3">
                위치
              </Text>
              <Text typo="body3" color="gray400">
                {getGroomerShopInfo?.address} {getGroomerShopInfo?.detailAddress}
              </Text>
            </li>
            <li css={readOnlyTextBox}>
              <Text tag="h2" typo="subtitle3">
                소개
              </Text>
              <Controller
                name="introduction"
                control={control}
                render={({ field }) => (
                  <>
                    <textarea
                      css={detailInput}
                      placeholder="소개글을 작성해주세요"
                      defaultValue={getGroomerShopInfo?.introduction}
                      value={field.value}
                      onChange={field.onChange}
                    />
                  </>
                )}
              />
            </li>
          </ul>
          <CTAButton type="submit" service="partner">
            수정하기
          </CTAButton>
        </form>
      </div>
    </Layout>
  );
}
export const wrapper = css`
  display: flex;
  flex-direction: column;

  padding: 18px;
`;
const profileImageWrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;

  margin: 40px 0 0;
`;
const inputWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 32px;

  margin: 0 0 104px;
  padding: 0;
`;
const readOnlyTextBox = css`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const detailInput = css`
  height: 136px;
  padding: 14px;
  border-radius: 10px;

  background-color: ${theme.colors.gray100};

  ::placeholder {
    color: ${theme.colors.gray200};
    font-size: ${theme.typo.body9};
  }
`;
const chipButton = css`
  display: flex;
  gap: 7px;
`;
