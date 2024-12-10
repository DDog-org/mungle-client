import { RoundButton } from '@daengle/design-system';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  return (
    <div>
      Daengle
      <RoundButton service="partner" size="M" onClick={() => router.push('/review')}>
        리뷰 쓰러 가기
      </RoundButton>
    </div>
  );
}
