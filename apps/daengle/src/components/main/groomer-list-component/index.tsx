import { Card } from '../card';
import { useGetUserShopsQuery } from '~/queries/main';
import { useAddressFormStore } from '~/stores/main';
import { Empty } from '@daengle/design-system';
import { useRouter } from 'next/router';
import { ROUTES } from '~/constants/commons';
import { wrapper, emptyState } from './index.styles';

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
      {filteredShops && filteredShops.length > 0 ? (
        filteredShops?.map((shop) => (
          <Card
            key={shop.shopId}
            image={shop.shopImage}
            name={shop.shopName}
            address={shop.shopAddress}
            schedule={`매일 ${shop.startTime.substring(0, 5)} - ${shop.endTime.substring(0, 5)}`}
            onClick={() => handleCardClick(shop.shopId)}
          />
        ))
      ) : (
        <Empty title="해당 주소 주변에 샵이 없어요" css={emptyState} />
      )}
    </div>
  );
}
