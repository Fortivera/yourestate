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
        <div className={`flex flex-col px-3 rounded-md font-Noto text-base border-[1px] border-b-[2px] transition-all duration-300 ease-in-out ${theme === "light" ? "bg-[#dee3e88a] border-slate-300 shadow-sm hover:bg-slate-200 hover:shadow-inner hover:border-slate-400" : "bg-neutral-900/20 border-[#5e6775] shadow-dark-sm hover:bg-slate-700/60 hover:shadow-dark-inner hover:border-[#707880]"} `}>
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
