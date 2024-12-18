import { useRouter } from 'next/router';
import { Empty } from '@daengle/design-system';
import { useUserReservationGroomingListQuery } from '~/queries/reservation';
import { ReservationsCard } from '../reservations-card';
import { wrapper } from './index.styles';

export function GroomerList() {
  const router = useRouter();

  const { data, isError } = useUserReservationGroomingListQuery();

  if (isError) {
    alert('로그인 후 이용해 주세요');
    router.back();
  }

  const reservations = data?.contents || [];

  if (reservations.length === 0) {
    return <Empty title="예약 내역이 없어요" />;
  }

  return (
    <div css={wrapper}>
      {reservations ? (
        reservations?.map((item) => <ReservationsCard item={item} />)
      ) : (
        <Empty title="예약 내역이 없어요" />
      )}
    </div>
  );
}
