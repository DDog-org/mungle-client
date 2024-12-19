import { ReactNode } from 'react';
import { Text } from '../text';
import { wrapper } from './index.styles';
import { Service, Variant } from './index.types';

interface Props {
  children: ReactNode;
  variant?: Variant;
  service?: Service;
}

export function Tag({ children, variant = 'solid', service = 'daengle' }: Props) {
  return (
    <div css={wrapper({ variant, service })}>
      <Text typo="body2" color="inherit">
        {children}
      </Text>
    </div>
  );
}
