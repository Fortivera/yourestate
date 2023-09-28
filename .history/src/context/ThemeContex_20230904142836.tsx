"use client"
import { createContext, useState } from "react";
import { ReactNode } from 'react';

interface ComponentProps {
    children: ReactNode
}



export const MyContext = createContext<string | undefined>(undefined);

function getFormLocalStorage() {
    const value = localStorage.getItem("theme")

    return value || "light"
}

export const ThemeContextProvider = ({ children }: ComponentProps) => {
    const [theme, setTheme] = useState(() => {

        // since next.js uses server side rendering, we must specify if the transition to client only is completed
        if (typeof window !== undefined) {
            const value: string = localStorage.getItem("theme") as string
            return value || "light"
        }
    })
    return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
} 