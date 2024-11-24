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
    const [isFocused, setIsFocused] = useState<boolean>(false);

    useImperativeHandle(ref, () => {
      return {
        focus: () => {
          if (inputRef.current) inputRef.current.focus();
        },
      };
    });

    return (
      <div css={wrapper}>
        {label && (
          <Text typo="medium01" css={labelCss}>
            {label}
          </Text>
        )}

        <div
          onClick={() => {
            if (inputRef.current) {
              inputRef.current.focus();
              setIsFocused(true);
            }
          }}
          onBlur={(e: FocusEvent<HTMLDivElement>) => {
            if (!e.currentTarget.contains(e.relatedTarget as Node)) {
              setIsFocused(false);
            }
          }}
          css={inputWrapper({ errorMessage, isFocused })}
        >
          {prefix && prefix}
          <input
            ref={inputRef}
            type={type}
            spellCheck={spellCheck}
            autoComplete={autoComplete}
            disabled={disabled}
            css={input}
            onBlur={() => setIsFocused(false)}
            {...props}
          />
          {suffix && suffix}
        </div>

        {confirmMessage && (
          <div css={infoTextWrapper}>
            <Text typo="regular05" color="blue200">
              {confirmMessage}
            </Text>
          </div>
        )}

        {errorMessage && (
          <div css={infoTextWrapper}>
            <Text typo="regular05" color="red200">
              {errorMessage}
            </Text>
          </div>
        )}
      </div>
    );
  }
);
