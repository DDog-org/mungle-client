import { useState } from 'react';
import { Layout, theme, Text } from '@daengle/design-system';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import { ReservationList, WeekDateTabs } from '@daengle/services/components';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { ROUTES } from '~/constants';
import { GNB, Loading } from '~/components/commons';
import { useGetGroomerWeekQuery } from '~/queries/reservation';

const today = dayjs();
const DATES = Array.from({ length: 5 }, (_, index) => {
  const date = today.add(index, 'day').locale('ko');
  return {
    id: index,
    day: date.format('DD'),
    label: date.format('dd'),
    fullDate: date.format('YYYY-MM-DD'),
  };
});

export default function Reservations() {
  const router = useRouter();

  const [selectedDate, setSelectedDate] = useState(DATES[0]?.fullDate) || [];
  const { data, isLoading } = useGetGroomerWeekQuery({ date: selectedDate });

  const reservations =
    data?.scheduleList.map((item) => ({
      reservationId: item.reservationId,
      petId: item.petId,
      scheduleTime: item.scheduleTime,
      petName: item.petName,
      desiredStyle: item.desiredStyle,
      petProfile: item.petProfile?.[0]?.petImageUrl || '',
    })) || [];

  if (isLoading) {
    return (
      <Layout isAppBarExist={false}>
        <div css={wrapper}>
          <header css={headerContainer}>
            <Text typo="title1">예약</Text>
          </header>
          <Loading title="예약 내역을 불러오고 있어요" />
        </div>
        <GNB />
      </Layout>
    );
  }

  return (
    <Layout isAppBarExist={false}>
      <div css={wrapper}>
        <header css={headerContainer}>
          <Text typo="title1">예약</Text>
        </header>
        <WeekDateTabs selectedDate={selectedDate} onSelectDate={setSelectedDate} dates={DATES} />
        {isLoading ? (
          <Loading title="예약 내역을 불러오고 있어요" />
        ) : (
          <ReservationList
            reservations={reservations}
            onClick={(reservationId: number) =>
              router.push(ROUTES.RESERVATIONS_DETAIL(reservationId))
            }
          />
        )}
      </div>
      <GNB />
    </Layout>
  );
}

const wrapper = css`
  height: 100vh;
  padding-bottom: 104px;

  background-color: ${theme.colors.background};
`;

const headerContainer = css`
  margin-top: 20px;
  padding: 18px;
`;
