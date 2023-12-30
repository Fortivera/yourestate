/* eslint-disable prettier/prettier */
// components/PieChart.tsx
// InteractivePieChart.tsx
"use client"

// Import necessary libraries
import React, { useContext, useEffect, useRef } from "react"
import * as d3 from "d3"
import { ThemeContext } from "@/context/ThemeContex"

interface Props {
  allProperties: Property[]
}

interface EnergySums {
  electricity: number
  gas: number
  hydro: number
}

export const D3BarChart: React.FC<Props> = ({ allProperties }: Props) => {
  const ref = useRef<SVGSVGElement>(null)
  const { theme } = useContext(ThemeContext)

  useEffect(() => {
    // Clean up existing elements before creating a new chart
    const svg = d3.select(ref.current)
    svg.selectAll("*").remove()

    // Create a new bar chart
    createBarChart(allProperties)
  }, [allProperties])

  const createBarChart = (data: Property[]) => {
    const energySumsByCountry = new Map<string, EnergySums>()

    data.forEach((property) => {
      if (!energySumsByCountry.has(property.country)) {
        energySumsByCountry.set(property.country, {
          electricity: property.electricity,
          gas: property.gas,
          hydro: property.hydro,
        })
      } else {
        const energySums = energySumsByCountry.get(property.country)!
        energySums.electricity += property.electricity
        energySums.gas += property.gas
        energySums.hydro += property.hydro
      }
    })

    const xScale = scaleBand()
      .domain(energyTuples.map(([country]) => country))
      .range([0, 500])
      .padding(0.1)

    const yScale = scaleLinear().domain([0, max(energyTuples, ([, energySums]) => Math.max(energySums.electricity, energySums.gas, energySums.hydro))])
  }

  return (
    <div className={`${theme === "light" ? "bg-slate-50" : "bg-[#515F73]"} w-full`}>
      <div className="max-w-[42.5rem] mx-auto p-2">
        <svg ref={ref} style={{ width: "100%", height: "auto" }} />
      </div>
    </div>
  )
}
