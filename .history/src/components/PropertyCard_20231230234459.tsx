"use client"

import { ThemeContext } from "@/context/ThemeContex"
import { useContext } from "react"

interface Props {
    property: {
        id: number
        city: string
        country: string
        type: string
        rent: number
    }
}
export default function PropertyCard({ property }: Props) {
    const { theme } = useContext(ThemeContext)
    return (
        // Tailwind CSS code
        <div className={`group relative flex flex-col px-3 rounded-md font-Noto text-base border-[1px] border-b-[2px] transition-all duration-300 ease-linear ${theme === "light" ? "bg-[#dee3e88a] border-slate-300 shadow-sm" : "bg-neutral-900/20 border-[#5e6775] shadow-darkSm"}`}>
            <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-slate-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-linear rounded-md ${theme === "light" ? "" : "gradient-dark"}`}></div>
            <div className="py-2 z-10 relative">
                <h1 className="text-center text-lg py-1"> {property.type}</h1>
                <div className="flex flex-col items-start px-2.5">
                    <div>
                        {property.city}, {property.country}
                    </div>
                    <div>Rent:${property.rent}</div>
                </div>
            </div>
        </div>
    )
}
