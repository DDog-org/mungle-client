import { wrapper } from './index.styles';
import { ReservationsCard } from '../reservations-card';
import { Empty } from '@daengle/design-system';
import { useUserReservationCareListQuery } from '~/queries/reservation';

export function VetList() {
  const { data, isLoading, error } = useUserReservationCareListQuery();
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

  return <div css={wrapper}>{reservations?.map((item) => <ReservationsCard item={item} />)}</div>;
}
