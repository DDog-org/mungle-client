import { ReactNode } from 'react';
import { AppBarBack } from '../../icons';
import { Text } from '../text';
import { contents, wrapper } from './index.styles';

interface Props {
  onBackClick?: () => void;
  prefix?: ReactNode;
  title?: string;
  suffix?: ReactNode;
}

export function AppBar({ onBackClick, prefix, title, suffix }: Props) {
  return (
    <header css={wrapper}>
      <div css={contents}>
        {prefix ? prefix : <AppBarBack width="8px" cursor="pointer" onClick={onBackClick} />}
        {title && (
          <Text id="title" color="black" typo="semibold05">
            {title}
          </Text>
        )}
        {suffix && suffix}
      </div>
    </header>
  );
}
