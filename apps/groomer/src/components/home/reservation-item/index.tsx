import Image from 'next/image';
import { useRouter } from 'next/router';
import { Text } from '@daengle/design-system';
import { DefaultProfile, PartnerHomeNavigate } from '@daengle/design-system/icons';
import { ROUTES } from '~/constants';
import { GroomerScheduleReservation } from '~/interfaces';
import { profileTextWrapper, profileWrapper, wrapper, info } from './index.styles';

interface Props {
  reservation: GroomerScheduleReservation;
}

export function ReservationItem({ reservation }: Props) {
  const router = useRouter();
  const { reservationId, reservationTime, petName, desiredStyle, petImage } = reservation;

  return (
    <div css={wrapper} onClick={() => router.push(ROUTES.RESERVATIONS_DETAIL(reservationId))}>
      <Text typo="body5" color="gray600">
        {reservationTime.slice(0, 5)}
      </Text>

      <div css={info}>
        <div css={profileWrapper}>
          {petImage ? (
            <Image src={petImage} alt="반려견 이미지" width={60} height={60} />
          ) : (
            <DefaultProfile width={60} height={60} />
          )}

          <div css={profileTextWrapper}>
            <Text typo="title2" color="black">
              {petName}
            </Text>
            <Text typo="body9" color="gray500">
              {desiredStyle}
            </Text>
          </div>
        </div>
        <PartnerHomeNavigate width={32} height={32} />
      </div>
    </div>
  );
}
