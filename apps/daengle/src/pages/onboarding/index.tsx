import { useRouter } from 'next/router';
import { useFunnel } from '@daengle/services/hooks';
import { AppBar, Layout } from '@daengle/design-system';
import { ROUTES } from '~/constants/commons';
import { PetInfo, SearchAddress, UserInfo } from '~/components/onboarding';
import { STEPS } from '~/constants/onboarding';

export default function Onboarding() {
  const router = useRouter();

  const getCurrentStep = () => router.query.step as string;

  const onSetStep = (newStep: string) => {
    router.push({
      pathname: router.pathname,
      query: { step: newStep },
    });
  };

  const { Funnel, Step, setStep } = useFunnel({
    defaultStep: STEPS.USER_INFO,
    onSetStep,
    getCurrentStep,
  });

  return (
    <Layout>
      <AppBar onBackClick={router.back} suffix={<></>} backgroundColor="white" />

      <Funnel>
        <Step name={STEPS.USER_INFO}>
          <UserInfo onNext={() => setStep(STEPS.PET_INFO)} />
        </Step>

        <Step name={STEPS.PET_INFO}>
          <PetInfo onNext={() => router.replace(ROUTES.HOME)} />
        </Step>

        <Step name={STEPS.SEARCH_ADDRESS}>
          <SearchAddress />
        </Step>
      </Funnel>
    </Layout>
  );
}
