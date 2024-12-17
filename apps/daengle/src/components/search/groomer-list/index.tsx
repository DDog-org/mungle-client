import { useGetUserShopsQuery } from '~/queries/main';
import { useAddressFormStore } from '~/stores/main';
import { Empty } from '@daengle/design-system';
import { useRouter } from 'next/router';
import { ROUTES } from '~/constants/commons';
import { cardBox, emptyBox, wrapper, tag } from './index.styles';
import { Item } from '../item';
import { TagButton } from '../tag-button';
import { useState } from 'react';

export function GroomerList() {
  const router = useRouter();
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const { data: shops } = useGetUserShopsQuery();
  const { addressForm } = useAddressFormStore();
  const filteredShops = shops?.allShops.filter((shop) => shop.shopAddress.includes(addressForm));

  const handleCardClick = (id: number) => {
    router.push(ROUTES.GROOMER_DETAIL(id));
  };

  const handletoggleButton = () => {
    setIsSelected((prev) => !prev);
  };

  return (
    <div css={wrapper}>
      <section css={tag}>
        <TagButton isSelected={isSelected} onClick={handletoggleButton}>
          #이쁘니
        </TagButton>
        <TagButton isSelected={isSelected} onClick={handletoggleButton}>
          #겸둥이
        </TagButton>
      </section>
      <button>안녕</button>
      <div css={cardBox}>
        {filteredShops && filteredShops.length > 0 ? (
          filteredShops?.map((shop) => (
            <Item
              key={shop.shopId}
              image={shop.shopImage}
              name={shop.shopName}
              address={shop.shopAddress}
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
