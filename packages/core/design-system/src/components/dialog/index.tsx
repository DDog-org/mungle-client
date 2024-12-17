import { createContext, HTMLAttributes, ReactNode } from 'react';
import { button, buttonWrapper, text, wrapper } from './index.styles';
import { Text } from '../text';
import { Dim } from '../dim';
import { Portal } from '../portal';

interface DialogContext {
  open: (content: ReactNode) => void;
  close: () => void;
}
const DialogContext = createContext<DialogContext | null>(null);

export interface DialogProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  primaryActionLabel: string;
  secondaryActionLabel?: string;
  onPrimaryAction?: () => void;
  onSecondaryAction?: () => void;
  onClose?: () => void;
}

export function Dialog({
  title,
  description,
  primaryActionLabel,
  secondaryActionLabel,
  onPrimaryAction,
  onSecondaryAction,
  onClose,
  ...props
}: DialogProps) {
  return (
    <Portal>
      <Dim fullScreen onClick={onClose} />

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
