import Image from 'next/image';
import { useRouter } from 'next/router';
import { useSearchParams } from 'next/navigation';
import { Tag, Text } from '@daengle/design-system';
import { DefaultImage } from '@daengle/design-system/icons';
import { ROUTES } from '~/constants/commons';
import { GROOMER_PAYMENT_STATUS, VET_PAYMENT_STATUS } from '~/constants/payment';
import { GroomerPaymentHistoryItem } from '~/interfaces/payment';
import { image, infoWrapper, top, wrapper } from './index.styles';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';

interface Props {
  item: GroomerPaymentHistoryItem;
}

export function PaymentListItem({
  item: { reservationId, recipientImageUrl, recipientName, shopName, paymentDate, status },
}: Props) {
  const router = useRouter();
  const params = useSearchParams();
  const isGroomer = params.get('service') === 'groomer';

  return (
    <div
      css={wrapper}
      onClick={() =>
        router.push({
          pathname: ROUTES.MYPAGE_PAYMENTS_DETAIL(reservationId),
          query: { service: params.get('service') },
        })
      }
    >
      <div css={infoWrapper}>
        <div css={top}>
          <Text typo="subtitle1" color="black">
            {recipientName}
          </Text>

          <Tag variant="solid">
            <Text typo="body2" color="blue200">
              {isGroomer
                ? GROOMER_PAYMENT_STATUS.PAYMENT_COMPLETED
                : VET_PAYMENT_STATUS.PAYMENT_COMPLETED}
            </Text>
          </Tag>
        </div>

        <Text typo="body11" color="gray400">
          {shopName}
        </Text>

        <Text typo="body12" color="gray600">
          {dayjs(paymentDate).locale('ko').format('YYYY.MM.DD(ddd) • HH:mm')}
        </Text>
      </div>

      {recipientImageUrl ? (
        <Image src={recipientImageUrl} alt="recipient" width={70} height={70} css={image} />
      ) : (
        <DefaultImage width={70} height={70} css={image} />
      )}
    </div>
  );
}
