import {
  PartnerGnbChattingActive,
  GnbChattingInactive,
  PartnerGnbHomeActive,
  GnbHomeInactive,
  PartnerGnbMyActive,
  GnbMyInactive,
  PartnerGnbReservationActive,
  GnbReservationInactive,
  PartnerGnbEstimateActive,
  GnbEstimateInactive,
} from '@daengle/design-system/icons';
import { ROUTES } from '~/constants/commons';

export const MENUS = [
  {
    name: '견적',
    icon: {
      active: <PartnerGnbEstimateActive width="32px" height="32px" />,
      inactive: <GnbEstimateInactive width="32px" height="32px" />,
    },
    path: ROUTES.ESTIMATES,
  },
  {
    name: '예약',
    icon: {
      active: <PartnerGnbReservationActive width="32px" height="32px" />,
      inactive: <GnbReservationInactive width="32px" height="32px" />,
    },
    path: ROUTES.RESERVATIONS,
  },
  {
    name: '홈',
    icon: {
      active: <PartnerGnbHomeActive width="32px" height="32px" />,
      inactive: <GnbHomeInactive width="32px" height="32px" />,
    },
    path: ROUTES.HOME,
  },
  {
    name: '채팅',
    icon: {
      active: <PartnerGnbChattingActive width="32px" height="32px" />,
      inactive: <GnbChattingInactive width="32px" height="32px" />,
    },
    path: ROUTES.CHATS,
  },
  {
    name: '마이',
    icon: {
      active: <PartnerGnbMyActive width="32px" height="32px" />,
      inactive: <GnbMyInactive width="32px" height="32px" />,
    },
    path: ROUTES.MYPAGE,
  },
];
