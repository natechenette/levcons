import * as React from "react";
import type { SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
}
interface Props extends { color = "#000", ...props }: Props {
    color?: string;
}
declare const SvgCalendar: ({ color, ...props }: Props) => React.JSX.Element;
export default SvgCalendar;
