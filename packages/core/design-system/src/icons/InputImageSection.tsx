import type { SVGProps } from 'react';
export const InputImageSection = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 70 70" {...props}>
    <rect width={69} height={69} x={0.5} y={0.5} stroke="#D9D9D9" rx={6.5} />
    <path stroke="#BEBEBE" strokeLinecap="round" strokeWidth={1.5} d="M30 35h12M36 29v12" />
  </svg>
);
