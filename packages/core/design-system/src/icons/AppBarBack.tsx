import type { SVGProps } from 'react';
export const AppBarBack = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14" {...props}>
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7 13 1 7l6-6"
    />
  </svg>
);
