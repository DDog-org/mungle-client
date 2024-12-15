import { useRouter } from 'next/router';
import { AppBar, Layout } from '@daengle/design-system';
import { DaumPostcode, Address } from '@daengle/services/libs';
import { ROUTES } from '~/constants/commons/routes';
import { css } from '@emotion/react';
import { useAddressFormStore } from '~/stores/main';

export default function SearchAddress() {
  const router = useRouter();
  const { setAddressForm } = useAddressFormStore();

  const handleSearchAddress = (address: Address) => {
    const jibunAddress = `${address.sido} ${address.sigungu} ${address.bname}`;
    setAddressForm(jibunAddress);
    router.push(ROUTES.HOME);
  };

  return (
    <Layout>
      <AppBar onBackClick={router.back} />
      <section css={wrapper}>
        <DaumPostcode onComplete={handleSearchAddress} />
      </section>
    </Layout>
  );
}

const wrapper = css`
  width: 100%;
  height: 100%;
`;
