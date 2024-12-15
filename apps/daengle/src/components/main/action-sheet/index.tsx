import { Text, theme } from '@daengle/design-system';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { ROUTES } from '~/constants/commons';

export default function ActionSheet() {
  const router = useRouter();

  return (
    <div css={wrapper}>
      <Text typo="body4" css={actionSheetTitle}>
        누구에게 견적을 요청할까요?
      </Text>
      <Text
        typo="body1"
        css={selectBox}
        onClick={() => {
          router.push(ROUTES.ESTIMATE_GROOMING);
        }}
      >
        미용사
      </Text>
      <Text
        typo="body1"
        css={selectBox}
        onClick={() => {
          router.push(ROUTES.ESTIMATE_CARE);
        }}
      >
        병원
      </Text>
    </div>
  );
}

const wrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 58px;
  z-index: 20;

  width: 100%;
  height: 165px;
  border-radius: 20px 20px 0 0;

  background-color: ${theme.colors.white};
`;

const actionSheetTitle = css`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 52px;
`;

const selectBox = css`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 52px;

  :hover {
    background-color: ${theme.colors.blue100};
    color: ${theme.colors.blue200};

    cursor: pointer;
  }
`;
