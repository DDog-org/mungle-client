import { AppBar, Layout, RoundButton, Text } from '@daengle/design-system';
import { useRouter } from 'next/router';
import { Section } from '../section';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import { PetImage } from '../pet-image';
import { footer, header, wrapper } from './index.styles';
import {
  usePostEstimateCancelCareMutation,
  usePostEstimateCancelGroomingMutation,
} from '~/queries';
import { ROUTES } from '~/constants/commons';

interface Props {
  estimateId: number;
  service: 'vet' | 'groomer';
  address: string;
  reservedDate: string;
  petImageUrl: string;
  petName: string;
  specificField: {
    title: string;
    value: string;
  };
  requirements: string;
}

export function RequestEstimate({
  estimateId,
  service,
  address,
  reservedDate,
  petImageUrl,
  petName,
  specificField,
  requirements,
}: Props): JSX.Element {
  const router = useRouter();

  const { mutate: cancelGroomingEstimate } = usePostEstimateCancelGroomingMutation();
  const { mutate: cancelCareEstimate } = usePostEstimateCancelCareMutation();

  const handleRequest = () => {
    if (!confirm('견적을 그만 받으시겠습니까?')) return;

    const onSuccess = () => {
      alert('요청이 성공적으로 취소되었습니다.');
      router.push(ROUTES.ESTIMATES);
    };

    const onError = (error: any) => {
      console.error(error);
      alert('요청 취소 중 오류가 발생했습니다.');
    };

    if (service === 'groomer') {
      cancelGroomingEstimate({ estimateId }, { onSuccess, onError });
    } else if (service === 'vet') {
      cancelCareEstimate({ estimateId }, { onSuccess, onError });
    }
  };

  return (
    <Layout>
      <AppBar onBackClick={router.back} onHomeClick={() => router.back()} />
      <div css={wrapper}>
        <div css={header}>
          <Text typo="title1">내가 보낸 요청</Text>
        </div>
        <Section title="지역">
          <Text typo="title2">{address}</Text>
        </Section>
        <Section title="시술 희망 날짜 및 시간">
          <Text typo="title2">
            {dayjs(reservedDate).locale('ko').format('YYYY.MM.DD(ddd) • HH:mm')}
          </Text>
        </Section>
        {/* 서비스에 따라 제목 분기 처리 */}
        <Section
          title={
            service === 'vet'
              ? '어떤 아이가 진료받을 예정인가요?'
              : '어떤 아이를 가꾸실 예정인가요?'
          }
        >
          <PetImage petImage={petImageUrl} petname={petName} />
        </Section>
        <Section title={specificField.title}>
          <Text typo="title2">{specificField.value}</Text>
        </Section>
        <Section title="추가 요청사항">
          <Text typo="subtitle1">{requirements}</Text>
        </Section>
        <div css={footer}>
          <RoundButton
            service="daengle"
            size="L"
            variant="primary"
            fullWidth
            onClick={handleRequest}
          >
            <Text typo="subtitle2" color="white">
              요청 취소하기
            </Text>
          </RoundButton>
        </div>
      </div>
    </Layout>
  );
}
