import * as React from "react";
import type { SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {
  color?: string; // Define color prop
}
const SvgHome = ({ color = "#000", ...props }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    {...props}
  >
    <path
      stroke={color}
      strokeWidth={1.5}
      d="m3.237 9.194 8-6.16a1.25 1.25 0 0 1 1.526 0l8 6.16c.307.236.487.602.487.99V20c0 .69-.56 1.25-1.25 1.25H4c-.69 0-1.25-.56-1.25-1.25v-9.816c0-.388.18-.754.487-.99Z"
    />
    <path
      stroke={color}
      strokeWidth={1.5}
      d="M14.25 16v5.25h-4.5V16a2.25 2.25 0 0 1 4.5 0Z"
    />
  </svg>
);
export default SvgHome;
