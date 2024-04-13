import * as React from "react";
import type { SVGProps } from "react";
const SvgCircleCheck = (props: SVGProps<SVGSVGElement>) => (
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
      height={14.5}
      x={2.75}
      y={2.75}
      stroke="#000"
      strokeWidth={1.5}
      rx={7.25}
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M7 10.278 9.4 12.5l3.6-5"
    />
  </svg>
);
export default SvgCircleCheck;
