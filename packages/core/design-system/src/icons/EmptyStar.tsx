import type { SVGProps } from 'react';
export const EmptyStar = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 13" {...props}>
    <path
      stroke="#E6E6E6"
      strokeWidth={0.5}
      d="M10.82 3.6h.001l1.486.208c1.393.195 1.92 1.822.936 2.746l-1.076 1.01a2.07 2.07 0 0 0-.631 1.874l.254 1.425c.23 1.297-1.193 2.33-2.447 1.696l-1.33-.673a2.25 2.25 0 0 0-2.026 0l-1.33.673c-1.255.635-2.678-.4-2.447-1.696l.254-1.425a2.07 2.07 0 0 0-.631-1.874L.757 6.554c-.984-.924-.456-2.55.936-2.746l1.486-.207a2.18 2.18 0 0 0 1.645-1.152l.664-1.297c.617-1.203 2.408-1.203 3.024 0l.665 1.297A2.18 2.18 0 0 0 10.82 3.6Z"
    />
  </svg>
);
