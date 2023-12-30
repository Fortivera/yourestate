"use client"
import { ThemeContext } from "@/context/ThemeContex"
import React, { useContext } from "react"
import { D3BarChart } from "./D3charts/D3BarChart"
import { D3DonutPieChart } from "./D3charts/D3DonutPieChart"
import { D3PieChart } from "./D3charts/D3PieChart"

interface Props {
  allProperties: Property[]
}

export const Analytics = ({ allProperties }: Props) => {
  const { theme } = useContext(ThemeContext)

  return (
    <>
      {/* <div className="w-full h-full">{<iframe height="100%" width="100%" title="Report Section" src="https://app.powerbi.com/view?r=eyJrIjoiZDVmOGZlMWMtN2VkYS00NmRkLWJiZDgtMGY1MzQyNTdlOWQ1IiwidCI6IjcwYWQ5MjFmLTFmZjQtNDZjNC1hMmZkLWIxNTc0MjcxODQ3NiJ9" allowFullScreen={true}></iframe>}</div> */}
      <div className={`${theme === "light" ? "bg-slate-50" : "bg-[#515F73]"} grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[1fr_min-content] w-full p-1 font-Poppins`}>
        <D3DonutPieChart allProperties={allProperties} />
        <D3PieChart allProperties={allProperties} />
        <div className="col-start-2 flex justify-center">
          <D3BarChart allProperties={allProperties} />
        </div>
      </div>
    </>
  )
}
