"use client"
import { createContext, useState } from "react";
import { ReactNode } from 'react';

interface ComponentProps {
    children: ReactNode
}



export const ThemeContext = createContext("light")

function getFormLocalStorage() {
    if (typeof window !== "undefined") {
        const value = localStorage.getItem("theme");
        return value || "light";
    }
}

export const ThemeContextProvider = ({ children }: ComponentProps) => {
    const [theme, setTheme] = useState<any>(() => {
        return getFormLocalStorage()
    })
    // since next.js uses server side rendering, we must specify if the transition to client only is completed
    if (typeof window !== undefined) {
        const { localStorage } = window
        const value = localStorage.getItem("theme") as string
        return value || "light"
    }
    return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
} 