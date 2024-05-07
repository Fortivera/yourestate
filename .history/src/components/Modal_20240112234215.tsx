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
            <div className="bg-black/20 backdrop-blur-sm bg-blend-saturation  fixed top-0 w-full h-screen bg-cover z-30  " onClick={closeHandler} />
            <dialog
                open
                className={`
                        ${theme === "light" ? "bg-white border-[#9ea1a9]" : "bg-[#33363e] text-[#e6e1e1] border-[#6c7079]"}
                        w-[80%] max-w-[480px]   
                        mx-auto border-[1px] border-b-[2px]  rounded-lg shadow-sm overflow-hidden pt-1  top-14 z-30  h-screen
                    `}
            >
                {children}
            </dialog>
        </>
    )
}
