import {
  AppBar,
  CTAButton,
  Layout,
  RoundButton,
  Text,
  useDialog,
  useToast,
} from '@daengle/design-system';
import { useRouter } from 'next/router';
import { Section } from '../section';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import { PetImage } from '../pet-image';
import { header, wrapper } from './index.styles';
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

  const { mutateAsync: cancelGroomingEstimate, isSuccess: isCancelGroomingSuccess } =
    usePostEstimateCancelGroomingMutation();
  const { mutateAsync: cancelCareEstimate, isSuccess: isCancelCateSuccess } =
    usePostEstimateCancelCareMutation();

  const { open } = useDialog();
  const { showToast } = useToast();

  const handleRequest = () => {
    open({
      type: 'warn',
      title: '견적을 그만 받으시겠습니까?',
      primaryActionLabel: '그만 받기',
      onPrimaryAction:
        service === 'groomer'
          ? () => cancelGroomingEstimate({ estimateId })
          : () => cancelCareEstimate({ estimateId }),
      secondaryActionLabel: '취소',
    });
  };

  if (isCancelGroomingSuccess || isCancelCateSuccess) {
    router.push(ROUTES.ESTIMATES);
    showToast({ title: '견적 요청이 취소되었어요' });
  }

  return (
    <Layout>
      <AppBar backgroundColor="white" onBackClick={router.back} onHomeClick={() => router.back()} />

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
      </div>

      <CTAButton service="daengle" onClick={handleRequest}>
        요청 취소하기
      </CTAButton>
    </Layout>
  );
}
