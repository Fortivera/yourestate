"use client"
import Link from "next/link"
import Avatar from "./Avatar"
import ThemeToggle from "./ThemeToggle"

import { ThemeContext } from "@/context/ThemeContex"
import { useContext } from "react"

export default function Navbar() {
    const { theme } = useContext(ThemeContext)


    return (
        <nav className={`${theme === "light" ? "navbarLight" : "navbarDark"} flex font-Noto text-lg shadow-sm shadow-slate-100`}>
            <svg
                viewBox="0 0 50  "
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"

            >
                <path
                    d="M73.232 81C70.544 78.056 70.16 74.472 69.008 62.44C68.112 53.096 63.248 48.36 54.928 46.696C64.784 45.416 72.08 37.736 72.08 25.96C72.08 10.216 61.712 0.359993 40.848 0.359993H0.144V81H21.52V54.248H35.984C43.28 54.248 47.248 56.296 47.888 65.512C48.528 73.832 49.552 78.824 51.216 81H73.232ZM21.52 37.48V17.768H37.008C46.224 17.768 50.832 21.224 50.832 27.752C50.832 35.176 46.224 37.48 37.008 37.48H21.52ZM120.699 60.648C118.779 65.128 115.195 67.048 109.563 67.048C103.291 67.048 98.171 63.72 97.659 56.68H137.723V50.92C137.723 35.432 127.611 22.376 108.539 22.376C90.747 22.376 77.435 35.304 77.435 53.352C77.435 71.528 90.491 82.536 108.795 82.536C123.899 82.536 134.395 75.24 137.339 62.184L120.699 60.648ZM97.915 46.696C98.683 41.32 101.627 37.224 108.283 37.224C114.427 37.224 117.755 41.576 118.011 46.696H97.915ZM179.156 57.192C179.156 64.616 174.42 68.968 168.532 68.968C165.076 68.968 162.772 67.048 162.772 64.104C162.772 60.392 165.716 58.856 170.708 57.832L179.156 56.296V57.192ZM199.508 44.776C199.508 28.904 188.372 22.376 173.268 22.376C156.116 22.376 146.772 31.08 144.98 43.624L164.18 44.904C165.076 40.68 167.38 37.736 171.988 37.736C176.98 37.736 179.156 40.552 179.156 45.288V46.184L163.156 48.872C150.74 51.048 142.804 55.784 142.804 66.792C142.804 76.52 150.1 82.28 161.236 82.28C170.324 82.28 176.852 78.824 180.18 72.168C182.1 78.696 187.604 82.28 194.644 82.28C200.532 82.28 204.628 80.616 207.572 78.568V67.56C205.908 68.2 204.628 68.456 202.964 68.456C200.788 68.456 199.508 67.176 199.508 64.232V44.776ZM209.935 52.456C209.935 70.632 223.119 82.536 241.167 82.536C258.319 82.536 267.919 71.528 269.327 57.704L252.303 56.424C250.895 63.464 247.439 66.92 241.423 66.92C235.151 66.92 230.799 62.696 230.799 52.456C230.799 42.216 235.151 37.992 241.423 37.992C247.439 37.992 250.895 41.32 252.303 48.36L269.327 47.208C267.919 33.512 258.319 22.376 241.167 22.376C223.119 22.376 209.935 34.408 209.935 52.456ZM279.305 65.128C279.305 78.568 288.393 82.536 297.993 82.536C305.801 82.536 310.793 80.616 315.145 77.416V63.976C311.689 65.384 308.873 65.896 306.313 65.896C302.089 65.896 299.785 63.976 299.785 59.112V38.248H314.633V23.912H299.785V8.168H286.729L284.809 15.592C283.401 20.84 281.609 23.912 275.849 24.808L271.625 25.448V38.248H279.305V65.128ZM419.732 81C417.044 78.056 416.66 74.472 415.508 62.44C414.612 53.096 409.748 48.36 401.428 46.696C411.284 45.416 418.58 37.736 418.58 25.96C418.58 10.216 408.212 0.359993 387.348 0.359993H346.644V81H368.02V54.248H382.484C389.78 54.248 393.748 56.296 394.388 65.512C395.028 73.832 396.052 78.824 397.716 81H419.732ZM368.02 37.48V17.768H383.508C392.724 17.768 397.332 21.224 397.332 27.752C397.332 35.176 392.724 37.48 383.508 37.48H368.02ZM444.799 52.456C444.799 43.88 447.871 37.992 455.167 37.992C462.335 37.992 465.535 43.88 465.535 52.456C465.535 61.032 462.335 66.92 455.167 66.92C447.871 66.92 444.799 61.032 444.799 52.456ZM486.399 52.456C486.399 34.792 473.727 22.376 455.167 22.376C436.479 22.376 423.935 34.792 423.935 52.456C423.935 70.248 436.479 82.536 455.167 82.536C473.727 82.536 486.399 70.248 486.399 52.456ZM532.264 51.944C532.264 60.648 529.704 66.28 523.176 66.28C516.904 66.28 514.728 62.056 514.728 54.376V23.912H493.992V59.88C493.992 71.784 498.728 82.536 514.344 82.536C522.92 82.536 529.192 78.824 532.264 72.424V81H553V23.912H532.264V51.944ZM566.305 65.128C566.305 78.568 575.393 82.536 584.993 82.536C592.801 82.536 597.793 80.616 602.145 77.416V63.976C598.689 65.384 595.873 65.896 593.313 65.896C589.089 65.896 586.785 63.976 586.785 59.112V38.248H601.633V23.912H586.785V8.168H573.729L571.809 15.592C570.401 20.84 568.609 23.912 562.849 24.808L558.625 25.448V38.248H566.305V65.128ZM650.324 60.648C648.404 65.128 644.82 67.048 639.188 67.048C632.916 67.048 627.796 63.72 627.284 56.68H667.348V50.92C667.348 35.432 657.236 22.376 638.164 22.376C620.372 22.376 607.06 35.304 607.06 53.352C607.06 71.528 620.116 82.536 638.42 82.536C653.524 82.536 664.02 75.24 666.964 62.184L650.324 60.648ZM627.54 46.696C628.308 41.32 631.252 37.224 637.908 37.224C644.052 37.224 647.38 41.576 647.636 46.696H627.54ZM720.045 24.552C718.637 23.4 715.565 22.376 712.109 22.376C704.557 22.376 698.541 27.624 696.493 34.024V23.912H675.757V81H696.493V54.888C696.493 45.288 701.229 41.704 708.909 41.704C712.877 41.704 715.949 42.472 718.765 44.136L720.045 24.552Z"
                    fill="currentColor"
                ></path>
            </svg>
            <div className="flex items-center justify-center">

            </div>
            <div className="flex justify-end pr-5  items-center">
                <ThemeToggle />
                <Link href={'dashboard/createproperty'}  >
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


                <Link href={'/'}>
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
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                        width="24" height="24" viewBox="0 0 512.000000 512.000000"
                        preserveAspectRatio="xMidYMid meet" stroke="currentColor" fill="none">

                        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="currentColor">
                            <path d="M2240 5105 c-300 -39 -543 -112 -815 -245 -617 -302 -1101 -864
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
                            251 330 201 201 413 320 686 386 100 24 285 44 345 38 14 -2 66 -5 115 -8z"/>
                        </g>
                    </svg>
                    <div className="ml-1">Admin</div>
                </div>
            </div>

        </nav >
    )
}

