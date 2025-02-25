import {
  AppBar,
  ChipToggleButton,
  CTAButton,
  ImageInput,
  Input,
  Layout,
  Text,
  theme,
  useToast,
} from '@daengle/design-system';
import { useS3 } from '@daengle/services/hooks';
import { formatPhoneNumberWithRegionNumber } from '@daengle/services/utils';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { ChangeEvent, useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useGetGroomerShopInfoQuery, usePatchGroomerShopInfoMutation } from '~/queries/auth';
import dayjs, { Dayjs } from 'dayjs';
import { DAY_OFF } from '~/constants/mypage';
import TimePickerComponent from '~/components/mypage/time-picker';
import { GroomerProfileForm } from '~/interfaces';
import { useValidateMyPageForm } from '~/hooks/mypage/use-validate-mypage-form';
import { ROUTES } from '~/constants';

export default function groomerProfile() {
  const router = useRouter();
  const { showToast } = useToast();

  const [selectedStartTime, setSelectedStartTime] = useState<Dayjs | null>(null);
  const [selectedEndTime, setSelectedEndTime] = useState<Dayjs | null>(null);
  const [selectedDaysOff, setSelectedDaysOff] = useState<string[]>([]);
  const [imageUrlList, setImageUrlList] = useState<File[]>([]);

  const { data: getGroomerShopInfo } = useGetGroomerShopInfoQuery();
  const { mutateAsync: patchGroomerShopInfo } = usePatchGroomerShopInfoMutation();

  const validation = useValidateMyPageForm();
  const { uploadToS3 } = useS3({ targetFolderPath: 'vet/licenses' });

  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors, isValid },
  } = useForm<GroomerProfileForm>({
    defaultValues: {
      imageUrlList: [],
      phoneNumber: getGroomerShopInfo?.phoneNumber,
      closedDays: getGroomerShopInfo?.closedDays,
    },
    mode: 'onChange',
  });

  async function convertUrlsToFiles(urls: string[]): Promise<File[]> {
    const filePromises = urls.map(async (url) => {
      const response = await fetch(url);
      const blob = await response.blob();
      const fileName = url.split('/').pop() || 'uploaded-image';
      return new File([blob], fileName, { type: blob.type });
    });

    return Promise.all(filePromises);
  }

  useEffect(() => {
    async function initializeForm() {
      if (getGroomerShopInfo) {
        setSelectedDaysOff(getGroomerShopInfo.closedDays || []);
        setValue('phoneNumber', getGroomerShopInfo.phoneNumber || '');
        setSelectedStartTime(
          getGroomerShopInfo.startTime ? dayjs(getGroomerShopInfo.startTime, 'HH:mm') : null
        );
        setSelectedEndTime(
          getGroomerShopInfo.endTime ? dayjs(getGroomerShopInfo.endTime, 'HH:mm') : null
        );

        const files = await convertUrlsToFiles(getGroomerShopInfo.imageUrlList || []);
        setImageUrlList(files);
      }
    }

    initializeForm();
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
    const uploadedImageUrls = await uploadToS3(imageUrlList);
    if (!uploadedImageUrls?.length) {
      alert('이미지를 업로드하지 못했습니다.');
      return;
    }

    if (!selectedStartTime || !selectedEndTime) {
      alert('시작 시간과 종료 시간을 모두 선택해야 수정할 수 있습니다.');
      return;
    }

    const startTimeString = selectedStartTime.format('HH:mm');
    const endTimeString = selectedEndTime.format('HH:mm');

    if (!getGroomerShopInfo?.shopId) return;

    await patchGroomerShopInfo({
      ...data,
      shopId: getGroomerShopInfo.shopId,
      imageUrlList: uploadedImageUrls,
      startTime: startTimeString,
      endTime: endTimeString,
      closedDays: selectedDaysOff,
    });

    router.push(ROUTES.MYPAGE);
    showToast({ title: '마이샵 정보가 수정되었어요' });
  };

  return (
    <Layout isAppBarExist={true}>
      <AppBar
        onBackClick={router.back}
        onHomeClick={() => router.push(ROUTES.HOME)}
        backgroundColor={theme.colors.white}
      />
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
                defaultValue={imageUrlList}
                onChange={(files) => {
                  setImageUrlList(files);
                }}
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
                {DAY_OFF.map((item) => {
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
          <CTAButton type="submit" service="partner" disabled={!isValid}>
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
