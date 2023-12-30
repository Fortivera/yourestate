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

export const D3BarChart: React.FC<Props> = ({ allProperties }) => {
    const ref = useRef<SVGSVGElement>(null)
    const { theme } = useContext(ThemeContext)

    useEffect(() => {
        if (ref.current) {
            createBarChart(allProperties)
        }
    }, [allProperties])

    const createBarChart = (data: Property[]) => {
        const margin = { top: 20, right: 20, bottom: 40, left: 40 }
        const width = 960 - margin.left - margin.right
        const height = 500 - margin.top - margin.bottom

        // Clean up existing elements before creating a new chart
        d3.select(ref.current).selectAll("*").remove()

        const svg = d3
            .select(ref.current)
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`)

        // Aggregate the data by country into EnergySums
        const energySumsByCountry: Record<string, EnergySums> = data.reduce((acc, curr) => {
            if (!acc[curr.country]) {
                acc[curr.country] = { electricity: 0, gas: 0, hydro: 0 }
            }
            acc[curr.country].electricity += curr.electricity
            acc[curr.country].gas += curr.gas
            acc[curr.country].hydro += curr.hydro
            return acc
        }, {})

        const xScale = d3.scaleBand().domain(Object.keys(energySumsByCountry)).range([0, width]).padding(0.1)

        const yScale = d3
            .scaleLinear()
            .domain([0, d3.max(Object.values(energySumsByCountry), (d) => Math.max(d.electricity, d.gas, d.hydro))])
            .range([height, 0])

        const colorScale = d3.scaleOrdinal().domain(["electricity", "gas", "hydro"]).range(["#ffd1dc", "#c4edde", "#d3a3e1"])

        svg.append("g").attr("transform", `translate(0,${height})`).call(d3.axisBottom(xScale))

        svg.append("g").call(d3.axisLeft(yScale))

        const types: (keyof EnergySums)[] = ["electricity", "gas", "hydro"]

        types.forEach((type, index) => {
            svg.selectAll(`.${type}`)
                .data(Object.entries(energySumsByCountry))
                .enter()
                .append("rect")
                .attr("class", type)
                .attr("x", ([country]) => xScale(country)! + index * (xScale.bandwidth() / types.length))
                .attr("y", ([, sums]) => yScale(sums[type]))
                .attr("width", xScale.bandwidth() / types.length)
                .attr("height", ([, sums]) => height - yScale(sums[type]))
                .attr("fill", colorScale(type))
        })

        // Add the legend
        const legend = svg
            .selectAll(".legend")
            .data(types)
            .enter()
            .append("g")
            .attr("class", "legend")
            .attr("transform", (d, i) => `translate(0,${i * 20})`)

        legend
            .append("rect")
            .attr("x", width - 18)
            .attr("width", 18)
            .attr("height", 18)
            .attr("fill", colorScale)

        legend
            .append("text")
            .attr("x", width - 24)
            .attr("y", 9)
            .attr("dy", ".35em")
            .style("text-anchor", "end")
            .text((d) => d)
    }

    return (
        <div className={theme === "light" ? "bg-white" : "bg-gray-800"}>
            <svg ref={ref} />
        </div>
    )
}

export default D3BarChart
