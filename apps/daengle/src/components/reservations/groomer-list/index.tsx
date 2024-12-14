import { Empty } from '~/components/reviews';

import { wrapper } from './index.styles';
import { ReservationsCard } from '../reservations-card';

export function GroomerList() {
  const data = [
    {
      estimateId: 3,
      groomerName: '유레카미용사',
      petName: '시바견',
      petImageUrl: '',
      shopName: '유레카 미용실',
      reservedDate: '2024-12-12 21:34:13',
    },
    {
      estimateId: 4,
      groomerName: '유레카미용사',
      petName: '시바견',
      petImageUrl: '',
      shopName: '유레카 미용실',
      reservedDate: '2024-12-12 21:34:13',
    },
    {
      estimateId: 5,
      groomerName: '유레카미용사',
      petName: '시바견',
      petImageUrl: '',
      shopName: '유레카 미용실',
      reservedDate: '2024-12-12 21:34:13',
    },
  ];

  return (
    <div css={wrapper}>
      {data ? (
        data?.map((item) => <ReservationsCard item={item} />)
      ) : (
        <Empty title="예약 내역이 없어요" />
      )}
    </div>
  );
}
