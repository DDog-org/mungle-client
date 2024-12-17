import type { SVGProps } from 'react';
export const CarouselRight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" {...props}>
    <circle cx={10} cy={10} r={10} fill="#fff" fillOpacity={0.3} transform="rotate(-180 10 10)" />
    <path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" d="m9.5 7 3 3-3 3" />
  </svg>
);
