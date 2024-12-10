import { RoundButton } from '@daengle/design-system';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const reviewId = localStorage.getItem('reviewId'); //TODO: reservationId 동적 아이디로 변경시 수정 필요
  return (
    <div>
      <RoundButton
        service="partner"
        size="M"
        onClick={() => router.push(`/review/edit/${reviewId}`)}
      >
        내가 쓴 리뷰 수정하러 가기
      </RoundButton>
      ;
    </div>
  );
}
