import { Text } from '@daengle/design-system';
import { addTitle, inputSection, textarea } from './index.styles';
import { TextareaHTMLAttributes } from 'react';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  title: string;
  placeholder: string;
  height?: number;
}

export function AddInput({
  title,
  placeholder,
  height,
  value,
  onChange,
  ...rest
}: Props): JSX.Element {
  return (
    <div>
      <div css={addTitle}>
        <Text typo="body4" color="gray400">
          {title}
        </Text>
      </div>
      <section css={inputSection}>
        <textarea
          css={[textarea, height && { minHeight: `${height}px` }]}
          placeholder={placeholder}
          maxLength={400}
          value={value}
          onChange={onChange}
          {...rest}
        />
      </section>
    </div>
  );
}
