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
            <div className="bg-black/20 backdrop-blur-sm bg-blend-saturation  fixed top-0 w-full h-screen bg-cover z-10 " onClick={closeHandler} />
            <dialog
                open
                className={`
    ${theme === "light" ? "bg-white" : "bg-[#33363e] text-[#e6e1e1]"}
    w-[80%] max-w-[480px] md:w-1/2   
    mx-auto border-[1px] border-b-[2px] border-black rounded-lg shadow-sm overflow-hidden pt-1 z-10
  `}
            >
                {children}
            </dialog>
        </>
    )
}
