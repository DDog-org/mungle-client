import { ReactNode } from 'react';
import { AppBarBack, AppBarHome } from '../../icons';
import { Text } from '../text';
import { button, contents, wrapper } from './index.styles';

interface Props {
  onBackClick?: () => void;
  onHomeClick?: () => void;
  prefix?: ReactNode;
  title?: string;
  suffix?: ReactNode;
  searchBar?: ReactNode;
  backgroundColor?: string;
}

export function AppBar({
  onBackClick,
  onHomeClick,
  prefix,
  title,
  suffix,
  searchBar,
  backgroundColor,
}: Props) {
  return (
    <header css={wrapper(backgroundColor)}>
      <div css={contents({ isPrefix: !!prefix, isSuffix: !!suffix })}>
        {prefix ? (
          prefix
        ) : (
          <button css={button} onClick={onBackClick}>
            <AppBarBack width="8px" cursor="pointer" />
          </button>
        )}

        {title && (
          <Text id="title" color="black" typo="body1">
            {title}
          </Text>
        )}

        {searchBar && searchBar}

        {suffix ? (
          suffix
        ) : (
          <button css={button} onClick={onHomeClick}>
            <AppBarHome width="20px" cursor="pointer" />
          </button>
        )}
      </div>
    </header>
  );
}
