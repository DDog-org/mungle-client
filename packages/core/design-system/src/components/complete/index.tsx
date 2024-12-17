import { content, text, wrapper } from './index.styles';
import { RegistrationPending, TransmissionComplete } from '../../icons';
import { Text } from '../text';
import { RoundButton } from '../button';

interface Props {
  service?: 'daengle' | 'partner';
  type: 'notice' | 'complete';
  title: string;
  subtitle?: string;
  buttonLabel?: string;
  onButtonClick?: () => void;
}

export function Complete({ type, title, subtitle, buttonLabel, onButtonClick }: Props) {
  return (
    <section css={wrapper}>
      <div css={content}>
        {type === 'notice' && <RegistrationPending width={90} height={90} />}
        {type === 'complete' && <TransmissionComplete width={90} height={90} />}

        <div css={text}>
          <div css={title}>
            <Text typo="title2" color="black">
              {title}
            </Text>
          </div>

          <div css={subtitle}>
            <Text typo="body9" color="gray500">
              {subtitle}
            </Text>
          </div>
        </div>

        <RoundButton service="partner" size="S" onClick={onButtonClick}>
          <Text typo="body4" color="white">
            {buttonLabel}
          </Text>
        </RoundButton>
      </div>
    </section>
  );
}
