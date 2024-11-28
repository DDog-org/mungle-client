import {
  FocusEvent,
  forwardRef,
  InputHTMLAttributes,
  ReactNode,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { input, wrapper, label as labelCss, infoTextWrapper, inputWrapper } from './index.styles';
import { Text } from '../text';

export interface InputRef {
  focus: () => void;
}

export interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'prefix' | 'suffix'> {
  label?: string;
  prefix?: ReactNode;
  suffix?: ReactNode;
  confirmMessage?: string;
  errorMessage?: string;
}

export const Input = forwardRef<InputRef, Props>(
  (
    {
      type = 'text',
      label,
      disabled,
      spellCheck = false,
      autoComplete = 'off',
      prefix,
      suffix,
      confirmMessage,
      errorMessage,
      ...props
    },
    ref
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    useImperativeHandle(ref, () => inputRef.current as InputRef);

    return (
      <div css={wrapper}>
        {label && (
          <Text typo="subtitle3" css={labelCss}>
            {label}
          </Text>
        )}

        <div css={inputWrapper}>
          {prefix && prefix}
          <input
            ref={inputRef}
            type={type}
            spellCheck={spellCheck}
            autoComplete={autoComplete}
            disabled={disabled}
            css={input}
            {...props}
          />
          {suffix && suffix}
        </div>

        {!errorMessage && confirmMessage && (
          <div css={infoTextWrapper}>
            <Text typo="body12" color="blue200">
              {confirmMessage}
            </Text>
          </div>
        )}

        {errorMessage && (
          <div css={infoTextWrapper}>
            <Text typo="body12" color="red200">
              {errorMessage}
            </Text>
          </div>
        )}
      </div>
    );
  }
);
