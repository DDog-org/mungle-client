import type { SVGProps } from 'react';
export const AppBarBack = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14" {...props}>
    <g clipPath="url(#app_bar_back_svg__a)">
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 13 1 7l6-6"
      />
    </g>
    <defs>
      <clipPath id="app_bar_back_svg__a">
        <path fill="#fff" d="M0 0h8v14H0z" />
      </clipPath>
    </defs>
  </svg>
);
