"use client"
import { createContext, useState } from "react";

export const ThemeContext = createContext()

function getFormLocalStorage() {
    const value = localStorage.getItem("theme")

    return value || "light"
}

export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        // since next.js uses server side rendering, we must mention that the value is taken from the localStorage 
        // when the application is an server side rendering
    })
    return <ThemeContextProvider>{children}</ThemeContextProvider>
} 