import { useAddressFormStore } from '~/stores/main';
import { ChipToggleButton, Empty } from '@daengle/design-system';
import { useRouter } from 'next/router';
import { ROUTES } from '~/constants/commons';
import { cardBox, emptyBox, wrapper, tag, bottom, itemBox } from './index.styles';
import { Item } from '~/components/search/item';
import { TagButton } from '~/components/search/tag-button';
import { useState } from 'react';
import { useGetUserSearchVetInfiniteQuery } from '~/queries/search';
import { useIntersectionLoad } from '~/hooks';
import { VET_SEARCH_TAG, VET_SEARCH_TAG_BUTTON } from '~/constants/search';

interface VetListProps {
  inputValue: string;
}

export function VetList({ inputValue }: VetListProps) {
  const router = useRouter();
  const [selectedTag, setSelectedTag] = useState<string | undefined>();

  const params = {
    keyword: inputValue,
    address: '역삼동',
    tag: selectedTag || '',
    page: 0,
    size: 6,
  };

  const { addressForm } = useAddressFormStore();
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetUserSearchVetInfiniteQuery(params);
  const { loadMoreRef } = useIntersectionLoad({ fetchNextPage, hasNextPage, isFetchingNextPage });

  const handleCardClick = (id: number) => {
    router.push(ROUTES.VET_DETAIL(id));
  };

  const handleTagClick = (tagValue: string) => {
    setSelectedTag((prevTag) => (prevTag === tagValue ? undefined : tagValue));
  };

  return (
    <div css={wrapper}>
      <section css={tag}>
        {VET_SEARCH_TAG_BUTTON.map((item) => {
          return (
            <ChipToggleButton
              key={item.value}
              onClick={() => handleTagClick(item.value)}
              service="tags"
              isTagSelected={selectedTag === item.value}
            >
              {item.label}
            </ChipToggleButton>
          );
        })}
      </section>
      <section css={itemBox}>
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
      </section>
      <div ref={loadMoreRef} css={bottom} />
    </div>
  );
}
