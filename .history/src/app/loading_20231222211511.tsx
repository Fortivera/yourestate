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
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
          <h1 className="text-lg mt-4">Loading...</h1>
        </div>
      </div>
    </>
  )
}