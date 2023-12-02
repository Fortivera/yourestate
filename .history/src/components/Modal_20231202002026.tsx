"use client"

import { MouseEventHandler, useContext } from "react"
import { useRouter } from "next/navigation"
import { ThemeContext } from "@/context/ThemeContex"

export const Modal = ({ children }: any) => {
  const router = useRouter()
  const { theme } = useContext(ThemeContext)
  const closeHandler: MouseEventHandler = (): void => {
    router.push("/dashboard")
  }
  return (
    <>
      <div className="bg-black/20 backdrop-blur-xs bg-blend-saturation fixed top-0 w-full h-screen bg-cover z-10 " onClick={closeHandler} />
      <dialog open className={`${theme === "light" ? "bg-white" : "bg-[#4b525e] text-[#e6e1e1]"} sm:w-96, md:w-1/2, lg:w-2/3, xl:w-1/2, 2xl:w-1/3 border rounded-lg shadow-sm overflow-hidden pt-1 z-10`}>
        {children}
      </dialog>
    </>
  )
}
