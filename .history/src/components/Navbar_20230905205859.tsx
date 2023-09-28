"use client"
import Link from "next/link"
import Avatar from "./Avatar"
import ThemeToggle from "./ThemeToggle"

import { ThemeContext } from "@/context/ThemeContex"
import { useContext } from "react"

export default function Navbar() {
    const { theme } = useContext(ThemeContext)


    return (
        <nav className={`  ${theme === "light" ? "navbarLight" : "navbarDark"}  font-Noto text-lg shadow-sm shadow-slate-100`}>
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" xmlSpace="preserve" version="1.1" viewBox="0 0 24 24">
                        <image width="24" height="24" xlinkHref="data:image/png;base64,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" />
                    </svg>
                    <div className="ml-1">Admin</div>
                </div>
            </div>

        </nav >
    )
}

