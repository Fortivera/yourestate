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
        <div className={`group relative flex flex-col px-3 rounded-md font-Noto text-base border-[1px] border-b-[2px] ${theme === "light" ? "bg-[#dee3e88a] border-slate-300" : "bg-neutral-900/20 border-[#5e6775]"} transition-all duration-300 ease-linear`}>
            <button className="py-2 rounded-md shadow-lg transform transition-all duration-300 ease-linear hover:shadow-inner hover:-translate-y-1">
                <h1 className="text-center text-lg py-1"> {property.type}</h1>
                <div className="flex flex-col items-start px-2.5">
                    <div>
                        {property.city}, {property.country}
                    </div>
                    <div>Rent:${property.rent}</div>
                </div>
            </button>
        </div>
    )
}
