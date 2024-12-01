import { AppBar, Layout, RoundButton, Text } from '@daengle/design-system';
import {
  wrapper,
  section,
  box,
  dateSelect,
  registerPet,
  circle,
  selectBox,
  selectItem,
  textField,
} from './index.styles';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider, DatePicker, TimePicker } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from 'dayjs';
import 'dayjs/locale/ko';

export default function EstimateCreate() {
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs());
  const [selectedTime, setSelectedTime] = useState<Dayjs | null>(dayjs());

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
        <Text typo="title1" color="black">
          견적요청서
        </Text>
        <section css={section}>
          <Text typo="subtitle3" color="black">
            지역
          </Text>
          <Text typo="title2" color="black">
            서울 강남구 역삼동
          </Text>
        </section>
        <section css={section}>
          <Text typo="subtitle3" color="black">
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
          <Text typo="subtitle3" color="black">
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
          <Text typo="subtitle3" color="black">
            원하는 미용
          </Text>
          <div css={selectBox}>
            <div css={selectItem} onClick={toggleActive}>
              <Text typo="body5" color="gray400">
                전체 클리핑
              </Text>
              <Image
                src="/images/grooming_full_clipping.svg"
                alt="전체 클리핑"
                width={129}
                height={107}
              />
            </div>
            <div css={selectItem}>
              <Text typo="body5" color="gray400">
                전체 클리핑 + 얼굴 컷
              </Text>
              <Image
                src="/images/grooming_face_cut.svg"
                alt="전체 클리핑 + 얼굴 컷"
                width={129}
                height={107}
              />
            </div>
          </div>
          <div css={selectBox}>
            <div css={selectItem}>
              <Text typo="body5" color="gray400">
                전체 가위컷
              </Text>
              <Image
                src="/images/grooming_full_scissor_cut.svg"
                alt="전체 가위컷"
                width={129}
                height={107}
              />
            </div>
            <div css={selectItem}>
              <Text typo="body5" color="gray400">
                스포팅 + 얼굴 컷
              </Text>
              <Image
                src="/images/grooming_spotting.svg"
                alt="스포팅 + 얼굴 컷"
                width={129}
                height={107}
              />
            </div>
          </div>
        </section>
        <section css={section}>
          <Text typo="subtitle3" color="black">
            추가 요청사항
          </Text>
          <textarea placeholder="추가 요청사항을 입력해주세요" css={textField} />
        </section>
        <RoundButton variant="primary" size="L" fullWidth={true} disabled>
          요청하기
        </RoundButton>
      </div>
    </Layout>
  );
}
