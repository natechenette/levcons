import * as React from "react";
import type { SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
}
const SvgProgress = ({ color = "#000", ...props }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 16 16"
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
      fill={color}
      fillRule="evenodd"
      d="M5 8a3 3 0 1 0 3-3v3z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgProgress;
