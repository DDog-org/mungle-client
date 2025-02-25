import { wrapper } from './index.styles';
import { ReservationsCard } from '../reservations-card';
import { Empty, useDialog } from '@daengle/design-system';
import { useUserReservationCareListQuery } from '~/queries/reservation';
import { useRouter } from 'next/router';
import { ROUTES } from '~/constants/commons';

export function VetList() {
  const router = useRouter();
  const { data, isError } = useUserReservationCareListQuery();

  const { open } = useDialog();

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
      {reservations?.map((item) => <ReservationsCard key={item.estimateId} item={item} />)}
    </div>
  );
}
