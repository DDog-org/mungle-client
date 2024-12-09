import { useRouter } from 'next/router';
import { Text, RoundButton } from '@daengle/design-system';
import { EmptyStateBone } from '@daengle/design-system/icons';
import { wrapper, emptyButton } from './index.styles';

interface Props {
  isEmptyEstimates: boolean;
}

export function EmptyState({ isEmptyEstimates }: Props): JSX.Element {
  const router = useRouter();

  return (
    <div css={wrapper(isEmptyEstimates)}>
      <EmptyStateBone width={42} height={47} />
      {isEmptyEstimates ? (
        <Text typo="subtitle3" color="gray400">
          {`도착한 견적서가 없어요!\n 잠시만 기다려주세요`}
        </Text>
      ) : (
        <>
          <Text typo="subtitle3" color="gray400">
            견적을 요청해 보세요!
          </Text>
          <RoundButton
            css={emptyButton}
            size="M"
            variant="primary"
            onClick={() => router.push('/request-estimate')}
          >
            견적 요청하기
          </RoundButton>
        </>
      )}
    </div>
  );
}
