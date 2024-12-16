import { Text } from '@daengle/design-system';
import { addTitle, inputSection, textarea } from './index.styles';
import { ChangeEvent, TextareaHTMLAttributes } from 'react';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  title?: string;
  placeholder: string;
  height?: number;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

export function AddInput({
  title,
  placeholder,
  height,
  value,
  onChange,
  ...rest
}: Props): JSX.Element {
  const hasTitle = !!title;

  return (
    <div>
      {hasTitle && (
        <div css={addTitle}>
          <Text typo="body4" color="gray400">
            {title}
          </Text>
        </div>
      )}
      <section css={inputSection(hasTitle)}>
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
