import { useRouter } from 'next/router';
import { GroomerReviewEdit, VetReviewEdit } from '~/components/review';

export default function ReviewEditPage() {
  const { service } = useRouter().query;

  if (service === 'groomer') {
    return <GroomerReviewEdit />;
  }

  if (service === 'vet') {
    return <VetReviewEdit />;
  }

  return <div>알 수 없는 서비스입니다.</div>;
}
