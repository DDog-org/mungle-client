import { ReactNode } from 'react';
import { AppBarBack } from '../../icons';
import { Text } from '../text';
import { contents, wrapper } from './index.styles';

interface Props {
  onBackClick?: () => void;
  prefix?: ReactNode;
  title?: string;
  suffix?: ReactNode;
  isDefaultBackground?: boolean;
}

export function AppBar({ onBackClick, prefix, title, suffix, isDefaultBackground = true }: Props) {
  return (
    <header css={wrapper(isDefaultBackground)}>
      <div css={contents}>
        {prefix ? prefix : <AppBarBack width="8px" cursor="pointer" onClick={onBackClick} />}
        {title && (
          <Text id="title" color="black" typo="body1">
            {title}
          </Text>
        )}
        {suffix && suffix}
      </div>
    </header>
  );
}
