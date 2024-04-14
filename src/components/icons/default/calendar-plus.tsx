import * as React from "react";
import type { SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
}
const SvgCalendarPlus = ({ color = "#000", ...props }: Props) => (
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
      height={16.5}
      x={2.75}
      y={4.75}
      stroke={color}
      strokeWidth={1.5}
      rx={2.25}
    />
    <path stroke={color} strokeWidth={1.5} d="M2 8.25h19.636" />
    <path
      fill={color}
      d="M17.477 3a.75.75 0 0 0-1.5 0zm-1.5 0v1h1.5V3zM7.66 3a.75.75 0 0 0-1.5 0zm-1.5 0v1h1.5V3z"
    />
    <path
      stroke={color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M12 11.5v7M15.5 15h-7"
    />
  </svg>
);
export default SvgCalendarPlus;
