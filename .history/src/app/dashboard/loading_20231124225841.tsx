"use client"

import { ThemeContext } from "@/context/ThemeContex"
import { useContext } from "react"

export default function Loading() {
  const { theme } = useContext(ThemeContext)
  const shimmer = "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent"
  return (
    <>
      <div
        className={`${shimmer} relative overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm`}
      >
        <div className="bg-black/20 backdrop-blur-xs bg-blend-saturation fixed top-0 w-full h-screen bg-cover z-10 " />
        <dialog open className={`${theme === "light" ? "bg-white" : "bg-slate-500 text-white"} border rounded-lg shadow-sm overflow-hidden pt-1 z-10 top-96`}>
          <h1 className="text-lg">Loading...</h1>
        </dialog>
      </>
      )
}
