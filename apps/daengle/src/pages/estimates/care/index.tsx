import { AppBar, CTAButton, Layout, Text, theme } from '@daengle/design-system';
import { AddButton, DefaultProfile } from '@daengle/design-system/icons';
import { css } from '@emotion/react';

import Image from 'next/image';
import { ROUTES } from '~/constants/commons';
import { useRouter } from 'next/router';
import {
  usePostUserEstimateCareMutation,
  usePostUserEstimateVetUserInfoMutation,
} from '~/queries/estimate';
import { PostUserEstimateVetUserInfoResponse } from '~/models/estimate';
import { useEffect, useState } from 'react';

import dayjs, { Dayjs } from 'dayjs';
import { PetInfo } from '~/interfaces/estimate';
import { RegisterPetProfile } from '@daengle/services/components';
import { DatePicker, ProfileSelector } from '~/components/estimate';

export default function EstimateCare() {
  const router = useRouter();
  const [address, setAddress] = useState<string>('');
  const [petInfos, setPetInfos] = useState<PetInfo[] | null>(null);
  const [selectedPetId, setSelectedPetId] = useState<number>(0);
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs());
  const [selectedTime, setSelectedTime] = useState<Dayjs | null>(dayjs());

  const [symptoms, setSymptoms] = useState<string>('');
  const [requirements, setRequirements] = useState<string>('');
  const [ButtonActive, setButtonActive] = useState<boolean>(false);

  const vetId = Number(router.query.vetId);

  const { mutateAsync: postUserEstimateVetUserInfo } = usePostUserEstimateVetUserInfoMutation({
    vetId,
  });
  const { mutate: postUserEstimateCare } = usePostUserEstimateCareMutation();

  useEffect(() => {
    // 정보 불러오기
    handlePostUserEstimateVetUserInfo();
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

  const handlePostUserEstimateVetUserInfo = async () => {
    const response = await postUserEstimateVetUserInfo();

    if (response?.address) setAddress(response.address);
    if (response?.petInfos) setPetInfos(response.petInfos);
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

  const handleSymptomsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSymptoms(e.target.value);
  };

  const handleRequirementsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setRequirements(e.target.value);
  };

  // 데이터 전달
  const handleSubmit = () => {
    const requestBody = {
      vetId: vetId,
      petId: selectedPetId,
      address: address,
      reservedDate: '',
      symptoms: symptoms,
      requirements: requirements,
    };

    postUserEstimateCare(requestBody, {
      onSuccess: () => {
        router.push(ROUTES.ESTIMATES_FORM_COMPLETE);
      },
    });
  };

  return (
    <Layout>
      <AppBar onBackClick={router.back} onHomeClick={() => router.push(ROUTES.HOME)} />
      <div css={wrapper}>
        <Text tag="h1" typo="title1" color="black">
          견적 요청서
        </Text>
        <section css={section}>
          <Text tag="h2" typo="subtitle3" color="black">
            지역
          </Text>
          <Text typo="title2" color="black">
            {address}
          </Text>
        </section>
        <section css={section}>
          <Text tag="h2" typo="subtitle3" color="black">
            시술 희망 날짜 및 시간
          </Text>
          <DatePicker onChange={(date) => {}} />
        </section>
        <section css={section}>
          <Text tag="h2" typo="subtitle3" color="black">
            어떤 아이가 진료를 받을 예정인가요?
          </Text>
          {petInfos && petInfos?.length > 0 ? (
            <ProfileSelector
              petInfos={petInfos}
              selectedPetId={selectedPetId}
              onSelectPet={(petId) => setSelectedPetId(petId)}
            />
          ) : (
            <RegisterPetProfile onClick={() => router.push(ROUTES.MYPAGE_PET_PROFILE_CREATE)} />
          )}
        </section>
        <section css={section}>
          <Text tag="h2" typo="subtitle3" color="black">
            증상
          </Text>
          <textarea
            placeholder="증상을 입력해주세요"
            maxLength={150}
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
            maxLength={150}
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

const listBox = css`
  overflow: auto;

  width: 100%;
`;

const petList = css`
  display: flex;
  gap: 14px;
`;

const petProfile = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  cursor: pointer;
`;

const profileImage = ({ isSelected }: { isSelected: boolean }) => css`
  width: 86px;
  height: 86px;
  border: 4px solid ${isSelected ? theme.colors.blue200 : theme.colors.gray200};
  border-radius: 50px;

  background-color: ${theme.colors.gray200};

  transition: border 0.2s ease;
`;

const petName = css`
  transition: 0.2s ease;
`;
