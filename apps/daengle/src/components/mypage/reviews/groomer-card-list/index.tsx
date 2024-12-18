import { useRouter } from 'next/router';
import { Empty } from '@daengle/design-system';
import { ROUTES } from '~/constants/commons';
import { Card } from '~/components/mypage';
import { useIntersectionLoad } from '~/hooks/review';
import {
  deleteUserGroomingReviewMutation,
  getUserGroomingMyReviewListInfiniteQuery,
} from '~/queries';
import { bottom, wrapper } from './index.styles';
import { GROOMER_REVIEW_KEYWORDS } from '~/constants/review';

export function GroomerCardList() {
  const router = useRouter();

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    getUserGroomingMyReviewListInfiniteQuery();
  const { mutateAsync: deleteUserGroomingReview } = deleteUserGroomingReviewMutation();

  const { loadMoreRef } = useIntersectionLoad({ fetchNextPage, hasNextPage, isFetchingNextPage });

  return (
    <div css={wrapper}>
      {data?.pages.length ? (
        data?.pages.map((page) =>
          page.reviewCount > 0 ? (
            page.reviewList.map(
              ({
                groomingReviewId,
                groomerId,
                groomingKeywordList,
                revieweeName,
                starRating,
                content,
                imageUrlList,
              }) => (
                <Card
                  key={groomingReviewId}
                  reviewId={groomingReviewId}
                  revieweeId={groomerId}
                  keywordReviewList={groomingKeywordList
                    .map((keyword) => GROOMER_REVIEW_KEYWORDS[keyword])
                    .filter((keyword): keyword is string => !!keyword)}
                  revieweeName={`${revieweeName} 디자이너`}
                  starRating={starRating}
                  content={content}
                  imageUrlList={imageUrlList}
                  onRevieweeNameClick={() => router.push(ROUTES.GROOMERS_DETAIL(groomerId))}
                  onDelete={() => deleteUserGroomingReview({ reviewId: groomingReviewId })}
                  onEdit={() => router.push(ROUTES.GROOMERS_REVIEW_FORM_EDIT(groomingReviewId))}
                />
              )
            )
          ) : (
            <Empty
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
