"use client"

import { ThemeContext } from "@/context/ThemeContex"
import { useContext } from "react"

export default function Loading() {
    const { theme } = useContext(ThemeContext)

    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-40" />
            <div className={`fixed inset-0 z-50 flex items-center justify-center`}>
                <div
                    className={`${theme === "light" ? "bg-white" : "bg-gray-700"} 
                        rounded-xl shadow-2xl p-6 max-w-sm mx-auto 
                        flex flex-col items-center animate-pulse`}
                >
                    <svg className="animate-spin h-12 w-12 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12c0 1.66.337 3.236.94 4.663A10.017 10.017 0 0112 22V2z"></path>
                    </svg>
                    <h1 className="text-lg mt-4">Loading...</h1>
                </div>
            </div>
        </>
    )
}
