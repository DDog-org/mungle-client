import { HTMLAttributes } from 'react';
import { button, buttonWrapper, secondaryButton, text, wrapper } from './index.styles';
import { Text } from '../text';
import { Dim } from '../dim';
import { Portal } from '../portal';

export type DialogType = 'action' | 'error';
export type SecondaryActionType = 'neutral';

export interface DialogProps extends HTMLAttributes<HTMLDivElement> {
  type?: DialogType;
  title: string;
  description?: string;
  primaryActionLabel: string;
  secondaryActionLabel?: string;
  secondaryActionType?: SecondaryActionType;
  onPrimaryAction?: () => void;
  onSecondaryAction?: () => void;
}

export function Dialog({
  type = 'action',
  title,
  description,
  primaryActionLabel,
  secondaryActionLabel,
  secondaryActionType = 'neutral',
  onPrimaryAction,
  onSecondaryAction,
  ...props
}: DialogProps) {
  return (
    <Portal>
      <Dim fullScreen />

      <div {...props} css={wrapper}>
        <div css={text}>
          <Text typo="body1">{title}</Text>
          <Text typo="body11" color="gray400">
            {description}
          </Text>
        </div>

        <div css={buttonWrapper}>
          {secondaryActionLabel && (
            <button onClick={onSecondaryAction} css={button}>
              <Text typo="body1" color="gray400">
                {secondaryActionLabel}
              </Text>
            </button>
          )}

          <button onClick={onPrimaryAction} css={button}>
            <Text typo="body1" color="blue200">
              {primaryActionLabel}
            </Text>
          </button>
        </div>
      </div>
    </Portal>
  );
}
