import { useGetUserShopsQuery } from '~/queries/main';
import { useAddressFormStore } from '~/stores/main';
import { Empty } from '@daengle/design-system';
import { useRouter } from 'next/router';
import { ROUTES } from '~/constants/commons';
import { cardBox, emptyBox, wrapper, tag } from './index.styles';
import { Item } from '../item';
import { TagButton } from '../tag-button';
import { useState } from 'react';

export function VetList() {
  const mockShops = [
    {
      shopId: 1,
      shopImage:
        'https://daengle.s3.ap-northeast-2.amazonaws.com/groomer/profile-images/XNFJar9K8V4h4syHLspqT',
      shopName: '멋진 샵 1호점',
      tag: ['냥냐', '웅야'],
    },
    {
      shopId: 2,
      shopImage:
        'https://daengle.s3.ap-northeast-2.amazonaws.com/groomer/profile-images/XNFJar9K8V4h4syHLspqT',
      shopName: '귀여운 샵 2호점',
      tag: ['냥냐', '웅야'],
    },
    {
      shopId: 3,
      shopImage:
        'https://daengle.s3.ap-northeast-2.amazonaws.com/groomer/profile-images/XNFJar9K8V4h4syHLspqT',
      shopName: '럭셔리 샵 3호점',
      tag: ['냥냐', '웅야'],
    },
  ];
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
      <div css={cardBox}>
        {/* {/* {filteredShops && filteredShops.length > 0 ? ( */}
        {mockShops?.map((shop) => (
          <Item
            key={shop.shopId}
            image={shop.shopImage}
            name={shop.shopName}
            tag={shop.tag}
            onClick={() => handleCardClick(shop.shopId)}
          />
        ))}

        {/* ))
        ) : (
          <div css={emptyBox}>
            <Empty title="해당 주소 주변에 샵이 없어요" />
          </div>
        )} */}
      </div>
    </div>
  );
}
