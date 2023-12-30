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
export default function Property({ property }: Props) {
    const { theme } = useContext(ThemeContext)
    return (
        <div className={`flex flex-col mx-3 rounded-md font-Noto text-base ${theme === "light" ? "hover:bg-slate-200" : "hover:bg-slate-700 /60 border-b-gray-400"} `}>
            <div className="py-2">
                <h1 className="text-center text-lg"> {property.type}</h1>
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
