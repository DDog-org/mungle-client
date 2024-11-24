import { CSSProperties, ReactNode } from 'react';
import { screen, main } from './index.styles';

interface Props {
  children: ReactNode;
  style?: CSSProperties;
}

export function Layout({ children, style }: Props) {
  return (
    <div css={screen}>
      <main css={main} style={style}>
        {children}
      </main>
    </div>
  );
}
