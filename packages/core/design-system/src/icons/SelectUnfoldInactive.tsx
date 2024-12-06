import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
}

export const SelectUnfoldInactive = ({
  color = '#E6E6E6',
  width = '8px',
  height = '5px',
  ...props
}: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 8 5"
    width={width}
    height={height}
    {...props}
  >
    <g clipPath="url(#select_unfold_inactive_svg__a)">
      <path stroke={color} strokeLinecap="round" strokeLinejoin="round" d="M7 1 4 4 1 1" />
    </g>
    <defs>
      <clipPath id="select_unfold_inactive_svg__a">
        <path fill="#fff" d="M0 0h8v5H0z" />
      </clipPath>
    </defs>
  </svg>
);
