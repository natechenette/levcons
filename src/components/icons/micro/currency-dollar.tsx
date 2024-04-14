import * as React from "react";
import type { SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
}
const SvgCurrencyDollar = ({ color = "#000", ...props }: Props) => (
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
      height={10.5}
      x={2.75}
      y={2.75}
      stroke={color}
      strokeWidth={1.5}
      rx={5.25}
    />
    <path
      stroke={color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M9.964 5.833h-3.63c-.599 0-1.084.485-1.084 1.084v0C5.25 7.515 5.735 8 6.333 8h3.334c.598 0 1.083.485 1.083 1.083v0c0 .599-.485 1.084-1.083 1.084H6.036M8.196 4.75v6.5"
    />
  </svg>
);
export default SvgCurrencyDollar;
