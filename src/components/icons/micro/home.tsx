import * as React from "react";
import type { SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
}
const SvgHome = ({ color = "#000", ...props }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      stroke={color}
      strokeWidth={1.5}
      d="m3.25 6 4-3a1.25 1.25 0 0 1 1.5 0l4 3c.315.236.5.607.5 1v5c0 .69-.56 1.25-1.25 1.25h-2a.25.25 0 0 1-.25-.25v-2a1.75 1.75 0 1 0-3.5 0v2a.25.25 0 0 1-.25.25H4c-.69 0-1.25-.56-1.25-1.25V7c0-.393.185-.764.5-1Z"
    />
  </svg>
);
export default SvgHome;
