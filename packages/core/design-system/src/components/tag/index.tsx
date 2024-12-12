import { ReactNode } from 'react';
import { Text } from '../text';
import { wrapper } from './index.styles';
import { Variant } from './index.types';

interface Props {
  children: ReactNode;
  variant?: Variant;
}

export function Tag({ children, variant = 'solid' }: Props) {
  return (
    <div css={wrapper({ variant })}>
      <Text typo="body2">{children}</Text>
    </div>
  );
}
