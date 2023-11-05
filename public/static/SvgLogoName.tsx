import * as React from "react"
import { SVGProps } from "react"
const SvgLogoName = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={163}
        height={52}
        overflow="hidden"
        {...props}
    >
        <text fill="currentColor" transform="translate(-.785 35)">
            {"\n              YourEstate\n            "}
        </text>
    </svg>
)
export default SvgLogoName
