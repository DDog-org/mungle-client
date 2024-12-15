import { useRouter } from 'next/router';
import { TextButton, Text } from '@daengle/design-system';
import { wrapper } from './index.styles';
import { ROUTES } from '~/constants/commons';

export function OptionSelector(): JSX.Element {
  const router = useRouter();
  const { id, service } = router.query;
  const estimateId = Number(id);

  return (
    <div css={wrapper}>
      <TextButton
        onClick={() =>
          router.push({
            pathname: ROUTES.ESTIMATE_REQUEST(estimateId),
            query: { service: service },
          })
        }
      >
        <Text typo="body4" color="gray500">
          내가 보낸 요청
        </Text>
      </TextButton>
    </div>
  );
}
