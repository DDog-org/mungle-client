import { ReactElement } from 'react';
import { useRouter } from 'next/router';

interface Props {
  defaultStep?: string;
}

interface StepProps {
  name: string;
  children: React.ReactNode;
}

export interface FunnelProps {
  children: Array<ReactElement<StepProps>>;
}

export function useFunnel({ defaultStep }: Props) {
  const router = useRouter();

  const Step = ({ children }: StepProps) => {
    return <>{children}</>;
  };

  const Funnel = ({ children }: FunnelProps) => {
    const { step = defaultStep } = router.query;
    const targetStep = children.find((childStep) => childStep.props.name === step);

    return <>{targetStep}</>;
  };

  const setStep = (newStep: string) => {
    router.push({
      pathname: router.pathname,
      query: { step: newStep },
    });
  };

  return { Funnel, Step, setStep, currentStep: router.query.step } as const;
}
