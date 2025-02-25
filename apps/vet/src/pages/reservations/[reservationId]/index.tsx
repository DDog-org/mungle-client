import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import { AppBar, Layout, RoundButton, Text, TextField, theme } from '@daengle/design-system';
import { PetDetails, Section, UserProfile } from '@daengle/services/components';

import { ROUTES } from '~/constants/commons';

import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import { GetVetReservationRequestParams } from '~/models/reservation';
import { useGetVetReservationQuery } from '~/queries/reservation';
import { PET_SIGNIFICANTTAG } from 'node_modules/@daengle/services/src/constants/pet';

export default function ReservationDetail() {
  const router = useRouter();

  const reservationId = Number(router.query.reservationId);
  const params: GetVetReservationRequestParams = { reservationId: reservationId };

  const { data: reservation } = useGetVetReservationQuery(params);

  if (!reservation) return;

  return (
    <Layout>
      <AppBar
        onBackClick={router.back}
        backgroundColor="white"
        onHomeClick={() => router.push(ROUTES.HOME)}
      />

      <div css={wrapper}>
        <UserProfile userImage={reservation.userProfile} userName={reservation.userName} />

        <div css={sectionDivider} />

        <div css={requestTitle}>
          <Text typo="subtitle1">요청상세</Text>
        </div>

        <Section title="지역">
          <Text typo="subtitle3" color="black">
            {reservation.partnerAddress}
          </Text>
        </Section>

        <Section title="시술 희망 날짜 및 시간">
          <Text typo="subtitle3" color="black">
            {dayjs(reservation.reservedDate).locale('ko').format('YYYY.MM.DD(ddd) • HH:mm')}
          </Text>
        </Section>

        <Section title=" 어떤 아이가 진료를 받을 예정인가요?">
          <PetDetails
            image={reservation.petProfile}
            name={reservation.petName}
            attributes={{
              age: reservation.petAge,
              weight: reservation.petWeight,
              significant:
                reservation.significantTags.length > 0
                  ? reservation.significantTags.map(
                      (tag) => PET_SIGNIFICANTTAG.find((item) => item.value === tag)?.label || tag
                    )
                  : ['특이사항 없음'],
            }}
            onClick={() => router.push(ROUTES.ESTIMATE_PET_INFO(reservation.petId))}
          />
        </Section>

        <Section title="증상">
          <Text typo="subtitle3" color="black">
            {reservation.petInfo.symptoms}
          </Text>
        </Section>

        <Section title="추가 요청사항">
          <Text typo="subtitle3" color="black">
            {reservation.petInfo.requirements}
          </Text>
        </Section>

        <div css={sectionDivider} />

        <div css={textFieldWrapper}>
          <Text typo="subtitle3" color="gray500">
            종합소견
          </Text>
          <TextField
            label="추정 병명"
            value={reservation.petInfo.diagnosis}
            readOnly
            service="partner"
          />
          <TextField
            label="추정 원인"
            value={reservation.petInfo.cause}
            readOnly
            service="partner"
          />
          <TextField
            label="예상 진료"
            value={reservation.petInfo.treatment}
            readOnly
            service="partner"
          />
        </div>
        <div css={button}>
          <RoundButton size="L" fullWidth service="partner" onClick={router.back}>
            확인
          </RoundButton>
        </div>
      </div>
    </Layout>
  );
}

const wrapper = css`
  display: flex;
  flex-direction: column;
`;

const sectionDivider = css`
  display: block;

  width: 100%;
  height: 8px;
  margin: 0;

  background-color: ${theme.colors.gray100};
`;

const requestTitle = css`
  padding: 24px 18px;
`;

const form = css`
  width: 100%;
  margin: 15px 0 0;
`;

const textFieldWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 32px;

  margin-top: 24px;
  padding: 0 18px;
`;

const button = css`
  padding: 18px;
`;
