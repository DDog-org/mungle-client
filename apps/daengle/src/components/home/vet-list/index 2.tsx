import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Empty } from '@daengle/design-system';
import { ROUTES, DAY_OFF } from '~/constants';
import { useAddressStore } from '~/stores';
import { useIntersectionLoad } from '~/hooks';
import { useGetUserVetsInfiniteQuery } from '~/queries';
import { Card } from '../card';
import { cardBox, wrapper, bottom } from './index.styles';

export function VetList() {
  const router = useRouter();
  const { address, setAddress } = useAddressStore();

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useGetUserVetsInfiniteQuery({
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
    router.push(ROUTES.VET_DETAIL(id));
  };

  return (
    <div css={wrapper}>
      <div css={cardBox}>
        {data ? (
          data?.pages.map((page, index) =>
            page.allVets.length > 0 || index > 0 ? (
              page.allVets.map((item) => (
                <Card
                  key={item.vetAccountId}
                  image={item.vetImage}
                  name={item.vetName}
                  address={item.vetAddress}
                  schedule={
                    item.closedDay.length > 0
                      ? `${item?.startTime.substring(0, 5)} - ${item?.endTime.substring(0, 5)} ${item.closedDay
                          .map((day) => DAY_OFF.find((item) => item.value === day)?.label || day)
                          .join(', ')} 휴무`
                      : `매일 ${item?.startTime.substring(0, 5)} - ${item?.endTime.substring(0, 5)}`
                  }
                  onClick={() => handleCardClick(item.vetAccountId)}
                />
              ))
            ) : (
              <Empty title="해당 주소 주변에 샵이 없어요" />
            )
          )
        ) : (
          <Empty title="해당 주소 주변에 샵이 없어요" />
        )}
      </div>

      <div ref={loadMoreRef} css={bottom} />
    </div>
  );
}
