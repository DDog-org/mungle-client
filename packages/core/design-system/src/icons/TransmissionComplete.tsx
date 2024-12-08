import type { SVGProps } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
}
export const TransmissionComplete = ({ color = '#84DACF', ...props }: Props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={90} height={90} fill="none" {...props}>
    <circle cx={45} cy={45} r={44} stroke="#84DACF" strokeWidth={2} />
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M23 48.5 35.356 61 66 30"
    />
  </svg>
);
