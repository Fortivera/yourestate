"use client"
import { createContext, useState, ReactNode, useEffect } from "react";


interface ComponentProps {
    children: ReactNode
}


// this component is responsible to registering and remembering what theme was chosen by the user
// we use local storage for that 
export const ThemeContext = createContext<{ theme: string; toggle: () => void }>({
    theme: "light",
    toggle: () => { },
});


function getFormLocalStorage() {
    if (typeof window !== "undefined") {
        return localStorage.getItem("theme") || "light"
    }
    return "light"
}


export const ThemeContextProvider = ({ children }: ComponentProps) => {
    const [theme, setTheme]: any = useState(() => {
        return getFormLocalStorage()
    })

    // since next.js uses server side rendering, we must specify if the transition to client only is completed
    const toggle = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggle }}>
            {children}
        </ThemeContext.Provider>
    );
} 