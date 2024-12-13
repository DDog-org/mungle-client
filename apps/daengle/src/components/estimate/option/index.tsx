import { useRouter } from 'next/router';
import { TextButton, Text } from '@daengle/design-system';
import { wrapper } from './index.styles';

export function OptionSelector(): JSX.Element {
  const router = useRouter();
  const estimateId = 10; //예시 Id
  return (
    <div css={wrapper}>
      <TextButton onClick={() => router.push(`/estimates/request/${estimateId}`)}>
        <Text typo="body4" color="gray500">
          내가 보낸 요청
        </Text>
      </TextButton>
    </div>
  );
}
