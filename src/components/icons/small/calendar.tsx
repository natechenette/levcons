import * as React from "react";
import type { SVGProps } from "react";
const SvgCalendar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <rect
      width={14.5}
      height={13.167}
      x={2.75}
      y={3.75}
      stroke="#000"
      strokeWidth={1.5}
      rx={1.25}
    />
    <path stroke="#000" strokeWidth={1.5} d="M2 7.583h16" />
    <path
      fill="#000"
      d="M14.75 3a.75.75 0 0 0-1.5 0zm-1.5 0v1.333h1.5V3zM6.75 3a.75.75 0 0 0-1.5 0zm-1.5 0v1.333h1.5V3z"
    />
  </svg>
);
export default SvgCalendar;
