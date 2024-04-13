import * as React from "react";
import type { SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {
  color?: string; // Define color prop
}
const SvgHome = ({ color = "#000", ...props }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    {...props}
  >
    <path
      stroke={color}
      strokeWidth={1.5}
      d="m3.23 7.75 6-4.695a1.25 1.25 0 0 1 1.54 0l6 4.695c.303.237.48.6.48.985V16c0 .69-.56 1.25-1.25 1.25H4c-.69 0-1.25-.56-1.25-1.25V8.735c0-.385.177-.748.48-.985Z"
    />
    <path
      stroke={color}
      strokeWidth={1.5}
      d="M11.25 14v3.25h-2.5V14a1.25 1.25 0 1 1 2.5 0Z"
    />
  </svg>
);
export default SvgHome;
