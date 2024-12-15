import { Card } from '../card';
import { useGetUserShopsQuery } from '~/queries/main';
import { useAddressFormStore } from '~/stores/main';
import { EmptyLogo } from '@daengle/design-system/icons';
import { Text } from '@daengle/design-system';
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
        // TODO: dev pull 받아서 디자인시스템에 있는 Empty 컴포넌트 이용하기
        <div css={emptyState}>
          <EmptyLogo width={42} height={47} />
          <Text typo="subtitle3" color="gray400">
            해당 주소 주변에 샵이 없어요
          </Text>
        </div>
      )}
    </div>
  );
}
