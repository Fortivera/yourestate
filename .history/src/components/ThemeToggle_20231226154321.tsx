"use client"

import { ThemeContext } from "@/context/ThemeContex"
import Image from "next/image"
import { useContext } from "react"

export default function ThemeToggle() {
    const { toggle, theme } = useContext(ThemeContext)

    return (
        <div className="flex items-center w-14 h-6 rounded-full cursor-pointer justify-between  relative" onClick={toggle} style={theme === "dark" ? { backgroundColor: "white" } : { backgroundColor: "#0f172a" }}>
            <Image src="/static/moon.png" alt={"moon icon"} width={18} height={10} className={"m-1"} />
            <div className="rounded-full w-5 h-5 absolute m-0.5" style={theme === "dark" ? { left: 1, background: "#0f172a" } : { right: 1, background: "white" }} />
            <Image src="/static/sun.png" alt={"sun icon"} width={18} height={10} className={"m-1"} />
        </div>
    )
}
