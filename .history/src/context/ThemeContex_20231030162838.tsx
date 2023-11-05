"use client"
import { createContext, useState, ReactNode, useEffect } from "react"

interface ChildrenProps {
  children: ReactNode
}

interface ThemeContextType {
  theme: string
  toggle: () => void
}

// This component is responsible to registering and remembering what theme was chosen by the user
// we use local storage for that
export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggle: () => { }
})

function getFormLocalStorage() {
  return localStorage.getItem("theme") || "light"
}

export const ThemeContextProvider = ({ children }: ChildrenProps) => {
  const [theme, setTheme] = useState<string>(getFormLocalStorage)

  // since next.js uses server side rendering, we must specify if the transition to client is completed
  const toggle = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
  }

  useEffect(() => {
    localStorage.setItem("theme", theme)
  }, [theme])

  return <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>
}
