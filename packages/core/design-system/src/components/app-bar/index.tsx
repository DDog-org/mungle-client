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
}

export function AppBar({ onBackClick, onHomeClick, prefix, title, suffix }: Props) {
  return (
    <header css={wrapper}>
      <div css={contents}>
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
