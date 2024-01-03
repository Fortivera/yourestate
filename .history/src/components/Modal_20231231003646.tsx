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
            <div className="bg-black/20 backdrop-blur-md bg-blend-saturation fixed inset-0 z-10" onClick={closeHandler} />
            <dialog
                open
                className={`
        ${theme === "light" ? "bg-[#a8a9ad] border-[#6e7076] shadow-xl" : "bg-[#33363e] border-[#1c1e22] shadow-2xl"}
        w-[80%] max-w-[480px] md:w-1/2
        mx-auto rounded-lg overflow-hidden pt-1 z-20
        transition-all duration-300 ease-linear
        after:content-[''] after:block after:w-full after:h-full after:absolute after:inset-0 after:bg-gradient-to-r after:from-transparent after:via-[#d5d6d9]/10 after:to-transparent after:rounded-lg
    `}
            >
                {children}
            </dialog>
        </>
    )
}
