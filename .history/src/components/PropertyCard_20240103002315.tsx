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
        <div
            className={`flex flex-col px-3 rounded-md font-Noto text-base transition-all duration-[180ms] hover:scale-[98%] ease-in-out
    ${theme === "light" ? "bg-[#dee3e88a] border-[1px] border-b-[2px] border-[#cbccce] shadow-sm   hover:bg-slate-300 hover:shadow-none" : "bg-neutral-900/20 border-[1px] border-b-[2px] border-[#5e6775] shadow-darkSm   hover:bg-neutral-800 hover:shadow-none hover:border-none"}`}
        >
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
