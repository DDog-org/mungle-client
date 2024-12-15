import type { SVGProps } from 'react';
export const BlackUnfoldArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8" {...props}>
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13 1 7 7 1 1"
    />
  </svg>
);
