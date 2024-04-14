import * as React from "react";
import type { SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
}
const SvgCalendar = ({ color = "#000", ...props }: Props) => (
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
      d="M14.75 3a.75.75 0 0 0-1.5 0zm-1.5 0v1.333h1.5V3zM6.75 3a.75.75 0 0 0-1.5 0zm-1.5 0v1.333h1.5V3zM5.5 10.5H7V12H5.5zM8 10.5h1.5V12H8zM10.5 10.5H12V12h-1.5zM13 10.5h1.5V12H13zM5.5 13H7v1.5H5.5zM8 13h1.5v1.5H8zM10.5 13H12v1.5h-1.5z"
    />
  </svg>
);
export default SvgCalendar;
