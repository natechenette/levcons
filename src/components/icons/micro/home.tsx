import * as React from "react";
import type { SVGProps } from "react";
const SvgHome = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <path
      stroke="#000"
      strokeWidth={1.5}
      d="m3.25 6 4-3a1.25 1.25 0 0 1 1.5 0l4 3c.315.236.5.607.5 1v5c0 .69-.56 1.25-1.25 1.25H4c-.69 0-1.25-.56-1.25-1.25V7c0-.393.185-.764.5-1Z"
    />
    <path fill="#000" d="M8.75 9.5a.75.75 0 0 0-1.5 0zm-1.5 0v3h1.5v-3z" />
  </svg>
);
export default SvgHome;