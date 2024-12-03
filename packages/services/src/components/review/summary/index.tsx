import { Text } from '@daengle/design-system';
import { wrapper } from './index.styles';

interface Props {
  total: number;
}

export default function ReviewSummary({ total }: Props) {
  return (
    <div css={wrapper}>
      <Text typo="body4">
        총{' '}
        <Text typo="body4" color="green200">
          {total}
        </Text>
        개
      </Text>
    </div>
  );
}
