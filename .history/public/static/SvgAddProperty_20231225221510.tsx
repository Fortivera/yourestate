import * as React from "react"
import { SVGProps } from "react"
const SvgAddProperty = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
        <path stroke="currentColor" d="M9 12h3m3 0h-3m0 0V9m0 3v3M4 21.4V2.6a.6.6 0 0 1 .6-.6h11.652a.6.6 0 0 1 .424.176l3.148 3.148A.6.6 0 0 1 20 5.75V21.4a.6.6 0 0 1-.6.6H4.6a.6.6 0 0 1-.6-.6Z" />
        <path fill="currentColor" stroke="currentColor" d="M16 5.4V2.354a.354.354 0 0 1 .604-.25l3.292 3.292a.353.353 0 0 1-.25.604H16.6a.6.6 0 0 1-.6-.6Z" />
    </svg>
)
export default SvgAddProperty
