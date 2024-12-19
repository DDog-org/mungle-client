import { Empty, Text } from '@daengle/design-system';
import { DefaultProfile } from '@daengle/design-system/icons';

import {
  content,
  description,
  desiredStyle,
  dot,
  empty,
  profileImage,
  time,
  timeline,
  wrapper,
} from './index.styles';

interface Reservation {
  reservationId: number;
  scheduleTime: string;
  petId: number;
  petName: string;
  petProfile: string;
  desiredStyle: string;
}

interface Props {
  reservations: Reservation[];
  onClick: (reservationId: number) => void;
}

const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
  event.currentTarget.onerror = null;
  event.currentTarget.src = '';
};

export function ReservationList({ reservations, onClick }: Props) {
  return (
    <div css={wrapper}>
      {reservations.length > 0 ? (
        reservations.map((item, index) => {
          const isLast = index === reservations.length - 1;
          return (
            <div key={index} css={timeline}>
              <div css={dot(isLast)}></div>
              <span css={time}>{item.scheduleTime}</span>
              <div css={content} onClick={() => onClick(item.reservationId)}>
                {item.petProfile ? (
                  <img
                    src={item.petProfile}
                    alt="profile"
                    css={profileImage}
                    onError={handleImageError}
                  />
                ) : (
                  <DefaultProfile css={profileImage} />
                )}
                <Text typo="subtitle3">{item.petName}</Text>
                <div css={desiredStyle}>
                  <Text typo="body10" css={description}>
                    {item.desiredStyle === '' ? '특이사항 없음' : item.desiredStyle}
                  </Text>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div css={empty}>
          <Empty title="오늘은 예정된 예약건이 없어요!" />
        </div>
      )}
    </div>
  );
}
