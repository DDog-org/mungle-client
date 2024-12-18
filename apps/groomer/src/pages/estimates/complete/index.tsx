import { useRouter } from 'next/router';
import { Complete, Layout } from '@daengle/design-system';
import { ROUTES } from '~/constants/commons';

export default function Pending() {
  const router = useRouter();

  return (
    <Layout>
      <Complete
        type="complete"
        title={`견적서 전송이 완료되었어요!\n응답이 도착하면 알려드릴게요`}
        subtitle="알림톡으로 응답이 전송됩니다"
        buttonLabel="메인으로"
        onButtonClick={() => router.push(ROUTES.HOME)}
      />
    </Layout>
  );
}
