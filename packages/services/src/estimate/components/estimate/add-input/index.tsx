import { Text } from '@daengle/design-system';
import { addTitle, inputSection, textarea } from './index.styles';

interface Props {
  title: string;
  placeholder: string;
  height?: number;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const AddInput = ({ title, placeholder, height, value, onChange }: Props) => {
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
          value={value}
          onChange={onChange}
        />
      </section>
    </div>
  );
};

export default AddInput;
