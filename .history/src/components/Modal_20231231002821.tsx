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
            <div className="bg-black/20 backdrop-blur-xs bg-blend-saturation fixed top-0 w-full h-screen z-10 " onClick={closeHandler} />
            <dialog
                open
                className={`
        ${theme === "light" ? "bg-[#dee3e88a] border-slate-300 shadow-lg" : "bg-neutral-900/20 border-[#5e6775] shadow-darkSm"}
        w-[80%] max-w-[480px] md:w-1/2   
        mx-auto rounded-lg overflow-hidden pt-1 z-20
        transition-all duration-300 ease-linear
    `}
            >
                {children}
            </dialog>
        </>
    )
}
