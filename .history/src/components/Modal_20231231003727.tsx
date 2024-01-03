"use client"

import { MouseEventHandler, useContext } from "react"
import { useRouter } from "next/navigation"
import { ThemeContext } from "@/context/ThemeContex"

export const Modal = ({ children }: any) => {
    const router = useRouter()
    const { theme } = useContext(ThemeContext)
    const closeHandler: MouseEventHandler = (): void => {
        router.push("/dashboard")
    }
    return (
        <>
            <div className="bg-black/20 backdrop-blur-md fixed inset-0 z-10" onClick={closeHandler} />
            <dialog
                open
                className={`
        ${theme === "light" ? "bg-[#2c3037] text-white" : "bg-[#1b1e23] text-[#e6e1e1]"}
        w-[80%] max-w-[480px] md:w-1/2
        mx-auto mt-20 rounded-2xl overflow-hidden z-20
        shadow-2xl
        transition-all duration-300 ease-in-out
        after:content-[''] after:block after:w-full after:h-full after:absolute after:inset-0 after:bg-gradient-to-br after:from-[#2c3037]/80 after:via-[#2c3037]/60 after:to-[#2c3037]/40 after:rounded-2xl
    `}
            >
                {children}
            </dialog>
        </>
    )
}
