"use client"
import React from "react"
import { D3PieChart } from "./D3PieChart"

export const Analytics = (allProperties: Property[]) => {
  return (
    <>
      {/* <div className="w-full h-full">{<iframe height="100%" width="100%" title="Report Section" src="https://app.powerbi.com/view?r=eyJrIjoiZDVmOGZlMWMtN2VkYS00NmRkLWJiZDgtMGY1MzQyNTdlOWQ1IiwidCI6IjcwYWQ5MjFmLTFmZjQtNDZjNC1hMmZkLWIxNTc0MjcxODQ3NiJ9" allowFullScreen={true}></iframe>}</div> */}
      <D3PieChart allProperties={allProperties} />
    </>
  )
}
