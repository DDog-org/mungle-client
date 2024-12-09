import { AppBar, CTAButton, Layout, Text } from '@daengle/design-system';
import {
  wrapper,
  section,
  registerPet,
  circle,
  petList,
  petProfile,
  profileImage,
  petName,
  selectBox,
  textField,
} from './index.styles';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import dayjs, { Dayjs } from 'dayjs';
import 'dayjs/locale/ko';
import EstimateSelectComponent from '~/components/estimate/EstimateSelectComponent';
import {
  usePostUserEstimateGroomingMutation,
  usePostUserEstimateGroomerUserInfoMutation,
} from '~/queries/estimate';
import { PetInfos, PostUserEstimateGroomerUserInfoResponse } from '~/models/estimate';
import { ROUTES } from '~/constants/commons';
import { DefaultImage } from '@daengle/design-system/icons';
import DatePickerComponent from '~/components/estimate/DatePickerComponent';

export default function EstimateCreate() {
  const router = useRouter();
  const [address, setAddress] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs());
  const [selectedTime, setSelectedTime] = useState<Dayjs | null>(dayjs());
  const [petInfos, setPetInfos] = useState<PetInfos[] | null>(null);
  const [selectedPetId, setSelectedPetId] = useState<number>(0);
  const [desiredStyle, setDesiredStyle] = useState<string>('');
  const [requirements, setRequirements] = useState<string>('');
  const [ButtonActive, setButtonActive] = useState<boolean>(false);

  const { id } = router.query;
  const groomerId = Number(id);

  const reservedDate = `${selectedDate?.format('YYYY-MM-DD')} ${selectedTime?.format('HH:mm:ss')}`;

  useEffect(() => {
    // 정보 불러오기
    handlePostUserEstimateGroomerUserInfo();
  }, []);

  useEffect(() => {
    // 모든 필드 값이 유효한지 확인
    const isFormValid =
      selectedPetId !== 0 &&
      address !== '' &&
      selectedDate !== null &&
      selectedTime !== null &&
      desiredStyle !== '' &&
      requirements !== '';

    setButtonActive(isFormValid);
  }, [selectedPetId, address, selectedDate, selectedTime, desiredStyle, requirements]);

  const { mutateAsync: postUserEstimateGroomerUserInfo } =
    usePostUserEstimateGroomerUserInfoMutation();
  const { mutate: postUserEstimateGroomingRequestBody } = usePostUserEstimateGroomingMutation();

  const handlePostUserEstimateGroomerUserInfo = async () => {
    try {
      const response: PostUserEstimateGroomerUserInfoResponse =
        await postUserEstimateGroomerUserInfo({
          groomerId,
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

  const handleDesiredStyleSelect = (style: string) => {
    setDesiredStyle((prevStyle) => (prevStyle === style ? '' : style));
  };

  const handleRequirementsChange = (e) => {
    setRequirements(e.target.value);
  };

  // 데이터 전달
  const handleSubmit = () => {
    const requestBody = {
      groomerId: groomerId,
      petId: selectedPetId,
      address: address,
      reservedDate: reservedDate,
      desiredStyle: desiredStyle,
      requirements: requirements,
    };

    postUserEstimateGroomingRequestBody(requestBody, {
      onSuccess: (data) => {
        console.log('data: ', data);
        router.push(ROUTES.ESTIMATE_FORM_COMPLETE);
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
            어떤 아이를 가꿀 예정이신가요?
          </Text>
          {petInfos ? (
            <div css={petList}>
              {petInfos.map((pet) => (
                <div key={pet.petId} css={petProfile} onClick={() => handlePetSelect(pet.petId)}>
                  {pet.image == '' ? (
                    <DefaultImage css={profileImage({ isSelected: selectedPetId === pet.petId })} />
                  ) : (
                    <Image
                      src={pet.image}
                      alt="반려견 프로필"
                      width={86}
                      height={86}
                      css={profileImage({ isSelected: selectedPetId === pet.petId })}
                    />
                  )}

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
                    router.push(ROUTES.MYPAGE_PET_PROFILE);
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
            원하는 미용
          </Text>
          <div css={selectBox}>
            <EstimateSelectComponent
              name="전체 클리핑"
              src="/images/grooming_full_clipping.svg"
              onClick={() => handleDesiredStyleSelect('전체 클리핑')}
              isSelected={desiredStyle === '전체 클리핑'}
            />
            <EstimateSelectComponent
              name="전체 클리핑 + 얼굴 컷"
              src="/images/grooming_face_cut.svg"
              onClick={() => handleDesiredStyleSelect('전체 클리핑 + 얼굴 컷')}
              isSelected={desiredStyle === '전체 클리핑 + 얼굴 컷'}
            />
          </div>
          <div css={selectBox}>
            <EstimateSelectComponent
              name="전체 가위컷"
              src="/images/grooming_full_scissor_cut.svg"
              onClick={() => handleDesiredStyleSelect('전체 가위컷')}
              isSelected={desiredStyle === '전체 가위컷'}
            />
            <EstimateSelectComponent
              name="스포팅 + 얼굴 컷"
              src="/images/grooming_spotting.svg"
              onClick={() => handleDesiredStyleSelect('스포팅 + 얼굴 컷')}
              isSelected={desiredStyle === '스포팅 + 얼굴 컷'}
            />
          </div>
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
