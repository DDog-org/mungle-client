import { useEffect, useState } from 'react';
import { Layout, theme, Text } from '@daengle/design-system';

import axios from 'axios';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import { ReservationList, WeekDateTabs } from '@daengle/services/components';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { ROUTES } from '~/constants';
import { GNB } from '~/components/commons';

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
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await axios.get(`/groomer/reservation/${selectedDate}/list`);
        setReservations(response.data);
      } catch (error) {
        console.error('데이터 불러오기 실패:', error);
      }
    };

    fetchReservations();
  }, [selectedDate]);

  return (
    <Layout isAppBarExist={false}>
      <div css={wrapper}>
        <header css={headerContainer}>
          <Text typo="title1">예약</Text>
        </header>

        <WeekDateTabs selectedDate={selectedDate} onSelectDate={setSelectedDate} dates={DATES} />
        <ReservationList
          reservations={reservations}
          onClick={(id: number) => router.push(ROUTES.RESERVATIONS_DETAIL(id))}
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
