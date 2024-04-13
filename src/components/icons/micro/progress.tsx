import * as React from "react";
import type { SVGProps } from "react";
const SvgProgress = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <path fill="#fff" d="M0 0h16v16H0z" />
    <rect
      width={10.5}
      height={10.5}
      x={2.75}
      y={2.75}
      stroke="#000"
      strokeWidth={1.5}
      rx={5.25}
    />
    <path
      fill="#000"
      fillRule="evenodd"
      d="M5 8a3 3 0 1 0 3-3v3z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgProgress;
