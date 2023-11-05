"use client"
import Link from "next/link"
import ThemeToggle from "./ThemeToggle"
import { ThemeContext } from "@/context/ThemeContex"
import { useContext } from "react"
import Image from "next/image"
import SvgLogout from "public/static/SvgLogout"
import SvgAddProperty from "public/static/SvgAddProperty"
import SvgLogoName from "public/static/SvgLogoName"
import SvgMainLogo from "public/static/SvgMainLogo"

export default function Navbar() {
  const { theme } = useContext(ThemeContext)

  return (
    <nav className={`${theme === "light" ? "navbarLight" : "navbarDark"} font-Noto text-lg shadow-sm shadow-slate-100 flex items-center justify-between `}>
      <div className="flex items-center  ">
        <div className="flex w-full items-center justify-between gap-8 md:w-auto">
          <SvgMainLogo height="40" width="42" className=" md:h-12 md:w-12 pt-[6px] pl-2" />


        </div>
        <SvgLogoName fill="currentColor" fontFamily="Segoe UI Black" fontWeight="800" fontSize="30" />

      </div>
      <div className="flex items-center space-x-5">
        <ThemeToggle />
        <Link href={"dashboard/createproperty"}>
          <div className="h-10 flex items-center px-3">
            <SvgAddProperty className="m-1" strokeWidth={1.5} />
            <div>Add Property</div>
          </div>
        </Link>

        <Link href={"/"}>
          <div className="h-10 flex items-center px-3">
            <SvgLogout strokeWidth={2} className="m-1" />
            <div>Logout </div>
          </div>
        </Link>
        <div className="h-10 flex items-center px-3">
          <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet" stroke="currentColor" fill="none">
            <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="currentColor">
              <path
                d="M2240 5105 c-300 -39 -543 -112 -815 -245 -617 -302 -1101 -864
                            -1309 -1518 -82 -262 -116 -487 -116 -782 0 -216 17 -382 56 -557 105 -472
                            328 -882 669 -1232 419 -430 948 -690 1550 -760 135 -16 463 -14 607 5 587 74
                            1108 336 1523 765 390 404 632 907 700 1459 20 163 20 477 0 640 -92 742 -511
                            1413 -1140 1826 -331 216 -696 351 -1085 399 -150 18 -501 18 -640 0z m501
                            -320 c258 -14 554 -97 814 -227 574 -287 1001 -810 1164 -1428 59 -224 66
                            -281 66 -570 0 -289 -7 -346 -66 -570 -74 -278 -204 -546 -378 -776 l-48 -63
                            -27 102 c-135 504 -482 921 -955 1145 l-94 45 44 35 c186 149 332 377 392 611
                            19 73 22 114 22 271 0 157 -3 198 -22 271 -102 400 -420 720 -817 821 -124 31
                            -370 36 -496 10 -451 -95 -789 -429 -880 -872 -19 -90 -21 -128 -17 -265 6
                            -183 23 -270 85 -413 68 -158 196 -326 331 -434 l43 -35 -133 -66 c-74 -37
                            -177 -98 -229 -135 -117 -83 -335 -298 -414 -410 -122 -173 -220 -382 -273
                            -581 l-26 -100 -48 63 c-214 283 -356 612 -426 986 -25 137 -25 583 0 720 88
                            468 282 856 592 1179 321 335 728 561 1170 650 160 32 358 51 480 44 28 -1 93
                            -5 146 -8z m7 -656 c178 -41 358 -163 461 -313 49 -71 107 -202 125 -283 20
                            -92 21 -253 0 -346 -20 -94 -100 -257 -162 -331 -230 -276 -617 -365 -939
                            -216 -102 48 -161 88 -233 160 -152 152 -230 341 -230 560 0 170 46 318 142
                            459 49 70 158 171 234 217 194 114 384 143 602 93z m-53 -1903 c161 -10 388
                            -78 545 -164 253 -138 489 -384 611 -639 75 -156 125 -339 136 -498 l6 -81
                            -89 -66 c-130 -96 -214 -148 -349 -215 -355 -178 -726 -254 -1128 -232 -430
                            24 -838 173 -1197 437 l-103 75 7 91 c11 167 78 389 164 546 65 119 145 224
                            251 330 201 201 413 320 686 386 100 24 285 44 345 38 14 -2 66 -5 115 -8z"
              />
            </g>
          </svg>
          <div className="ml-1">Admin</div>
        </div>
      </div>
    </nav>
  )
}
