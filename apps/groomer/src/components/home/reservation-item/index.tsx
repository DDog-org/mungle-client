import { Text } from '@daengle/design-system';
import { DefaultProfile, PartnerHomeNavigate } from '@daengle/design-system/icons';
import { profileTextWrapper, profileWrapper, wrapper, info } from './index.styles';
import { useRouter } from 'next/router';
import { ROUTES } from '~/constants';

// TODO: API 연동 후 변경
const reservationId = 1;

export function ReservationItem() {
  const router = useRouter();

  return (
    <div css={wrapper} onClick={() => router.push(ROUTES.RESERVATIONS_DETAIL(reservationId))}>
      <Text typo="body5" color="gray600">
        11:00
      </Text>

      <div css={info}>
        <div css={profileWrapper}>
          <DefaultProfile width="60px" height="60px" />

          <div css={profileTextWrapper}>
            <Text typo="title2" color="black">
              가이
            </Text>
            <Text typo="body9" color="gray500">
              전체 클리핑
            </Text>
          </div>
        </div>
        <PartnerHomeNavigate width={32} height={32} />
      </div>
    </div>
  );
}
