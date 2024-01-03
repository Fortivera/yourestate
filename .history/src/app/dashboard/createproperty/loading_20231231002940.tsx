"use client"

import { ThemeContext } from "@/context/ThemeContex"
import { useContext } from "react"

export default function Loading() {
    const { theme } = useContext(ThemeContext)

    return (
        <>
            <div
                className={`fixed inset-0 bg-black bg-opacity-10 backdrop-blur-sm z-40
                      transition-opacity duration-300 ease-in-out`}
            ></div>
            <div className={`fixed inset-0 z-50 flex items-center justify-center`}>
                <div
                    className={`${theme === "light" ? "bg-white text-black" : "bg-gray-700 text-white"} 
                        rounded-xl shadow-2xl p-6 mx-auto 
                        flex flex-col items-center 
                        w-40`}
                >
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
                    <div
                        className="animate-pulse 
                        transition-transform duration-100 ease-in-out text-lg mt-4"
                    >
                        Loading...
                    </div>
                </div>
            </div>
        </>
    )
}
