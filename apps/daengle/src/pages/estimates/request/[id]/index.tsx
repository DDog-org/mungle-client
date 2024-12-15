import { GroomerRequestEstimate, VetRequestEstimate } from '~/components/estimate';
import { useRouter } from 'next/router';

import 'dayjs/locale/ko';

export default function RequestEstimate() {
  const router = useRouter();
  const { id, service } = router.query;
  const estimateId = Number(id);

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
