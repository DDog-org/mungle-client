import { Empty } from '~/components/reviews';

import { wrapper } from './index.styles';
import { ReservationsCard } from '../reservations-card';

export function VetList() {
  const data = [
    {
      estimateId: 3,
      vetName: '유레카병원',
      petName: '시바견',
      petImageUrl: '',
      reservedDate: '2024-12-12 21:34:13',
    },
    {
      estimateId: 4,
      vetName: '유레카병원',
      petName: '시바견',
      petImageUrl: '',
      reservedDate: '2024-12-12 21:34:13',
    },
    {
      estimateId: 5,
      vetName: '유레카병원',
      petName: '시바견',
      petImageUrl: '',
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
