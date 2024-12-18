import { useAddressFormStore } from '~/stores/main';
import { useRouter } from 'next/router';
import { ROUTES } from '~/constants/commons';
import { cardBox, emptyBox, wrapper, tag, bottom } from './index.styles';
import { TagButton } from '~/components/search/tag-button';
import { useEffect, useState } from 'react';
import { GROOMER_SEARCH_TAG } from '~/constants/search';
import { useGetUserSearchGroomerInfiniteQuery } from '~/queries/search';
import { Item } from '../item';
import { Empty } from '@daengle/design-system';
import { useIntersectionLoad } from '~/hooks';

const TAG = Object.values(GROOMER_SEARCH_TAG);

export function GroomerList() {
  const router = useRouter();
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const { addressForm } = useAddressFormStore();

  const params = {
    keyword: '미용잉',
    address: '봉천동',
    tag: 'LARGE_DOG',
    page: 0,
    size: 6,
  };
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetUserSearchGroomerInfiniteQuery(params);
  const { loadMoreRef } = useIntersectionLoad({ fetchNextPage, hasNextPage, isFetchingNextPage });

  const response = data?.pages;
  console.log('results', response);
  console.log('TAG', TAG);

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
            page.result.map(({ partnerId, partnerImage, partnerName, groomingBadges }) => (
              <div css={cardBox}>
                <Item
                  key={partnerId}
                  partnerId={partnerId}
                  partnerImage={partnerImage}
                  partnerName={partnerName}
                  badges={groomingBadges
                    .map((tag) => GROOMER_SEARCH_TAG[tag])
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
