import {
  AppBar,
  ChipToggleButton,
  Input,
  Layout,
  RoundButton,
  Select,
  Text,
  TextButton,
} from '@daengle/design-system';
import {
  wrapper,
  titleBox,
  petProfileWrapper,
  petProfileEditWrapper,
  petProfileImageBox,
  line,
  profileImageWrapper,
  profileImageBox,
  profileEditButtonBox,
  inputWrapper,
  formBox,
  weightButtonBox,
  toggleButtonBox,
  chipToggleButtonBox,
  selectChipButtonBox,
  detailformBox,
  chipButtonBox,
  buttonContainer,
  detailInput,
} from './index.styles';
import Image from 'next/image';
import { useState } from 'react';

const OPTIONS = [
  { value: '1', label: '2024' },
  { value: '2', label: '2023' },
  { value: '3', label: '2022' },
];

export default function DogEditProfile() {
  const [selectedValue, setSelectedValue] = useState<{ value: string; label: string }>();
  const ITEMS = ['없음', '눈', '코', '입', '귀', '목', '몸통', '다리', '꼬리', '생식기'];

  return (
    <Layout isAppBarExist={false}>
      <AppBar />
      <div css={wrapper}>
        <div css={titleBox}>
          <Text typo={'title1'}>반려견 프로필 수정</Text>
        </div>
        <div css={petProfileWrapper}>
          <Text typo={'subtitle1'}>내 아이</Text>
          <div css={petProfileEditWrapper}>
            <div css={petProfileImageBox}>
              <Image
                src="/icons/pet-profile/edit_image.jpeg"
                alt="펫 필터링 이미지"
                width={70}
                height={70}
              />
            </div>
            <Text typo="body5" color="blue200">
              가이
            </Text>
          </div>
        </div>
        <div css={line}></div>
        <div css={profileImageWrapper}>
          <div css={profileImageBox}>
            <Image
              src="/icons/pet-profile/edit_image.jpeg"
              alt="펫 프로필 이미지"
              width={116}
              height={116}
            />
          </div>
          <button css={profileEditButtonBox}>
            <Text typo="body4">프로필 사진 변경하기</Text>
          </button>
        </div>
        <div css={inputWrapper}>
          <Input label={'이름'} />
          <section css={formBox}>
            <Text typo="subtitle3">탄생년도</Text>
            <Select
              options={OPTIONS}
              placeholder="탄생년도(필수)"
              selectedValue={selectedValue}
              onChange={(option) => setSelectedValue(option)}
            />
          </section>
          <section css={formBox}>
            <Text typo="subtitle3">성별</Text>
            <section css={toggleButtonBox}>
              <ChipToggleButton size="full">남아</ChipToggleButton>
              <ChipToggleButton size="full">여아</ChipToggleButton>
            </section>
          </section>
          <section css={formBox}>
            <Text typo="subtitle3">중성화</Text>
            <section css={toggleButtonBox}>
              <ChipToggleButton size="full">했어요</ChipToggleButton>
              <ChipToggleButton size="full">안했어요</ChipToggleButton>
            </section>
          </section>
          <section css={formBox}>
            <Text typo="subtitle3">품종</Text>
            <Select
              options={OPTIONS}
              placeholder="품종"
              selectedValue={selectedValue}
              onChange={(option) => setSelectedValue(option)}
            />
          </section>
          <section css={formBox}>
            <Text typo="subtitle3">몸무게</Text>
            <section css={chipToggleButtonBox}>
              <div css={weightButtonBox}>
                <ChipToggleButton size="full">소형견</ChipToggleButton>
                <Text typo="body12" color="gray200">
                  7kg 이하
                </Text>
              </div>
              <div css={weightButtonBox}>
                <ChipToggleButton size="full">중형견</ChipToggleButton>
                <Text typo="body12" color="gray200">
                  7kg 초과 ~ 15kg 이하
                </Text>
              </div>
              <div css={weightButtonBox}>
                <ChipToggleButton size="full">대형견</ChipToggleButton>
                <Text typo="body12" color="gray200">
                  15kg 초과
                </Text>
              </div>
            </section>
          </section>
          <section css={formBox}>
            <Text typo="subtitle3">몸무게</Text>
            <section css={selectChipButtonBox}>
              {ITEMS.map((item) => (
                <ChipToggleButton key={item} size="fixed">
                  {item}
                </ChipToggleButton>
              ))}
            </section>
          </section>
          <section css={formBox}>
            <section css={detailformBox}>
              <Text typo="subtitle3">특이사항</Text>
              <section css={chipButtonBox}>
                <ChipToggleButton size="full">피부병</ChipToggleButton>
                <ChipToggleButton size="full">심장질환</ChipToggleButton>
                <ChipToggleButton size="full">마킹</ChipToggleButton>
                <ChipToggleButton size="full">마운팅</ChipToggleButton>
              </section>
              <textarea css={detailInput} placeholder="특이사항이 있다면 입력해주세요" />
            </section>
          </section>
        </div>
        <footer css={buttonContainer}>
          <RoundButton variant="primary" size="L" fullWidth={true}>
            수정하기
          </RoundButton>
          <TextButton>
            <Text typo="subtitle2" color="gray300">
              삭제하기
            </Text>
          </TextButton>
        </footer>
      </div>
    </Layout>
  );
}
