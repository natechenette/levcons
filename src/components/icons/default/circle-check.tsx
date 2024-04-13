import * as React from "react";
import type { SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {
  color?: string; // Define color prop
}
const SvgCircleCheck = ({ color = "#000", ...props }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    {...props}
  >
    <rect
      width={18.5}
      height={18.5}
      x={2.75}
      y={2.75}
      stroke={color}
      strokeWidth={1.5}
      rx={9.25}
    />
    <path
      stroke={color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m8 12.389 3.2 3.111 4.8-7"
    />
  </svg>
);
export default SvgCircleCheck;
