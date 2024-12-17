import { Card } from '../card';
import { useGetUserShopsQuery } from '~/queries/main';
import { useAddressFormStore } from '~/stores/main';
import { Empty } from '@daengle/design-system';
import { useRouter } from 'next/router';
import { ROUTES } from '~/constants/commons';
import { wrapper, cardBox, emptyBox } from './index.styles';
import { VET_DAT_OFF } from '~/constants/main';

export function GroomerListComponent() {
  const router = useRouter();
  const { data: shops } = useGetUserShopsQuery();
  const { addressForm } = useAddressFormStore();
  const filteredShops = shops?.allShops.filter((shop) => shop.shopAddress.includes(addressForm));

  const handleCardClick = (id: number) => {
    router.push(ROUTES.GROOMER_DETAIL(id));
  };

  return (
    <div css={wrapper}>
      <div css={cardBox}>
        {filteredShops && filteredShops.length > 0 ? (
          filteredShops?.map((shop) => (
            <Card
              key={shop.shopId}
              image={shop.shopImage}
              name={shop.shopName}
              address={shop.shopAddress}
              schedule={
                shop.closedDay.length > 0
                  ? `${shop?.startTime.substring(0, 5)} - ${shop?.endTime.substring(0, 5)} ${shop.closedDay
                      .map((day) => VET_DAT_OFF.find((item) => item.value === day)?.label || day)
                      .join(', ')} 휴무`
                  : `매일 ${shop?.startTime.substring(0, 5)} - ${shop?.endTime.substring(0, 5)}`
              }
              onClick={() => handleCardClick(shop.shopId)}
            />
          ))
        ) : (
          <div css={emptyBox}>
            <Empty title="해당 주소 주변에 샵이 없어요" />
          </div>
        )}
      </div>
    </div>
  );
}
