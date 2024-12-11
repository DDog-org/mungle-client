import type { SVGProps } from 'react';
export const TransmissionComplete = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 90 90" {...props}>
    <circle cx={45} cy={45} r={44} stroke="currentColor" strokeWidth={2} />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M23 48.5 35.356 61 66 30"
    />
  </svg>
);
