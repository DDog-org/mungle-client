import { useRouter } from 'next/router';
import { Empty } from '@daengle/design-system';
import { ROUTES } from '~/constants/commons';
import { Card } from '~/components/mypage';
import { useIntersectionLoad } from '~/hooks/review';
import { deleteUserCareReviewMutation, getUserCareMyReviewListInfiniteQuery } from '~/queries';
import { bottom, wrapper } from './index.styles';
import { VET_REVIEW_KEYWORDS } from '~/constants/review';

export function VetCardList() {
  const router = useRouter();

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    getUserCareMyReviewListInfiniteQuery();
  const { mutateAsync: deleteUserCareReview } = deleteUserCareReviewMutation();

  const { loadMoreRef } = useIntersectionLoad({ fetchNextPage, hasNextPage, isFetchingNextPage });

  return (
    <div css={wrapper}>
      {data?.pages.length ? (
        data?.pages.map((page) =>
          page.reviewCount > 0 ? (
            page.reviewList.map(
              ({
                careReviewId,
                vetId,
                careKeywordList,
                revieweeName,
                starRating,
                content,
                imageUrlList,
              }) => (
                <Card
                  key={careReviewId}
                  reviewId={careReviewId}
                  revieweeId={vetId}
                  keywordReviewList={careKeywordList
                    .map((keyword) => VET_REVIEW_KEYWORDS[keyword])
                    .filter((keyword): keyword is string => !!keyword)}
                  revieweeName={revieweeName}
                  starRating={starRating}
                  content={content}
                  imageUrlList={imageUrlList}
                  onRevieweeNameClick={() => router.push(ROUTES.VETS_DETAIL(vetId))}
                  onDelete={() => deleteUserCareReview({ reviewId: careReviewId })}
                  onEdit={() => router.push(ROUTES.VETS_REVIEW_FORM_EDIT(careReviewId))}
                />
              )
            )
          ) : (
            <Empty
              key="empty"
              title="작성한 리뷰가 없어요"
              actionLabel="리뷰 작성하기"
              onActionButtonClick={() => router.push(ROUTES.MYPAGE_PAYMENTS)}
            />
          )
        )
      ) : (
        <Empty
          title="작성한 리뷰가 없어요"
          actionLabel="리뷰 작성하기"
          onActionButtonClick={() => router.push(ROUTES.MYPAGE_PAYMENTS)}
        />
      )}

      <div ref={loadMoreRef} css={bottom} />
    </div>
  );
}
