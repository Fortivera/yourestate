"use client"
import Link from "next/link"
import ThemeToggle from "./ThemeToggle"
import { ThemeContext } from "@/context/ThemeContex"
import { useContext } from "react"

export default function Navbar() {
  const { theme } = useContext(ThemeContext)

  return (
    <nav className={`${theme === "light" ? "navbarLight" : "navbarDark"} font-Noto text-lg shadow-sm shadow-slate-100 flex items-center justify-between `}>
      <div className="flex items-center  ">
        <div className="flex w-full items-center justify-between gap-8 md:w-auto">
          <div className="flex items-center gap-1 ">
            <svg fill="#000000" height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve">
              <path id="Mail" d="M58.0034485,8H5.9965506c-3.3136795,0-5.9999995,2.6862001-5.9999995,6v36c0,3.3137016,2.6863203,6,5.9999995,6
	h52.006897c3.3137016,0,6-2.6862984,6-6V14C64.0034485,10.6862001,61.3171501,8,58.0034485,8z M62.0034485,49.1108017
	L43.084549,30.1919994l18.9188995-12.0555992V49.1108017z M5.9965506,10h52.006897c2.2056007,0,4,1.7943001,4,4v1.7664003
	L34.4677505,33.3134003c-1.4902,0.9492989-3.3935013,0.9199982-4.8495998-0.0703011L1.9965508,14.4694996V14
	C1.9965508,11.7943001,3.7910507,10,5.9965506,10z M1.9965508,16.8852005L21.182251,29.9251003L1.9965508,49.1108017V16.8852005z
	 M58.0034485,54H5.9965506c-1.6473999,0-3.0638998-1.0021019-3.6760998-2.4278984l20.5199013-20.5200024l5.6547985,3.843401
	c1.0859013,0.7383003,2.3418007,1.1083984,3.5995998,1.1083984c1.1953011,0,2.3925018-0.3339996,3.4463005-1.0048981
	l5.8423996-3.7230015l20.2961006,20.2961025C61.0673485,52.9978981,59.6508713,54,58.0034485,54z"/>
            </svg>
          </div>
        </div>

        <svg width="163" height="52" xmlns="http://www.w3.org/2000/svg" overflow="hidden">
          <g transform="translate(-300 -45)">
            <text fill="currentColor" fontFamily="Segoe UI Black" fontWeight="800" fontSize="30" transform="translate(299.215 80)">
              YourEstate
            </text>
          </g>
        </svg>
      </div>
      <div className="flex items-center space-x-5">
        <ThemeToggle />
        <Link href={"dashboard/createproperty"}>
          <div className="h-10 flex items-center px-3">
            <div className="m-1">
              <svg fill="none" height="24" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12H12M15 12H12M12 12V9M12 12V15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 21.4V2.6C4 2.26863 4.26863 2 4.6 2H16.2515C16.4106 2 16.5632 2.06321 16.6757 2.17574L19.8243 5.32426C19.9368 5.43679 20 5.5894 20 5.74853V21.4C20 21.7314 19.7314 22 19.4 22H4.6C4.26863 22 4 21.7314 4 21.4Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16 5.4V2.35355C16 2.15829 16.1583 2 16.3536 2C16.4473 2 16.5372 2.03725 16.6036 2.10355L19.8964 5.39645C19.9628 5.46275 20 5.55268 20 5.64645C20 5.84171 19.8417 6 19.6464 6H16.6C16.2686 6 16 5.73137 16 5.4Z" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>Add Property</div>
          </div>
        </Link>

        <Link href={"/"}>
          <div className="h-10 flex items-center px-3">
            <div className="m-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-logout" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                <path d="M7 12h14l-3 -3m0 6l3 -3" />
              </svg>
            </div>

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
