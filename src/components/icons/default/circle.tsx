import * as React from "react";
import type { SVGProps } from "react";
const SvgCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <rect
      width={18.5}
      height={18.5}
      x={2.75}
      y={2.75}
      stroke="#000"
      strokeWidth={1.5}
      rx={9.25}
    />
  </svg>
);
export default SvgCircle;
