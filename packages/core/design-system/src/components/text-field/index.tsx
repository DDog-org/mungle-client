import { forwardRef, TextareaHTMLAttributes, useImperativeHandle, useRef } from 'react';
import { errorMessageWrapper, textarea, textareaWrapper, wrapper } from './index.styles';
import { Text } from '../text';

export interface TextFieldRef {
  focus: () => void;
}

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  service?: 'daengle' | 'partner';
  label?: string;
  name?: string;
  errorMessage?: string;
}

export const TextField = forwardRef<TextFieldRef, Props>(
  ({ service = 'daengle', label, name, errorMessage, required, ...rest }, ref) => {
    const textFieldRef = useRef<HTMLTextAreaElement>(null);
    useImperativeHandle(ref, () => textFieldRef.current as TextFieldRef);

    return (
      <div css={wrapper}>
        {label && (
          <label htmlFor={name}>
            <Text typo="body4" color="gray400">
              {label}
              {required && (
                <Text typo="body4" color={service === 'daengle' ? 'blue200' : 'green200'}>
                  {' '}
                  *
                </Text>
              )}
            </Text>
          </label>
        )}

        <div css={textareaWrapper}>
          <textarea
            id={name}
            name={name}
            ref={textFieldRef}
            css={textarea}
            spellCheck={false}
            {...rest}
          />
        </div>

        {errorMessage && (
          <div css={errorMessageWrapper}>
            <Text typo="body12" color="red200" css={errorMessageWrapper}>
              {errorMessage}
            </Text>
          </div>
        )}
      </div>
    );
  }
);
