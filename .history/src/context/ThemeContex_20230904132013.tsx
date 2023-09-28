"use client"
import { createContext, useState } from "react";

export const ThemeContext = createContext()

function getFormLocalStorage() {
    const value = localStorage.getItem("theme")

    return value || "light"
}

export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState("light")
    return <ThemeContextProvider>{children}</ThemeContextProvider>
} 