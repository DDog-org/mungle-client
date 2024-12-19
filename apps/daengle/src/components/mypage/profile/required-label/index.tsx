import { Text } from '@daengle/design-system';
import { wrapper } from './index.styles';

interface Props {
  label: string;
}

export function RequiredLabel({ label }: Props) {
  return (
    <div css={wrapper}>
      <Text typo="subtitle3" color="black">
        {label}
      </Text>
      <Text typo="body12" color="blue200">
        *
      </Text>
    </div>
  );
}
