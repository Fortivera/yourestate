"use client"
import Link from "next/link"
import ThemeToggle from "./ThemeToggle"
import { ThemeContext } from "@/context/ThemeContex"
import { useContext } from "react"
import SvgLogout from "public/static/SvgLogout"
import SvgAddProperty from "public/static/SvgAddProperty"
import SvgLogoName from "public/static/SvgLogoName"
import SvgMainLogo from "public/static/SvgMainLogo"
import SvgUser from "public/static/SvgUser"

export default function Navbar() {
  const { theme } = useContext(ThemeContext)

  return (
    <nav className={`${theme === "light" ? "navbarLight" : "navbarDark"} font-Noto text-lg shadow-sm shadow-slate-100 flex items-center justify-between `}>
      <div className="flex items-center">
        <SvgMainLogo height="40" width="42" className=" md:h-12 md:w-12 pt-[6px] pl-2" />
        <SvgLogoName fill="currentColor" fontFamily="Segoe UI Black" fontWeight="800" fontSize="30" />
      </div>
      <div className="flex items-center space-x-5">
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
            <div>Logout </div>
          </div>
        </Link>
        <div className="h-10 flex items-center px-3">
          <SvgUser />
          <div className="ml-1">Admin</div>
        </div>
      </div>
    </nav>
  )
}
