import { ReactNode } from 'react';
import { AppBarBack, AppBarBackWhite, AppBarHome, AppBarHomeWhite } from '../../icons';
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
  isWhite?: boolean;
}

export function AppBar({
  onBackClick,
  onHomeClick,
  prefix,
  title,
  suffix,
  searchBar,
  backgroundColor,
  isWhite = false,
}: Props) {
  return (
    <header css={wrapper(backgroundColor)}>
      <div css={contents({ isPrefix: !!prefix, isSuffix: !!suffix })}>
        {prefix ? (
          prefix
        ) : (
          <button css={button} onClick={onBackClick}>
            {isWhite ? (
              <AppBarBackWhite width="32px" cursor="pointer" />
            ) : (
              <AppBarBack width="8px" cursor="pointer" />
            )}
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
            {isWhite ? (
              <AppBarHomeWhite width="32px" cursor="pointer" />
            ) : (
              <AppBarHome width="20px" cursor="pointer" />
            )}
          </button>
        )}
      </div>
    </header>
  );
}
