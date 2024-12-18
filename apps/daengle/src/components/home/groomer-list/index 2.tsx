import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Empty } from '@daengle/design-system';
import { DAY_OFF, ROUTES } from '~/constants';
import { useGetUserShopsInfiniteQuery } from '~/queries';
import { useAddressStore } from '~/stores';
import { useIntersectionLoad } from '~/hooks';
import { Card } from '../card';
import { wrapper, bottom } from './index.styles';

export function GroomerList() {
  const router = useRouter();
  const { address, setAddress } = useAddressStore();

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useGetUserShopsInfiniteQuery({
    address,
  });

  const { loadMoreRef } = useIntersectionLoad({
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  });

  useEffect(() => {
    if (data?.pages[0]) {
      setAddress(data?.pages[0]?.userAddress);
    }
  }, [data?.pages[0]?.userAddress]);

  const handleCardClick = (id: number) => {
    router.push(ROUTES.GROOMER_SHOP_DETAIL(id));
  };

  return (
    <div css={wrapper}>
      {data?.pages.map((page, index) =>
        page.allShops.length > 0 || index > 0 ? (
          page.allShops.map((item) => (
            <Card
              key={item.shopId}
              image={item.shopImage}
              name={item.shopName}
              address={item.shopAddress}
              schedule={
                item.closedDay.length > 0
                  ? `${item?.startTime.substring(0, 5)} - ${item?.endTime.substring(0, 5)} ${item.closedDay
                      .map((day) => DAY_OFF.find((item) => item.value === day)?.label || day)
                      .join(', ')} 휴무`
                  : `매일 ${item?.startTime.substring(0, 5)} - ${item?.endTime.substring(0, 5)}`
              }
              onClick={() => handleCardClick(item.shopId)}
            />
          ))
        ) : (
          <Empty title="해당 주소 주변에 샵이 없어요" />
        )
      )}

      <div ref={loadMoreRef} css={bottom} />
    </div>
  );
}
