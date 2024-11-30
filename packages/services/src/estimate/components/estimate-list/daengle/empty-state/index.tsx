import { useRouter } from 'next/router';
import { RoundButton } from '@daengle/design-system';
import { EmptyStateBone } from '@daengle/design-system/icons';
import { emptyStateWrapper, emptyText, emptyButton } from './index.styles';

export default function EmptyState(): JSX.Element {
  const router = useRouter();

  return (
    <div css={emptyStateWrapper}>
      <EmptyStateBone />
      <div css={emptyText}>선택한 탭에 대한 견적이 없습니다.</div>
      <RoundButton
        css={emptyButton}
        size="M"
        variant="primary"
        onClick={() => router.push('/request-estimate')}
      >
        견적 요청하기
      </RoundButton>
    </div>
  );
}
