import { useRouter } from 'next/router';
import { Complete, Layout } from '@daengle/design-system';
import { ROUTES } from '~/constants/commons/routes';

export default function Pending() {
  const router = useRouter();

  return (
    <Layout>
      <Complete
        type="notice"
        title={`현재 승인 대기 중입니다\n승인이 완료될 때까지 기다려 주세요`}
        subtitle="알림톡으로 승인 유무를 알 수 있습니다"
        buttonLabel="처음으로"
        onButtonClick={() => router.push(ROUTES.LOGIN)}
      />
    </Layout>
  );
}
