import { useState } from 'react';
import { Layout, theme, Text } from '@daengle/design-system';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import { ReservationList, WeekDateTabs } from '@daengle/services/components';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { ROUTES } from '~/constants';
import { GNB } from '~/components/commons';
import { useGetVetWeekQuery } from '~/queries/reservation';

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
  const { data, isLoading, isError } = useGetVetWeekQuery({ date: selectedDate });

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
          <Text typo="body1">로딩 중...</Text>
        </div>
        <GNB />
      </Layout>
    );
  }

  if (isError) {
    return (
      <Layout isAppBarExist={false}>
        <div css={wrapper}>
          <header css={headerContainer}>
            <Text typo="title1">예약</Text>
          </header>
          <Text typo="body1">데이터를 불러오는 중 오류가 발생했습니다.</Text>
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
        <ReservationList
          reservations={reservations}
          onClick={(reservationId: number) =>
            router.push(ROUTES.RESERVATIONS_DETAIL(reservationId))
          }
        />
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
