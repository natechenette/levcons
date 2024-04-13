import * as React from "react";
import type { SVGProps } from "react";
const SvgProgress = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
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
      fill="#000"
      fillRule="evenodd"
      d="M5 10a5 5 0 1 0 5-5v5z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgProgress;
