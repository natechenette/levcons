import * as React from "react";
import type { SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
}
const SvgHome = ({ color = "#000", ...props }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke={color}
      strokeWidth={1.5}
      d="m3.627 8.894 7-5.39a2.25 2.25 0 0 1 2.746 0l7 5.39a2.25 2.25 0 0 1 .877 1.782V19A2.25 2.25 0 0 1 19 21.25h-3c-.69 0-1.25-.56-1.25-1.25v-3a2.75 2.75 0 1 0-5.5 0v3c0 .69-.56 1.25-1.25 1.25H5A2.25 2.25 0 0 1 2.75 19v-8.324c0-.698.324-1.356.877-1.782Z"
    />
  </svg>
);
export default SvgHome;
