import { RoundButton } from '@daengle/design-system';
import { useRouter } from 'next/router';
import { ROUTES } from '~/constants/commons';

export default function Home() {
  const router = useRouter();
  return (
    <div>
      Groomer
      <RoundButton service="partner" size="M" onClick={() => router.push(ROUTES.ESTIMATES)}>
        견적서 리스트 보러가기
      </RoundButton>
    </div>
  );
}
