"use client"

import { ThemeContext } from "@/context/ThemeContex"
import { useContext } from "react"

export default function Loading() {
    const { theme } = useContext(ThemeContext)
    return (
        <>
            <div className="bg-black/20 backdrop-blur-xs bg-blend-saturation fixed top-0 w-full h-screen bg-cover z-10 " />
            <dialog open className={`${theme === "light" ? "bg-white" : "bg-slate-500/60"} border rounded-lg shadow-sm overflow-hidden pt-1 z-10 top-96`}>
                <h1 className="text-lg">Loading...</h1>
            </dialog>
        </>
    )
}
