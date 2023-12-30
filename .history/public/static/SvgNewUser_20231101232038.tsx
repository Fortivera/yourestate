import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={800} height={800} fill="none" viewBox="0 0 24 24" {...props}>
    <g fill="#000" fillRule="evenodd" clipRule="evenodd">
      <path d="M12 2.75a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5ZM6.75 6.5a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0ZM4.25 18.571a5.321 5.321 0 0 1 5.321-5.321h4.858a5.321 5.321 0 0 1 5.321 5.321 4.179 4.179 0 0 1-4.179 4.179H8.43a4.179 4.179 0 0 1-4.179-4.179Zm5.321-3.821a3.821 3.821 0 0 0-3.821 3.821c0 1.48 1.2 2.679 2.679 2.679h7.142c1.48 0 2.679-1.2 2.679-2.679 0-2.11-1.71-3.821-3.821-3.821H9.57Z" />
    </g>
  </svg>
)
export default SvgComponent
