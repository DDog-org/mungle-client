import { RoundButton } from '@daengle/design-system';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  return (
    <div>
      Groomer
      <RoundButton service="partner" size="M" onClick={() => router.push('/estimate')}>
        견적서 리스트 보러가기
      </RoundButton>
    </div>
  );
}
