import * as React from "react";
import type { SVGProps } from "react";
const SvgCalendar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <rect
      width={10.5}
      height={9.5}
      x={2.75}
      y={3.75}
      stroke="#000"
      strokeWidth={1.5}
      rx={1.25}
    />
    <path stroke="#000" strokeWidth={1.5} d="M2 6.25h12" />
    <path
      fill="#000"
      d="M11.75 3a.75.75 0 0 0-1.5 0zm-1.5 0v1h1.5V3zM5.75 3a.75.75 0 0 0-1.5 0zm-1.5 0v1h1.5V3z"
    />
  </svg>
);
export default SvgCalendar;
