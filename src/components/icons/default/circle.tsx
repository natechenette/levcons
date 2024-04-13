import * as React from "react";
import type { SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {
  color?: string; // Define color prop
}
const SvgCircle = ({ color = "#000", ...props }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
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
  </svg>
);
export default SvgCircle;
