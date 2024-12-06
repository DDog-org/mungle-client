import { useRouter } from 'next/router';
import { TextButton, Text } from '@daengle/design-system';
import { wrapper } from './index.styles';

export function OptionSelector(): JSX.Element {
  const router = useRouter();
  return (
    <div css={wrapper}>
      <TextButton onClick={() => router.push('/temporary-route')}>
        <Text typo="body4" color="gray500">
          내가 보낸 요청
        </Text>
      </TextButton>
    </div>
  );
}
