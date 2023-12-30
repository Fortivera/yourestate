"use client"
import { ThemeContext } from "@/context/ThemeContex"
import React, { useContext } from "react"
import { D3PieChart } from "./D3PieChart"

interface AnalyticsProps {
    allProperties: Property[]
}

export const Analytics: React.FC<AnalyticsProps> = ({ allProperties }) => {
    const { theme } = useContext(ThemeContext)

    return (
        <>
            {/* <div className="w-full h-full">{<iframe height="100%" width="100%" title="Report Section" src="https://app.powerbi.com/view?r=eyJrIjoiZDVmOGZlMWMtN2VkYS00NmRkLWJiZDgtMGY1MzQyNTdlOWQ1IiwidCI6IjcwYWQ5MjFmLTFmZjQtNDZjNC1hMmZkLWIxNTc0MjcxODQ3NiJ9" allowFullScreen={true}></iframe>}</div> */}
            <div className={`${theme === "light" ? "bg-white" : "bg-slate-500"}w-full md:max-w-[42.5rem] p-2`}>
                <D3PieChart allProperties={allProperties} />
            </div>
        </>
    )
}
