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
        // Create a map to count occurrences of each country
        const countryCount = new Map<string, number>()
        data.forEach((property) => {
            const country = property.country
            countryCount.set(country, (countryCount.get(country) || 0) + 1)
        })

        // Convert map to an array of objects
        const countryData = Array.from(countryCount.entries(), ([country, count]) => ({ country, count }))

        // Set up the width and height of the chart
        const width = 710
        const height = 500

        // Set up scales
        const xScale = d3
            .scaleBand()
            .domain(countryData.map((d) => d.country))
            .range([0, width])
            .padding(0.1)

        const yScale = d3
            .scaleLinear()
            .domain([0, d3.max(countryData, (d) => d.count) || 0])
            .range([height, 0])

        // Create SVG element
        const svg = d3.select(ref.current).attr("viewBox", `0 0 ${width} ${height}`).attr("preserveAspectRatio", "xMidYMid meet")

        // Create bars
        svg.selectAll("rect")
            .data(countryData)
            .enter()
            .append("rect")
            .attr("x", (d) => xScale(d.country) || 0)
            .attr("y", (d) => yScale(d.count) || 0)
            .attr("width", xScale.bandwidth())
            .attr("height", (d) => height - yScale(d.count) || 0)
            .attr("fill", "steelblue") // Adjust the color as needed

        // Create axes if necessary
        const xAxis = d3.axisBottom(xScale)
        svg.append("g").attr("transform", `translate(0, ${height})`).call(xAxis)

        const yAxis = d3.axisLeft(yScale)
        svg.append("g").call(yAxis)

        // Additional styling or interactivity can be added as needed
    }

    return (
        <div className={`${theme === "light" ? "bg-slate-50" : "bg-[#515F73]"} w-full`}>
            <div className="max-w-[42.5rem] mx-auto p-2">
                <svg ref={ref} style={{ width: "100%", height: "auto" }} />
            </div>
        </div>
    )
}
