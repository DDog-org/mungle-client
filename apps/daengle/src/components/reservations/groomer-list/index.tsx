import { useRouter } from 'next/router';
import { Empty, useDialog } from '@daengle/design-system';
import { useUserReservationGroomingListQuery } from '~/queries/reservation';
import { ReservationsCard } from '../reservations-card';
import { wrapper } from './index.styles';
import { ROUTES } from '~/constants';

export function GroomerList() {
  const router = useRouter();
  const { open } = useDialog();

  const { data, isError } = useUserReservationGroomingListQuery();

  if (isError) {
    open({
      title: '로그인 후 이용해 주세요',
      primaryActionLabel: '로그인 하기',
      onPrimaryAction: () => router.replace(ROUTES.LOGIN),
      secondaryActionLabel: '닫기',
    });
    router.back();
  }

  const reservations = data?.contents || [];

  if (reservations.length === 0) {
    return <Empty title="예약 내역이 없어요" />;
  }

  return (
    <div css={wrapper}>
      {reservations ? (
        reservations?.map((item) => <ReservationsCard key={item.estimateId} item={item} />)
      ) : (
        <Empty title="예약 내역이 없어요" />
      )}
    </div>
  );
}
