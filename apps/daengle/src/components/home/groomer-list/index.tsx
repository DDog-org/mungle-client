import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Empty } from '@daengle/design-system';
import { ROUTES } from '~/constants';
import { Loading } from '~/components/commons';
import { useGetUserShopsInfiniteQuery } from '~/queries';
import { useAddressStore } from '~/stores';
import { useIntersectionLoad } from '~/hooks';
import { Card } from '../card';
import { wrapper, bottom } from './index.styles';
import { formatDayOff } from '@daengle/services/utils';
import { useQueryClient } from '@tanstack/react-query';

export function GroomerList() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { address } = useAddressStore();

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading, refetch } =
    useGetUserShopsInfiniteQuery({
      address,
    });

  const { loadMoreRef } = useIntersectionLoad({
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  });

  useEffect(() => {
    refetch();
    queryClient.clear();
  }, [address]);

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
              schedule={formatDayOff(item.closedDay, item.startTime, item.endTime)}
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
