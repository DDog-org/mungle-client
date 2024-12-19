import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Empty } from '@daengle/design-system';
import { DAY_OFF, ROUTES } from '~/constants';
import { useGetUserShopsInfiniteQuery } from '~/queries';
import { useAddressStore } from '~/stores';
import { useIntersectionLoad } from '~/hooks';
import { Card } from '../card';
import { wrapper, bottom } from './index.styles';
import { Loading } from '~/components/commons';

export function GroomerList() {
  const router = useRouter();
  const { address, setAddress } = useAddressStore();

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useGetUserShopsInfiniteQuery({
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

  if (isLoading) return <Loading title="주변의 미용샵 정보를 불러오고 있어요" />;

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
              onClick={() => router.push(ROUTES.GROOMERS_SHOPS_DETAIL(item.shopId))}
            />
          ))
        ) : (
          <Empty key={page.currentPage} title="해당 주소 주변에 샵이 없어요" />
        )
      )}

      <div ref={loadMoreRef} css={bottom} />
    </div>
  );
}
