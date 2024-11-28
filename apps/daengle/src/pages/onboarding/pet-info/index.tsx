import {
  AppBar,
  ChipButton,
  ChipToggleButton,
  CTAButton,
  Input,
  Select,
  Text,
} from '@daengle/design-system';
import { itemWrapper, section, wrapper } from './index.styles';
import { useState } from 'react';

const BIRTH_YEAR_OPTIONS = [
  { value: '1', label: 'One' },
  { value: '2', label: 'Two' },
  { value: '3', label: 'Three' },
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
          <Input label="이름" placeholder="이름(필수)" />

          <div css={itemWrapper}>
            <Text typo="subtitle3" color="black">
              탄생년도
            </Text>
            <Select
              options={BIRTH_YEAR_OPTIONS}
              placeholder="탄생년도(필수)"
              selectedValue={selectedValue}
              onChange={(option) => setSelectedValue(option)}
            />
          </div>

          <div css={itemWrapper}>
            <Text typo="subtitle3" color="black">
              성별
            </Text>
            <div>
              <ChipToggleButton size="full">남아</ChipToggleButton>
              <ChipToggleButton size="full">여아</ChipToggleButton>
            </div>
          </div>

          <div css={itemWrapper}>
            <Text typo="subtitle3" color="black">
              몸무게
            </Text>
            <div>
              <ChipToggleButton size="full">남아</ChipToggleButton>
              <ChipToggleButton size="full">여아</ChipToggleButton>
            </div>
          </div>

          <div css={itemWrapper}>
            <Text typo="subtitle3" color="black">
              품종
            </Text>
            <Select
              options={BIRTH_YEAR_OPTIONS}
              placeholder="탄생년도(필수)"
              selectedValue={selectedValue}
              onChange={(option) => setSelectedValue(option)}
            />
          </div>
        </section>

        <CTAButton secondaryButtonLabel="건너뛰기">시작하기</CTAButton>
      </div>
    </>
  );
}
