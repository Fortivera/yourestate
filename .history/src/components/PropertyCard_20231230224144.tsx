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
        <div className={`flex flex-col px-3 rounded-md font-Noto text-base border-2 transition-all duration-300 ease-in-out ${theme === "light" ? "bg-[#dee3e88a] hover:bg-slate-200 border-slate-300 hover:shadow-lg hover:-translate-y-1" : "bg-neutral-900/20 hover:bg-slate-700/60 border-[#5e6775] hover:shadow-dark-lg hover:-translate-y-1"} `}>
            <div className="py-2">
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
