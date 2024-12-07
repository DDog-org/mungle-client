import { AppBar, CTAButton, Layout, Text } from '@daengle/design-system';
import { theme } from '@daengle/design-system';
import { css } from '@emotion/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import DatePickerComponent from '~/components/estimate/DatePickerComponent';
import { usePostCareMutation, usePostVetUserInfoMutation } from '~/queries/estimate';
import { petInfos, postVetUserInfoResponse } from '~/models/daengle';
import { useEffect, useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';

export default function EstimateCare() {
  const router = useRouter();
  const [address, setAddress] = useState<string>('');
  const [petInfos, setPetInfos] = useState<petInfos[] | null>(null);
  const [selectedPetId, setSelectedPetId] = useState<number>(0);
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs());
  const [selectedTime, setSelectedTime] = useState<Dayjs | null>(dayjs());
  const [symptoms, setSymptoms] = useState<string>('');
  const [requirements, setRequirements] = useState<string>('');
  const [ButtonActive, setButtonActive] = useState<boolean>(false);

  const vetId = 9; //TODO: 쿼리스트링 값 읽어오기(groomerId 값이 담겨있는지 null인지 쿼리 스트링으로 판단)
  const reservedDate = `${selectedDate?.format('YYYY-MM-DD')} ${selectedTime?.format('HH:mm:ss')}`;

  const { mutateAsync: postVetUserInfo } = usePostVetUserInfoMutation();
  const { mutate: postCare } = usePostCareMutation();

  useEffect(() => {
    // 정보 불러오기
    handlePostVetUserInfo();
  }, []);

  useEffect(() => {
    // 모든 필드 값이 유효한지 확인
    const isFormValid =
      selectedPetId !== 0 &&
      address !== '' &&
      selectedDate !== null &&
      selectedTime !== null &&
      symptoms !== '' &&
      requirements !== '';

    setButtonActive(isFormValid);
  }, [selectedPetId, address, selectedDate, selectedTime, symptoms, requirements]);

  const handlePostVetUserInfo = async () => {
    try {
      const response: postVetUserInfoResponse = await postVetUserInfo({
        vetId,
      });
      console.log('response: ', response);

      if (response?.address) setAddress(response.address);
      if (response?.petInfos) setPetInfos(response.petInfos);
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

  const handlePetSelect = (petId: number) => {
    if (petInfos) {
      if (selectedPetId === petId) setSelectedPetId(0);
      else setSelectedPetId(petId);
    }
  };

  const handleSymptomsChange = (e) => {
    setSymptoms(e.target.value);
  };

  const handleRequirementsChange = (e) => {
    setRequirements(e.target.value);
  };

  // 데이터 전달
  const handleSubmit = () => {
    const requestBody = {
      vetId: vetId,
      petId: selectedPetId,
      address: address,
      reservedDate: reservedDate,
      symptoms: symptoms,
      requirements: requirements,
    };

    postCare(requestBody, {
      onSuccess: (data) => {
        console.log('data: ', data);
        console.log('vetId:', vetId),
          console.log('petId:', selectedPetId),
          console.log('address:', address),
          console.log('reservedDate:', reservedDate),
          console.log('symptoms:', symptoms),
          console.log('requirements:', requirements),
          router.push({
            pathname: '/estimate/complete',
          });
      },
      onError: (error) => {
        console.error('Error submitting form:', error);
      },
    });
  };

  return (
    <Layout>
      <AppBar />
      <div css={wrapper}>
        <Text tag="h1" typo="title1" color="black">
          견적 요청서
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
          <DatePickerComponent onDateChange={handleDateChange} onTimeChange={handleTimeChange} />
        </section>
        <section css={section}>
          <Text tag="h2" typo="subtitle3" color="black">
            어떤 아이가 진료를 받을 예정인가요?
          </Text>
          {petInfos ? (
            <div css={petList}>
              {petInfos.map((pet) => (
                <div key={pet.petId} css={petProfile} onClick={() => handlePetSelect(pet.petId)}>
                  <Image
                    // src={pet.image} TO DO: null 값인 경우 default Image 사용하도록
                    src="/images/default_image.png"
                    alt="반려견 프로필"
                    width={86}
                    height={86}
                    css={profileImage({ isSelected: selectedPetId === pet.petId })}
                  />
                  <Text
                    typo="body1"
                    color={selectedPetId === pet.petId ? 'blue200' : 'gray400'}
                    css={petName}
                  >
                    {pet.name}
                  </Text>
                </div>
              ))}
            </div>
          ) : (
            <div css={registerPet}>
              <div css={circle}>
                <Image
                  src="/icons/add_button.svg"
                  alt="등록 버튼"
                  width={12}
                  height={12}
                  onClick={() => {
                    router.push({
                      pathname: '/user/pet',
                    });
                  }}
                />
              </div>
              <Text typo="body11" color="gray400">
                반려견을 등록해주세요
              </Text>
            </div>
          )}
        </section>
        <section css={section}>
          <Text tag="h2" typo="subtitle3" color="black">
            증상
          </Text>
          <textarea
            placeholder="증상을 입력해주세요"
            css={textField}
            value={symptoms}
            onChange={handleSymptomsChange}
          />
        </section>
        <section css={section}>
          <Text tag="h2" typo="subtitle3" color="black">
            추가 요청사항
          </Text>
          <textarea
            placeholder="추가 요청사항을 입력해주세요"
            css={textField}
            value={requirements}
            onChange={handleRequirementsChange}
          />
        </section>
        <CTAButton onClick={handleSubmit} disabled={!ButtonActive}>
          요청하기
        </CTAButton>
      </div>
    </Layout>
  );
}

/////////// emotion(css) ///////////

const wrapper = css`
  display: flex;
  flex-direction: column;
  gap: 32px;

  width: 100%;
  padding: 18px 18px 104px;
`;

const section = css`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const box = css`
  display: flex;
  gap: 15px;
`;

const dateSelect = css`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  position: relative;

  width: 100%;
  height: 36px;

  cursor: pointer;
`;

const registerPet = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;

  width: 100%;
  height: 109px;
  border: 1px solid ${theme.colors.gray200};
  border-radius: 10px;
`;

const circle = css`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;
  border: 1px solid ${theme.colors.gray200};
  border-radius: 20px;

  cursor: pointer;

  :hover {
    background-color: ${theme.colors.gray100};

    transition: 0.3s;
  }
`;

const textField = css`
  width: 100%;
  height: 135px;
  padding: 18px;
  border-radius: 10px;

  background-color: ${theme.colors.gray100};
  text-align: justify;

  ::placeholder {
    color: ${theme.colors.gray300};
    size: ${theme.typo.body9};
  }
`;
