import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Empty } from '@daengle/design-system';
import { ROUTES } from '~/constants';
import { useAddressStore } from '~/stores';
import { useIntersectionLoad } from '~/hooks';
import { useGetUserVetsInfiniteQuery } from '~/queries';
import { Card } from '../card';
import { wrapper, bottom } from './index.styles';
import { Loading } from '~/components/commons';
import { formatDayOff } from '@daengle/services/utils';

export function VetList() {
  const router = useRouter();
  const { address } = useAddressStore();

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading, refetch } =
    useGetUserVetsInfiniteQuery({
      address,
    });
  const { loadMoreRef } = useIntersectionLoad({
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  });

  useEffect(() => {
    refetch();
  }, [address]);

  const handleCardClick = (id: number) => {
    router.push(ROUTES.VETS_DETAIL(id));
  };

  if (isLoading) return <Loading title="주변의 병원 정보를 불러오고 있어요" />;

  return (
    <div css={wrapper}>
      {data ? (
        data?.pages.map((page, index) =>
          page.allVets.length > 0 || index > 0 ? (
            page.allVets.map((item) => (
              <Card
                key={item.vetAccountId}
                image={item.vetImage}
                name={item.vetName}
                address={item.vetAddress}
                schedule={formatDayOff(item.closedDay, item.startTime, item.endTime)}
                onClick={() => handleCardClick(item.vetAccountId)}
              />
            ))
          ) : (
            <Empty title="해당 주소 주변에 병원이 없어요" />
          )
        )
      ) : (
        <Empty title="해당 주소 주변에 병원이 없어요" />
      )}

      <div ref={loadMoreRef} css={bottom} />
    </div>
  );
}
