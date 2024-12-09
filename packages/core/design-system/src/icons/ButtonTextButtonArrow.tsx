import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  strokeColor?: string;
}
export const ButtonTextButtonArrow = ({ strokeColor = '#979797', ...props }: Props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10" {...props}>
    <path
      stroke={strokeColor}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m1 1 4 4-4 4"
    />
  </svg>
);
