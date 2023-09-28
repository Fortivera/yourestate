"use client"

import { ThemeContext } from "@/context/ThemeContex";
import Image from "next/image";
import { useContext } from "react";

export default function ThemeToggle() {
    const { theme }: any = useContext(ThemeContext)
    console.log(theme)
    return (
        <div className="flex items-center w-14 h-6 rounded-[50px] cursor-pointer justify-between bg-black relative">
            <Image src="/static/sun.png" alt={"sun icon"} width={18} height={10} className={"m-1"} />
            <div className="rounded-full bg-white w-5 h-5 absolute m-0.5"></div>
            <Image src="/static/moon.png" alt={"moon icon"} width={18} height={10} className={"m-1"} />
        </div>
    )
}  