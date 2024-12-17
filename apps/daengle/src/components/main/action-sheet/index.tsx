import { Text } from '@daengle/design-system';

import { useRouter } from 'next/router';
import { ROUTES } from '~/constants/commons';
import { wrapper, actionSheetTitle, selectBox } from './index.styles';

export default function ActionSheet() {
  const router = useRouter();
  const { groomerId, vetId } = router.query;
  const getGroomerId = Number(groomerId);
  const getVetId = Number(vetId);

  return (
    <div css={wrapper}>
      <Text typo="body4" css={actionSheetTitle}>
        누구에게 견적을 요청할까요?
      </Text>
      <Text
        typo="body1"
        css={selectBox}
        onClick={() => {
          router.push(ROUTES.ESTIMATE_GROOMING(getGroomerId));
        }}
      >
        미용사
      </Text>
      <Text
        typo="body1"
        css={selectBox}
        onClick={() => {
          router.push(ROUTES.ESTIMATE_VET(getVetId));
        }}
      >
        병원
      </Text>
    </div>
  );
}
