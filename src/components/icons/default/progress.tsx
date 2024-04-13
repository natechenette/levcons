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
    <path fill="#fff" d="M0 0h24v24H0z" />
    <rect
      width={18.5}
      height={18.5}
      x={2.75}
      y={2.75}
      stroke="#000"
      strokeWidth={1.5}
      rx={9.25}
    />
    <path
      fill="#000"
      fillRule="evenodd"
      d="M5 12a7 7 0 1 0 7-7v7z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgProgress;
