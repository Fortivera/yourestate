import { ThemeContext } from "@/context/ThemeContex"
import { useState, useContext } from "react"

export default function ThemeProvider() {
    const { theme }: any = useContext(ThemeContext)
    return <div className={theme}>{children}</div>
}