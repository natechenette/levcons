import * as React from "react";
import type { SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
}
const SvgCurrencyDollar = ({ color = "#000", ...props }: Props) => (
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
      height={18.5}
      x={2.75}
      y={2.75}
      stroke={color}
      strokeWidth={1.5}
      rx={9.25}
    />
    <path
      stroke={color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M14.5 8h-4a2 2 0 0 0-2 2v0a2 2 0 0 0 2 2h3a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2h-4M12.25 6v12"
    />
  </svg>
);
export default SvgCurrencyDollar;
