import type { SVGProps } from 'react';
export const CarouselLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" {...props}>
    <circle cx={10} cy={10} r={10} fill="#fff" fillOpacity={0.3} />
    <path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" d="m10.5 13-3-3 3-3" />
  </svg>
);
