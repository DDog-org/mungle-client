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
import { ROUTES } from './routes';

export const MENUS = [
  {
    name: '견적',
    icon: {
      active: <PartnerGnbEstimateActive width="32px" height="32px" />,
      inactive: <GnbEstimateInactive width="32px" height="32px" />,
    },
    path: ROUTES.ESTIMATES,
    canGuest: false,
  },
  {
    name: '예약',
    icon: {
      active: <PartnerGnbReservationActive width="32px" height="32px" />,
      inactive: <GnbReservationInactive width="32px" height="32px" />,
    },
    path: ROUTES.RESERVATIONS,
    canGuest: false,
  },
  {
    name: '홈',
    icon: {
      active: <PartnerGnbHomeActive width="32px" height="32px" />,
      inactive: <GnbHomeInactive width="32px" height="32px" />,
    },
    path: ROUTES.HOME,
    canGuest: false,
  },
  {
    name: '채팅',
    icon: {
      active: <PartnerGnbChattingActive width="32px" height="32px" />,
      inactive: <GnbChattingInactive width="32px" height="32px" />,
    },
    path: ROUTES.CHATS,
    canGuest: false,
  },
  {
    name: '마이',
    icon: {
      active: <PartnerGnbMyActive width="32px" height="32px" />,
      inactive: <GnbMyInactive width="32px" height="32px" />,
    },
    path: ROUTES.MYPAGE,
    canGuest: false,
  },
];
