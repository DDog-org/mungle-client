import type { CSSObject } from '@emotion/react';
import { Text } from '@daengle/design-system';
import { wrapper } from './index.styles';
import loadingDog from '/public/images/loading_dog.gif';
import Image from 'next/image';

interface Props {
  title: string;
  onActionButtonClick?: () => void;
  css?: CSSObject;
}

export function Loading({ title, css }: Props) {
  return (
    <div css={[wrapper, css]}>
      <Image src={loadingDog} alt="로딩 중 아이콘" width={100} height={100} />

      {title && (
        <Text tag="p" typo="subtitle3" color="gray400">
          {title}
        </Text>
      )}
    </div>
  );
}
