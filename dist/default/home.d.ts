import * as React from "react";
import type { SVGProps } from "react";
interface Props extends SVGProps<SVGSVGElement> {
    color?: string;
}
declare const SvgHome: ({ color, ...props }: Props) => React.JSX.Element;
export default SvgHome;
