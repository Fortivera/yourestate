"use client"
import { ThemeContext } from "@/context/ThemeContex"
import React, { useContext } from "react"
import { D3BarChart } from "./D3BarChart"
import { D3DonutPieChart } from "./D3DonutPieChart"
import { D3PieChart } from "./D3PieChart"

interface Props {
    allProperties: Property[]
}

export const Analytics = ({ allProperties }: Props) => {
    const { theme } = useContext(ThemeContext)

    return (
        <>
            {/* <div className="w-full h-full">{<iframe height="100%" width="100%" title="Report Section" src="https://app.powerbi.com/view?r=eyJrIjoiZDVmOGZlMWMtN2VkYS00NmRkLWJiZDgtMGY1MzQyNTdlOWQ1IiwidCI6IjcwYWQ5MjFmLTFmZjQtNDZjNC1hMmZkLWIxNTc0MjcxODQ3NiJ9" allowFullScreen={true}></iframe>}</div> */}
            <div className={`${theme === "light" ? "bg-white" : "bg-slate-600"} flex flex-col md:flex-row md:justify-center w-full p-1 `}>
                <D3DonutPieChart allProperties={allProperties} />
            </div>
        </>
    )
}
