import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Text } from '../../text';
import { RoundButton } from '../round-button';
import { TextButton } from '../text-button';
import { wrapper } from './index.styles';

const TYPE = [
  { value: '1', label: '남아' },
  { value: '2', label: '여아ㄴ' },
];

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  secondaryButtonLabel?: string;
  onSecondaryButtonClick?: () => void;
}

export function CTAButton({
  children,
  secondaryButtonLabel,
  onSecondaryButtonClick,
  ...props
}: Props) {
  return (
    <div css={wrapper}>
      <RoundButton size="L" fullWidth {...props}>
        {children}
      </RoundButton>

      {secondaryButtonLabel && (
        <TextButton onClick={onSecondaryButtonClick ? onSecondaryButtonClick : undefined}>
          <Text typo="body8" color="gray200">
            {secondaryButtonLabel}
          </Text>
        </TextButton>
      )}
    </div>
  );
}
