import type { SVGProps } from 'react';
export const RegistrationPending = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 90 90" {...props}>
    <circle cx={45} cy={45} r={44} stroke="#84DACF" strokeWidth={2} />
    <path stroke="#84DACF" strokeLinecap="round" strokeWidth={3} d="M45 22v34" />
    <circle cx={45} cy={66} r={1.5} fill="#84DACF" stroke="#84DACF" />
  </svg>
);
