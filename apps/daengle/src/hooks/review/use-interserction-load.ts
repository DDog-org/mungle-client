import { useEffect, useRef } from 'react';

interface Props {
  fetchNextPage: () => void;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
}

export function useIntersectionLoad({ fetchNextPage, hasNextPage, isFetchingNextPage }: Props) {
  const loadMoreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log('useEffect triggered');
    console.log('hasNextPage:', hasNextPage);
    console.log('isFetchingNextPage:', isFetchingNextPage);
    console.log('loadMoreRef.current:', loadMoreRef.current);

    if (!hasNextPage || isFetchingNextPage || !loadMoreRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        console.log('Observer callback triggered:', entries);
        if (entries[0]?.isIntersecting) {
          console.log('Fetching next page');
          fetchNextPage();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(loadMoreRef.current);

    return () => {
      console.log('Cleaning up observer');
      observer.disconnect();
    };
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  return { loadMoreRef };
}
