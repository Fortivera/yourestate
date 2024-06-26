"use client"

import { MouseEventHandler } from "react"
import { useRouter } from "next/navigation"

export const Modal = ({ children }: any) => {
    const router = useRouter()
    const closeHandler: MouseEventHandler = (): void => {
        router.push("/dashboard")
    }
    return (
        <>
            <div className="bg-black/20 backdrop-blur-xs bg-blend-saturation fixed top-0 w-full h-screen bg-cover   " onClick={closeHandler} />
            <dialog open className="border rounded-lg shadow-sm  overflow-hidden  ">
                {children}
            </dialog>
        </>
    )
}
