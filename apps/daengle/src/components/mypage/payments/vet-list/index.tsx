import { Item } from '~/components/mypage';
import { Empty } from '~/components/reviews';
import { useIntersectionLoad } from '~/hooks';
import { useGetPaymentCareHistoryListInfiniteQuery } from '~/queries/payment';
import { bottom, wrapper } from './index.styles';

export function VetList() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetPaymentCareHistoryListInfiniteQuery();
  const { loadMoreRef } = useIntersectionLoad({ fetchNextPage, hasNextPage, isFetchingNextPage });

  return (
    <div css={wrapper}>
      {data ? (
        data?.pages.map((page, index) =>
          page.paymentHistoryList.length > 0 || index > 0 ? (
            page.paymentHistoryList.map((item) => <Item item={item} />)
          ) : (
            <Empty title="결제한 내역이 없어요" />
          )
        )
      ) : (
        <Empty title="결제한 내역이 없어요" />
      )}
      <div ref={loadMoreRef} css={bottom} />
    </div>
  );
}
