import { Text } from '@daengle/design-system';

import { useRouter } from 'next/router';
import { ROUTES } from '~/constants/commons';
import { wrapper, actionSheetTitle, selectBox } from './index.styles';

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
