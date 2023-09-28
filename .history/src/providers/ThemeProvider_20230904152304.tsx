import { ThemeContext } from "@/context/ThemeContex"
import { useState } from "react"

export default function ThemeProvider() {
    const { theme } = useState(ThemeContext)
    return <div className={theme}>{children}</div>
}