import * as React from "react";
import type { SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {
  color?: string; // Define color prop
}
const SvgCircleCheck = ({ color = "#000", ...props }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    {...props}
  >
    <rect
      width={10.5}
      height={10.5}
      x={2.75}
      y={2.75}
      stroke={color}
      strokeWidth={1.5}
      rx={5.25}
    />
    <path
      stroke={color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M6 8.167 7.6 9.5l2.4-3"
    />
  </svg>
);
export default SvgCircleCheck;
