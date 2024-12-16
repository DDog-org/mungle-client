import { wrapper } from './index.styles';
import { ReservationsCard } from '../reservations-card';
import { Empty } from '@daengle/design-system';
import { useUserReservationGroomingListQuery } from '~/queries/reservation';

export function GroomerList() {
  const { data, isLoading, error } = useUserReservationGroomingListQuery();
  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  if (error) {
    return <div>데이터를 불러오는 중 오류가 발생했습니다.</div>;
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
