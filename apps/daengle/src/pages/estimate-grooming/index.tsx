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
  arrow,
} from './index.styles';
import Image from 'next/image';
import unfoldIcon from '../../../../../packages/core/design-system/public/icons/select_unfold_inactive.svg';

export default function EstimateCreate() {
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
              <Text typo="body10" color="black">
                2024.11.17
              </Text>
              <Image src={unfoldIcon} alt="폴드 아이콘" width={8} height={5} css={arrow} />
            </div>
            <div css={dateSelect}>
              <Text typo="body10" color="black">
                14:00
              </Text>
              <Image src={unfoldIcon} alt="폴드 아이콘" width={8} height={5} css={arrow} />
            </div>
          </div>
        </section>
        <section css={section}>
          <Text typo="subtitle3" color="black">
            어떤 아이를 가꿀 예정이신가요?
          </Text>
          <div css={registerPet}>
            <div css={circle}>
              <Image src="/icons/add_button.svg" alt="등록 버튼" width={12} height={12} />
            </div>
            <Text typo="body5" color="gray400">
              반려견을 등록해주세요
            </Text>
          </div>
        </section>
        <section css={section}>
          <Text typo="subtitle3" color="black">
            원하는 미용
          </Text>
          <div css={selectBox}>
            <div css={selectItem}>
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
