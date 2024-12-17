import type { SVGProps } from 'react';
export const PartnerChatPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" {...props}>
    <circle cx={12} cy={12} r={12} fill="#84DACF" />
    <path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" d="m6 13 6-6 6 6" />
    <path stroke="#fff" strokeLinecap="round" d="M12 18V7" />
  </svg>
);
