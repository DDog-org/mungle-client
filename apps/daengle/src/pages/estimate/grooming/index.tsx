import { AppBar, CTAButton, Layout, RoundButton, Text } from '@daengle/design-system';
import {
  wrapper,
  section,
  box,
  dateSelect,
  registerPet,
  circle,
  selectBox,
  textField,
} from './index.styles';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider, DatePicker, TimePicker } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from 'dayjs';
import 'dayjs/locale/ko';
import EstimateSelectComponent from '~/components/estimate';
import { usePostUserPetsInfoMutation } from '~/queries/estimates';
import { postUserPetsInfoResponse } from '~/models/daengle';
import { postUserPetsInfo } from '~/apis';

export default function EstimateCreate() {
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs());
  const [selectedTime, setSelectedTime] = useState<Dayjs | null>(dayjs());
  const [address, setAddress] = useState<string>('');

  const groomerId = 1;

  useEffect(() => {
    handlePostUserPetsInfo();
  }, []);

  const { mutateAsync: postUserPetsInfo } = usePostUserPetsInfoMutation();

  const handlePostUserPetsInfo = async () => {
    try {
      const response: postUserPetsInfoResponse = await postUserPetsInfo({
        groomerId,
      });
      console.log('response: ', response);

      if (response?.address) setAddress(response.address);
    } catch (error) {
      console.error('Error posting user pets info:', error);
    }
  };

  const handleDateChange = (newValue: Dayjs | null) => {
    setSelectedDate(newValue);
  };
  const handleTimeChange = (newValue: Dayjs | null) => {
    setSelectedTime(newValue);
  };

  return (
    <Layout>
      <AppBar />
      <div css={wrapper}>
        <Text tag="h1" typo="title1" color="black">
          견적요청서
        </Text>
        <section css={section}>
          <Text tag="h2" typo="subtitle3" color="black">
            지역
          </Text>
          <Text typo="title2" color="black">
            {address || '주소 불러오는 중..(ᐡ- ﻌ •ᐡ)'}
          </Text>
        </section>
        <section css={section}>
          <Text tag="h2" typo="subtitle3" color="black">
            시술 희망 날짜 및 시간
          </Text>
          <div css={box}>
            <div css={dateSelect}>
              <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">
                <DatePicker
                  format="YYYY.MM.DD"
                  value={selectedDate}
                  onChange={handleDateChange}
                  slotProps={{
                    textField: {
                      size: 'small',
                      InputProps: {
                        sx: {
                          borderRadius: '30px',
                          input: { color: '#5D86FE', textAlign: 'center' },
                          fontSize: '13px',
                        },
                      },
                    },
                  }}
                />
              </LocalizationProvider>
            </div>
            <div css={dateSelect}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <TimePicker
                  value={selectedTime}
                  onChange={handleTimeChange}
                  slotProps={{
                    textField: {
                      size: 'small',
                      InputProps: {
                        sx: {
                          borderRadius: '30px',
                          input: { color: '#5D86FE', textAlign: 'center' },
                          fontSize: '13px',
                        },
                      },
                    },
                  }}
                  sx={{ borderRadius: '30px' }}
                />
              </LocalizationProvider>
            </div>
          </div>
        </section>
        <section css={section}>
          <Text tag="h2" typo="subtitle3" color="black">
            어떤 아이를 가꿀 예정이신가요?
          </Text>
          <div css={registerPet}>
            <div css={circle}>
              <Image
                src="/icons/add_button.svg"
                alt="등록 버튼"
                width={12}
                height={12}
                onClick={() => {
                  router.push({
                    pathname: '/mypage/pet-profile/edit',
                  });
                }}
              />
            </div>
            <Text typo="body11" color="gray400">
              반려견을 등록해주세요
            </Text>
          </div>
        </section>
        <section css={section}>
          <Text tag="h2" typo="subtitle3" color="black">
            원하는 미용
          </Text>
          <div css={selectBox}>
            <EstimateSelectComponent name="전체 클리핑" src="/images/grooming_full_clipping.svg" />
            <EstimateSelectComponent
              name="전체 클리핑 + 얼굴 컷"
              src="/images/grooming_face_cut.svg"
            />
          </div>
          <div css={selectBox}>
            <EstimateSelectComponent
              name="전체 가위컷"
              src="/images/grooming_full_scissor_cut.svg"
            />
            <EstimateSelectComponent name="스포팅 + 얼굴 컷" src="/images/grooming_spotting.svg" />
          </div>
        </section>
        <section css={section}>
          <Text tag="h2" typo="subtitle3" color="black">
            추가 요청사항
          </Text>
          <textarea placeholder="추가 요청사항을 입력해주세요" css={textField} />
        </section>
        <CTAButton disabled>요청하기</CTAButton>
      </div>
    </Layout>
  );
}
