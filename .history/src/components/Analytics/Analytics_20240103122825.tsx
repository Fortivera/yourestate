"use client"
import Loading from "@/app/loading"
import { ThemeContext } from "@/context/ThemeContex"
import { useQuery } from "@tanstack/react-query"
import { getProperty } from "lib/useRequestFunctions"
import React, { Suspense, useContext } from "react"
import { D3BarChart } from "./D3charts/D3BarChart"
import { D3DonutPieChart } from "./D3charts/D3DonutPieChart"
import { D3PieChart } from "./D3charts/D3PieChart"

// interface Props {
//     allProperties: Property[]
// }

export const Analytics = () => {
    const { theme } = useContext(ThemeContext)
    const { data: allProperties, error } = useQuery({
        queryKey: ["allProperties"],
        queryFn: getProperty,
    })
    if (error) return <div>Failed to load</div>
    return (
        <>
            {/* <div className="w-full h-full">{<iframe height="100%" width="100%" title="Report Section" src="https://app.powerbi.com/view?r=eyJrIjoiZDVmOGZlMWMtN2VkYS00NmRkLWJiZDgtMGY1MzQyNTdlOWQ1IiwidCI6IjcwYWQ5MjFmLTFmZjQtNDZjNC1hMmZkLWIxNTc0MjcxODQ3NiJ9" allowFullScreen={true}></iframe>}</div> */}
            <div className={`${theme === "light" ? "bg-slate-50 shadow-darkInner shadow-[#e7eaee] border-[#307ae9]" : "bg-[#515F73] border-[#5f6c80] shadow-darkInner"} grid grid-cols-1    desktop:grid-cols-2 w-full py-2 px-1 font-Poppins border-t-2 md:border-hidden md:shadow-sm`}>
                <div>
                    <Suspense fallback={<Loading />}>
                        <D3DonutPieChart allProperties={allProperties!} />
                    </Suspense>
                </div>
                <div>
                    <Suspense fallback={<Loading />}>
                        <D3PieChart allProperties={allProperties!} />
                    </Suspense>
                </div>
                <div className="md:col-span-full flex justify-center">
                    <Suspense fallback={<Loading />}>
                        <D3BarChart allProperties={allProperties!} />
                    </Suspense>
                </div>
            </div>
        </>
    )
}
