import * as React from "react";
import type { SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
}
const SvgCalendar = ({ color = "#000", ...props }: Props) => (
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
      height={9.5}
      x={2.75}
      y={3.75}
      stroke={color}
      strokeWidth={1.5}
      rx={1.25}
    />
    <path stroke={color} strokeWidth={1.5} d="M2 6.25h12" />
    <path
      fill={color}
      d="M11.75 3a.75.75 0 0 0-1.5 0zm-1.5 0v1h1.5V3zM5.75 3a.75.75 0 0 0-1.5 0zm-1.5 0v1h1.5V3zM4.75 7.75h1.5v1.5h-1.5zM7.25 7.75h1.5v1.5h-1.5zM9.75 7.75h1.5v1.5h-1.5zM4.75 10.25h1.5v1.5h-1.5zM7.25 10.25h1.5v1.5h-1.5z"
    />
  </svg>
);
export default SvgCalendar;
