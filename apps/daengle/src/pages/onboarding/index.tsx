import { useRouter } from 'next/router';
import { AppBar, Layout } from '@daengle/design-system';
import { ROUTES } from '~/constants/commons/routes';
import { STEPS } from '~/constants/onboarding';
import { PetInfo, SearchAddress, UserInfo } from '~/components/onboarding';
import { useFunnel } from '~/hooks/commons/use-funnel';

export default function Onboarding() {
  const router = useRouter();
  const { Funnel, Step, setStep } = useFunnel({ defaultStep: STEPS.USER_INFO });

  return (
    <Layout>
      <AppBar onBackClick={router.back} />

      <Funnel>
        <Step name={STEPS.USER_INFO}>
          <UserInfo onNext={() => setStep(STEPS.PET_INFO)} />
        </Step>

        <Step name={STEPS.PET_INFO}>
          <PetInfo onNext={() => router.push(ROUTES.HOME)} />
        </Step>

        <Step name={STEPS.SEARCH_ADDRESS}>
          <SearchAddress />
        </Step>
      </Funnel>
    </Layout>
  );
}
