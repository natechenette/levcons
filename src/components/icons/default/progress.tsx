import * as React from "react";
import type { SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
}
const SvgProgress = ({ color = "#000", ...props }: Props) => (
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
      stroke={color}
      strokeWidth={1.5}
      rx={9.25}
    />
    <path
      fill={color}
      fillRule="evenodd"
      d="M5 12a7 7 0 1 0 7-7v7z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgProgress;
