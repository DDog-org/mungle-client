import { useRouter } from 'next/router';
import { TextButton, Text } from '@daengle/design-system';
import { wrapper } from './index.styles';

export default function OptionSelector(): JSX.Element {
  const router = useRouter();
  return (
    <div css={wrapper}>
      <TextButton
        onClick={() => {
          alert('해당 요청에 대한 견적을 그만 받으시겠습니까?');
        }}
      >
        <Text typo="body4" color="gray500">
          견적 그만 받기
        </Text>
      </TextButton>
      <TextButton onClick={() => router.push('/temporary-route')}>
        <Text typo="body4" color="gray500">
          내가 보낸 요청
        </Text>
      </TextButton>
    </div>
  );
}
