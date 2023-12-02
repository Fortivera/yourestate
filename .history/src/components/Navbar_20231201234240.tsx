"use client"
import Link from "next/link"
import ThemeToggle from "./ThemeToggle"
import { ThemeContext } from "@/context/ThemeContex"
import { useContext, useState } from "react"
import SvgLogout from "public/static/SvgLogout"
import SvgAddProperty from "public/static/SvgAddProperty"
import SvgLogoName from "public/static/SvgLogoName"
import SvgMainLogo from "public/static/SvgMainLogo"
import SvgUser from "public/static/SvgUser"

export default function Navbar() {
  const { theme } = useContext(ThemeContext)
  const [menuOpen, setMenuOpen] = useState(false)

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <nav className={`w-full ${theme === "light" ? "navbarLight" : "navbarDark"} font-Noto text-lg md:shadow-sm shadow-slate-100 flex items-center md:justify-between h-14  top-0`}>
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
        <div className="h-10 flex items-center px-3">
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

      {/* Mobile Navbar (Burger Menu) */}

      <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown button <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
      </svg>
      </button>


      <div id="dropdown" className="z-10  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
          </li>
        </ul>
      </div>

    </nav>
  )
}
