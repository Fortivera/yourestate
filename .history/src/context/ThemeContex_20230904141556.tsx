"use client"
import { createContext, useState } from "react";

export const ThemeContext = createContext()

function getFormLocalStorage() {
    const value = localStorage.getItem("theme")

    return value || "light"
}

export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        // since next.js uses server side rendering, we must specify if the transition to client only is completed
        if (typeof window !== undefined) {
            const value = localStorage.getItem("theme")
            return value || "light"
        }
    })
    return <ThemeContext.Provider value={ }>{children}</ThemeContext.Provider>
} 