import type { SVGProps } from 'react';
export const MypageAddButton = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 59 59" {...props}>
    <circle cx={29.5} cy={29.5} r={29} fill="#fff" stroke="#E6E6E6" />
    <path stroke="#D9D9D9" strokeLinecap="round" d="M23 29.5h13M29.5 23v13" />
  </svg>
);
