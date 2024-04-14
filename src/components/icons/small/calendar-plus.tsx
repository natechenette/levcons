import * as React from "react";
import type { SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
}
const SvgCalendarPlus = ({ color = "#000", ...props }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <rect
      width={14.5}
      height={12.5}
      x={2.75}
      y={4.75}
      stroke={color}
      strokeWidth={1.5}
      rx={2.25}
    />
    <path stroke={color} strokeWidth={1.5} d="M2 7.583h16" />
    <path
      fill={color}
      d="M14.75 3a.75.75 0 0 0-1.5 0zm-1.5 0v1.333h1.5V3zM6.75 3a.75.75 0 0 0-1.5 0zm-1.5 0v1.333h1.5V3z"
    />
    <path
      stroke={color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M10 10v5M12.5 12.5h-5"
    />
  </svg>
);
export default SvgCalendarPlus;
