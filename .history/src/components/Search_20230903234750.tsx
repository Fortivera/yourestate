"use client"

import Image from "next/image"


const SearchIcon = () => {
    return (
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="40" height="40" viewBox="0 0 256.000000 256.000000"
            preserveAspectRatio="xMidYMid meet">

            <g transform="translate(0.000000,256.000000) scale(0.100000,-0.100000)"
                fill="#000000" stroke="none">
                <path d="M1113 2245 c-351 -64 -645 -314 -758 -645 -196 -576 163 -1180 764
                    -1285 464 -81 934 198 1086 646 196 573 -165 1179 -764 1284 -101 18 -230 18
                    -328 0z m348 -45 c313 -64 570 -277 690 -571 134 -329 63 -718 -177 -977 -148
                    -161 -305 -249 -516 -292 -259 -53 -535 11 -749 176 -79 60 -183 176 -229 254
                    -184 310 -184 669 1 983 59 100 211 251 314 311 211 122 439 162 666 116z"
                />
                <path d="M1028 1765 c-61 -17 -107 -45 -156 -99 -51 -56 -67 -87 -83 -164 -14
                    -68 -3 -157 28 -215 20 -40 89 -113 129 -138 41 -25 125 -49 174 -49 56 0 141
                    27 185 58 l40 30 202 -201 c161 -160 205 -199 215 -189 10 10 -29 54 -188 215
                    l-201 202 32 46 c59 85 69 217 25 316 -21 49 -88 124 -136 154 -74 45 -177 59
                    -266 34z m214 -53 c59 -26 124 -91 151 -151 30 -64 30 -178 0 -242 -27 -60
                    -92 -125 -152 -152 -64 -30 -178 -30 -242 0 -129 59 -202 206 -169 342 43 180
                    242 278 412 203z"
                />
            </g>
        </svg>
        // <Image width={"40"} height={"40"} className="rounded-full min-w-[40px]" src="/static/ann.png" alt={""} />
    )
}

export default SearchIcon