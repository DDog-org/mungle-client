import { useRouter } from 'next/router';
import { EmptyLogo } from '@daengle/design-system/icons';
import { RoundButton, Text } from '@daengle/design-system';
import { ROUTES } from '~/constants/commons';
import { wrapper } from './index.styles';

interface Props {
  title: string;
  actionLabel?: string;
}

export function Empty({ title, actionLabel }: Props) {
  const router = useRouter();

  return (
    <div css={wrapper}>
      <EmptyLogo width={42} height={47} />
      <Text typo="subtitle3" color="gray400">
        {title}
      </Text>

      {actionLabel && (
        <RoundButton size="S" onClick={() => router.push(ROUTES.RESERVATIONS)}>
          <Text typo="body4" color="white">
            {actionLabel}
          </Text>
        </RoundButton>
      )}
    </div>
  );
}
