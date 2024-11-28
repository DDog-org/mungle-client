import { useState } from 'react';
import { AppBar, ChipRadio, CTAButton, Input, Select, Text } from '@daengle/design-system';
import { itemWrapper, radioGroup, section, weightWrapper, wrapper } from './index.styles';

const BIRTH_YEAR_OPTIONS = [
  { value: '1', label: 'One' },
  { value: '2', label: 'Two' },
  { value: '3', label: 'Three' },
];

const PET_GENDER = [
  { value: 'MALE', label: '남아' },
  { value: 'FEMALE', label: '여아' },
];

const PET_IS_NEUTERED = [
  { value: true, label: '했어요' },
  { value: false, label: '안했어요' },
];

const PET_BREED = [
  {
    breedName: '말티즈',
    breed: 'MALTESE',
  },
  {
    breedName: '푸들',
    breed: 'POODLE',
  },
  {
    breedName: '골든 리트리버',
    breed: 'GOLDEN_RETRIEVER',
  },
];

const PET_WEIGHT = [
  {
    value: 'SMALL',
    label: '소형견',
    description: '7kg 이하',
  },
  {
    value: 'MEDIUM',
    label: '중형견',
    description: '7kg 초과 ~ 15kg 이하',
  },
  {
    value: 'LARGE',
    label: '대형견',
    description: '15kg 초과',
  },
];

export default function PetInfo() {
  const [selectedValue, setSelectedValue] = useState<{ value: string; label: string }>();

  return (
    <>
      <AppBar />
      <div css={wrapper}>
        <Text typo="title1" color="black">
          강아지의 기본 정보를 입력해 주세요
        </Text>

        <section css={section}>
          <Input label="이름" placeholder="이름을 입력해 주세요" />

          <div css={itemWrapper}>
            <Text typo="subtitle3" color="black">
              탄생년도
            </Text>
            <Select
              options={BIRTH_YEAR_OPTIONS}
              placeholder="탄생년도"
              selectedValue={selectedValue}
              onChange={(option) => setSelectedValue(option)}
            />
          </div>

          <div css={itemWrapper}>
            <Text typo="subtitle3" color="black">
              성별
            </Text>
            <div css={radioGroup}>
              {PET_GENDER.map((gender) => (
                <ChipRadio
                  key={gender.value}
                  value={gender.value}
                  label={gender.label}
                  size="full"
                />
              ))}
            </div>
          </div>

          <div css={itemWrapper}>
            <Text typo="subtitle3" color="black">
              중성화
            </Text>
            <div css={radioGroup}>
              {PET_IS_NEUTERED.map((item) => (
                <ChipRadio key={item.label} value={item.value} label={item.label} size="full" />
              ))}
            </div>
          </div>

          <div css={itemWrapper}>
            <Text typo="subtitle3" color="black">
              품종
            </Text>
            <Select
              options={PET_BREED.map((breed) => ({ value: breed.breed, label: breed.breedName }))}
              placeholder="품종"
              selectedValue={selectedValue}
              onChange={(option) => setSelectedValue(option)}
            />
          </div>

          <div css={itemWrapper}>
            <Text typo="subtitle3" color="black">
              몸무게
            </Text>
            <div css={radioGroup}>
              {PET_WEIGHT.map((item) => (
                <div css={weightWrapper}>
                  <ChipRadio key={item.label} value={item.value} label={item.label} size="full" />
                  <Text typo="body12" color="gray200">
                    {item.description}
                  </Text>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTAButton secondaryButtonLabel="건너뛰기">시작하기</CTAButton>
      </div>
    </>
  );
}
