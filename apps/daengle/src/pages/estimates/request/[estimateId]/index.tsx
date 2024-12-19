import { GroomerRequestEstimate, VetRequestEstimate } from '~/components/estimate';
import { useRouter } from 'next/router';

import 'dayjs/locale/ko';

export default function RequestEstimate() {
  const router = useRouter();
  const { service } = router.query;
  const estimateId = Number(router.query.estimateId);

  return (
    <div>
      {service === 'vet' ? (
        <VetRequestEstimate id={estimateId} />
      ) : (
        <GroomerRequestEstimate id={estimateId} />
      )}
    </div>
  );
}
