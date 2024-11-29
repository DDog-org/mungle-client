import { ButtonHTMLAttributes, ReactNode } from 'react';
import { RoundButton } from '../round-button';
import { wrapper } from './index.styles';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function CTAButton({ children, ...props }: Props) {
  return (
    <div css={wrapper}>
      <RoundButton size="L" fullWidth {...props}>
        {children}
      </RoundButton>
    </div>
  );
}
