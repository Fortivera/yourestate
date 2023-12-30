"use client"


import { useState, useEffect, useContext, ReactNode } from "react"

interface ChildrenProps {
    children: ReactNode
}

export default function ThemeProvider({ children }: ChildrenProps) {
    const { theme } = useContext(ThemeContext)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    // Render nothing until the component has mounted
    if (!mounted) {
        return null
    }

    return <div className={theme}>{children}</div>
}
