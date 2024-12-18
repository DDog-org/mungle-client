import { useAddressFormStore } from '~/stores/main';
import { Empty } from '@daengle/design-system';
import { useRouter } from 'next/router';
import { ROUTES } from '~/constants/commons';
import { cardBox, emptyBox, wrapper, tag, bottom } from './index.styles';
import { Item } from '~/components/search/item';
import { TagButton } from '~/components/search/tag-button';
import { useState } from 'react';
import { useGetUserSearchVetInfiniteQuery } from '~/queries/search';
import { useIntersectionLoad } from '~/hooks';
import { VET_SEARCH_TAG } from '~/constants/search';

export function VetList() {
  const params = {
    keyword: '미용잉',
    address: '봉천동',
    tag: '',
    page: 0,
    size: 6,
  };

  const router = useRouter();
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const { addressForm } = useAddressFormStore();
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetUserSearchVetInfiniteQuery(params);
  const { loadMoreRef } = useIntersectionLoad({ fetchNextPage, hasNextPage, isFetchingNextPage });

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
      {data ? (
        data?.pages.map((page, index) =>
          page.result.length > 0 || index > 0 ? (
            page.result.map(({ partnerId, partnerImage, partnerName, careBadges }) => (
              <div css={cardBox}>
                <Item
                  key={partnerId}
                  partnerId={partnerId}
                  partnerImage={partnerImage}
                  partnerName={partnerName}
                  badges={careBadges
                    .map((tag) => VET_SEARCH_TAG[tag])
                    .filter((tag): tag is string => !!tag)}
                  onClick={() => {
                    handleCardClick(partnerId);
                  }}
                />
              </div>
            ))
          ) : (
            <div css={emptyBox}>
              <Empty title="해당 주소 주변에 샵이 없어요" />
            </div>
          )
        )
      ) : (
        <div css={emptyBox}>
          <Empty title="해당 주소 주변에 샵이 없어요" />
        </div>
      )}

      <div ref={loadMoreRef} css={bottom} />
    </div>
  );
}
