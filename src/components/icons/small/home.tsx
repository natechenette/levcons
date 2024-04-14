import * as React from "react";
import type { SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
}
const SvgHome = ({ color = "#000", ...props }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      stroke={color}
      strokeWidth={1.5}
      d="m3.613 7.45 5-3.913a2.25 2.25 0 0 1 2.774 0l5 3.913a2.25 2.25 0 0 1 .863 1.772V15A2.25 2.25 0 0 1 15 17.25h-2.5a.25.25 0 0 1-.25-.25v-3a2.25 2.25 0 0 0-4.5 0v3a.25.25 0 0 1-.25.25H5A2.25 2.25 0 0 1 2.75 15V9.222c0-.692.318-1.346.863-1.772Z"
    />
  </svg>
);
export default SvgHome;
