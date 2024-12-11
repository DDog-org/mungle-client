import { EmptyLogo } from '@daengle/design-system/icons';
import { wrapper } from './index.styles';
import { RoundButton, Text } from '@daengle/design-system';
import { useRouter } from 'next/router';
import { ROUTES } from '~/constants/commons';

export function Empty() {
  const router = useRouter();

  return (
    <div css={wrapper}>
      <EmptyLogo width={42} height={47} />
      <Text typo="subtitle3" color="gray400">
        작성한 리뷰가 없어요
      </Text>

      <RoundButton size="S" onClick={() => router.push(ROUTES.RESERVATIONS)}>
        <Text typo="body4" color="white">
          리뷰 작성하기
        </Text>
      </RoundButton>
    </div>
  );
}
