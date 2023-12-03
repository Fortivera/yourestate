"use client"
import Link from "next/link"
import ThemeToggle from "./ThemeToggle"
import { ThemeContext } from "@/context/ThemeContex"
import { useContext, useEffect, useRef, useState } from "react"
import SvgLogout from "public/static/SvgLogout"
import SvgAddProperty from "public/static/SvgAddProperty"
import SvgLogoName from "public/static/SvgLogoName"
import SvgMainLogo from "public/static/SvgMainLogo"
import SvgUser from "public/static/SvgUser"

export default function Navbar() {
  const { theme } = useContext(ThemeContext)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement | null>(null)

  const handleMenuToggle = (event: React.MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setMenuOpen(!menuOpen)
    }
  }

  useEffect(() => {
    function handleClickOutside(event: Event) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false)
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [menuRef])

  return (
    <>
      <nav className={`w-full ${theme === "light" ? "navbarLight" : "navbarDark"} font-Noto text-lg md:shadow-sm shadow-slate-100 flex  justify-between h-14 top-0`}>
        <div className="flex items-center">
          <SvgMainLogo height="40" width="42" className="h-12 w-12 pt-[6px] pl-2" />
          <SvgLogoName fill="currentColor" fontFamily="Segoe UI Black" fontWeight="800" fontSize="30" />
        </div>

        {/* Desktop Navbar */}
        <div className={`hidden md:flex items-center`}>
          <ThemeToggle />
          <Link href={"dashboard/createproperty"}>
            <div className="h-10 flex items-center px-3">
              <SvgAddProperty className="m-1" strokeWidth={1.5} />
              <div>Add Property</div>
            </div>
          </Link>
          <Link href={"/"}>
            <div className="h-10 flex items-center px-3">
              <SvgLogout strokeWidth={2} className="m-1" />
              <div>Logout</div>
            </div>
          </Link>
          <div className={"h-10 flex items-center px-3"}>
            <SvgUser />
            <div className="ml-1">Admin</div>
          </div>
        </div>

        {/* Burger Menu */}
        <button className="md:hidden cursor-pointer p-2 mr-1.5" onClick={handleMenuToggle}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
      {/* Mobilie Navbar */}
      <div ref={menuRef} className={`md:hidden ${menuOpen ? "flex" : "hidden"} relative w-full z-50 transition-all duration-500 ease-in-out`}>
        <div className={`flex flex-col absolute right-0 border border-t-[#dddddda4] shadow-lg rounded-b-lg overflow-hidden backdrop-filter backdrop-blur-md ${theme === "light" ? "bg-gray-50 bg-opacity-50 text-gray-700" : "bg-gray-600 bg-opacity-50 text-gray-300"} p-1`}>
          <div className="px-3">
            <ThemeToggle />
          </div>
          <Link href={"dashboard/createproperty"}>
            <div onClick={() => setMenuOpen(false)} className={`h-10 flex items-center px-3 ${theme === "light" ? "text-blue-500 hover:bg-slate-200 " : "text-blue-300 hover:bg-slate-500"}`}>
              <SvgAddProperty className="m-1" strokeWidth={1.5} />
              <div>Add Property</div>
            </div>
          </Link>
          <Link href={"/"}>
            <div className={`h-10 flex items-center px-3 ${theme === "light" ? "text-red-500 hover:bg-slate-200" : "text-red-300 hover:bg-slate-500"}`}>
              <SvgLogout strokeWidth={2} className="m-1" />
              <div>Logout</div>
            </div>
          </Link>
          <div className={`h-10 flex items-center px-3 ${theme === "light" ? "text-gray-500 " : "text-gray-300 "}`}>
            <SvgUser />
            <div className="ml-1">Admin</div>
          </div>
        </div>
      </div>
    </>
  )
}
