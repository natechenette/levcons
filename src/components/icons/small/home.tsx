import * as React from "react";
import type { SVGProps } from "react";
const SvgHome = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    {...props}
  >
    <path
      stroke="#000"
      strokeWidth={1.5}
      d="m3.23 7.75 6-4.695a1.25 1.25 0 0 1 1.54 0l6 4.695c.303.237.48.6.48.985V16c0 .69-.56 1.25-1.25 1.25H4c-.69 0-1.25-.56-1.25-1.25V8.735c0-.385.177-.748.48-.985Z"
    />
    <path fill="#000" d="M8 14a2 2 0 1 1 4 0v3H8z" />
  </svg>
);
export default SvgHome;
