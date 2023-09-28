import { ThemeContext } from "@/context/ThemeContex"
import { useState, useContext, ReactNode } from "react"

interface ComponentProps {
    children: ReactNode
}


export default function ThemeProvider() {
    const { theme }: any = useContext(ThemeContext)
    return <div className={theme}>{children}</div>
}