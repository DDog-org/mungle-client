import { ReactElement, ReactNode } from 'react';

interface Props {
  defaultStep?: string;
  onSetStep?: (newStep: string) => void;
  getCurrentStep?: () => string | undefined;
}

interface StepProps {
  name: string;
  children: ReactNode;
}

export interface FunnelProps {
  children: Array<ReactElement<StepProps>>;
}

export function useFunnel({ defaultStep, onSetStep, getCurrentStep }: Props) {
  const Step = ({ children }: StepProps) => {
    return <>{children}</>;
  };

  const Funnel = ({ children }: FunnelProps) => {
    const step = getCurrentStep ? getCurrentStep() : defaultStep;
    const targetStep = children.find((childStep) => childStep.props.name === step);
    return <>{targetStep}</>;
  };

  const setStep = (newStep: string) => {
    onSetStep?.(newStep);
  };

  return { Funnel, Step, setStep, currentStep: getCurrentStep?.() } as const;
}
