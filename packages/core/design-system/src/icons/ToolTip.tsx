import type { SVGProps } from 'react';
export const ToolTip = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" {...props}>
    <circle cx={7} cy={7} r={7} fill="#D9D9D9" />
    <circle cx={7} cy={4.455} r={0.636} fill="#fff" />
    <rect width={1.273} height={3.818} x={6.363} y={6.363} fill="#fff" rx={0.636} />
  </svg>
);
